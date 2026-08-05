/**
 * YKCC AI Workshop — registration receiver.
 *
 * Appends each website registration as a row in the workshop leads spreadsheet.
 * See README.md in this folder for the one-time deployment steps.
 */

var SHEET_ID = '1iMYKZmw5QPenxchB5IoLC8NmLSkzT9AdcskNoHg-pck';
var SHEET_NAME = 'Registrations';
var HEADERS = [
  'Submitted At',
  'Lead ID',
  'Full Name',
  'Email',
  'Phone',
  'Company',
  'Job Role',
  'Status'
];

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse_({ ok: false, error: 'No registration data received.' });
    }

    var lead = JSON.parse(e.postData.contents);

    if (!lead.fullName || !lead.email || !lead.phone) {
      return jsonResponse_({ ok: false, error: 'Name, email and phone are all required.' });
    }

    getSheet_().appendRow([
      lead.submittedAt || new Date().toLocaleString(),
      lead.id || '',
      lead.fullName,
      lead.email,
      lead.phone,
      lead.companyName || '',
      lead.jobRole || '',
      lead.status || 'New'
    ]);

    return jsonResponse_({ ok: true });
  } catch (err) {
    return jsonResponse_({ ok: false, error: String(err) });
  }
}

/** Lets you confirm the deployment is live by opening the /exec URL in a browser. */
function doGet() {
  return jsonResponse_({ ok: true, message: 'YKCC registration endpoint is running.' });
}

function getSheet_() {
  var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }

  return sheet;
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
