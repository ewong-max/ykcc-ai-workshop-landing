export interface Exercise {
  id: string;
  chapter: number;
  code: string; // e.g., "Drill 1A", "Ex 2B", "Ex 4A"
  title: string;
  durationMinutes: number;
  description: string;
  promptText?: string;
  promptExplanation?: string;
  verificationSteps: string[];
  beCareful?: string;
  goodToKnow?: string;
}

export interface WorkshopModule {
  id: string;
  day: 1 | 2;
  startTime: string; // "09:00"
  endTime: string;   // "09:30"
  title: string;
  chapterSource: string; // e.g., "Chapters 1 & 2"
  objective: string;
  exercises: Exercise[];
  isBreak?: boolean;
  breakType?: 'tea' | 'lunch';
  pacingTip?: string;
}

export interface DaySchedule {
  dayNumber: 1 | 2;
  theme: string;
  subTitle: string;
  description: string;
  modules: WorkshopModule[];
}

export interface TestDataCase {
  caseNum: number;
  facts: string;
  expectedStatus: string;
  expectedTax: string;
  why: string;
}

export interface ChapterMapping {
  chapterNum: number;
  chapterTitle: string;
  originalDay: number;
  newDay: number | null; // null if omitted (Ch 11)
  timeSlotNew: string;
  statusNotes: string;
}

export interface InterestRegistration {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  jobRole: string;
  teamSize?: string;
  preferredMode?: 'In-Person (KL/PJ)' | 'Online Live Workshop' | 'In-House Corporate Training' | string;
  preferredSchedule?: 'Weekday (Thu-Fri)' | 'Weekend (Sat-Sun)' | 'Flexible / Next Available Batch' | string;
  interestedTopics?: string[];
  questionsOrNotes?: string;
  submittedAt: string;
  status: 'New' | 'Contacted' | 'Confirmed';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Curriculum' | 'Requirements' | 'Logistics';
}

export interface CourseHighlight {
  title: string;
  subtitle: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}
