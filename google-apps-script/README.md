# Connecting the registration form to your Google Sheet

The landing page sends each registration to a Google Apps Script, which appends it as a row
in your leads spreadsheet. This is the standard way to write to a Sheet from a public web
page — a browser has no safe way to hold a Google credential, so the script does the writing
under your account instead.

You only do this once, and it takes about two minutes.

## 1. Open the script editor

Open the leads spreadsheet:

<https://docs.google.com/spreadsheets/d/1iMYKZmw5QPenxchB5IoLC8NmLSkzT9AdcskNoHg-pck/edit>

Go to **Extensions → Apps Script**. A new tab opens with an empty `Code.gs`.

## 2. Paste the script

Delete whatever is in the editor, paste the entire contents of [`Code.gs`](Code.gs) from this
folder, and click the save icon.

## 3. Deploy it as a web app

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set **Execute as** to **Me**.
4. Set **Who has access** to **Anyone**.
5. Click **Deploy**.

Google will ask you to authorise the script the first time. It will warn that the app isn't
verified — that is expected for your own scripts. Choose **Advanced → Go to (project name)**
and allow it.

> **What "Anyone" means here:** anyone who knows the URL can send a registration row to the
> sheet. They cannot read the sheet, and they cannot see any existing rows. This is the same
> exposure a public Google Form has.

## 4. Copy the URL into the site

The deployment dialog shows a **Web app URL** ending in `/exec`. Copy it.

Open `src/lib/leadSubmission.ts` and paste it here:

```ts
export const APPS_SCRIPT_ENDPOINT = 'https://script.google.com/macros/s/AKfy.../exec';
```

Until this is filled in, the registration form shows a clear "not connected yet" notice
instead of silently losing submissions.

## 5. Check it works

Paste the `/exec` URL into a browser tab. You should see:

```json
{"ok":true,"message":"YKCC registration endpoint is running."}
```

Then submit a test registration on the site and confirm the row lands in the
**Registrations** tab of the spreadsheet. The script creates that tab with bold headers on
its first run, so an empty sheet is fine.

## If you change the script later

Apps Script serves the version you deployed, not the version you last saved. After editing,
use **Deploy → Manage deployments → (pencil icon) → Version: New version → Deploy** to push
your changes. The `/exec` URL stays the same.

## Troubleshooting

| Symptom | Cause |
| --- | --- |
| Form reports a network or CORS error | Deployment access is not set to **Anyone**, or you copied the `/dev` URL instead of `/exec` |
| `/exec` URL asks you to sign in | **Who has access** is still restricted |
| Rows stop appearing after an edit | You saved the script but did not deploy a new version |
