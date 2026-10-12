# StudyFellow learner survey

11 optional questions, three short sections, approximately three minutes. Questions about actual learning experiences appear before the product concept to reduce priming.

## Survey links and status

Links supplied by the project owner on 6 October 2026:

- **Public survey:** https://forms.gle/c9ssjT3W9q5GnyyLA — use this link in invitations and social posts.
- **Response spreadsheet — personal/project-owner use:** https://docs.google.com/spreadsheets/d/1tlKwukI7e3jv5AmJSTV8w18XfQUDRNqhf126xUSIs44/edit — keep out of public recruitment posts.

The owner has supplied the deployed survey and response destination. On 8 October 2026, the owner shared a descriptive analysis of 7 responses. The raw response sheet, access settings, and live branding have not been inspected in this session. The question count and duration above describe the prepared survey draft. Do not recreate the form to distribute it; use the supplied public link.

Platform-specific invitation drafts are saved in `survey-posts.md`. Posts are drafted only; publication remains with the owner. The owner-provided response analysis is summarized in `PROJECT_ROADMAP.md`; raw rows have not been independently reviewed.

## Feedback collection plan

- Invite college/university students and other active learners, including people who rarely use AI or have limited connectivity.
- Review responses for recent difficulties, failed workarounds, one-off versus scheduled-session preferences, and access constraints. The 8 October summary is directional (N=7); avoid generalizing beyond those respondents.
- Record the response count and review date with each analysis. Treat this convenience sample as directional feedback rather than representative of all students.
- Keep core survey questions stable while collecting feedback. Record any substantive wording changes with their date before comparing responses.
- Share aggregate findings or anonymized themes; keep individual responses in the owner's response sheet.

## Create in Google Forms

1. Open https://script.google.com/create while signed into your Google account.
2. Replace the default code with the contents of `studyfellow-survey.gs`.
3. Select `createStudyFellowSurvey`, click Run, and review Google's authorization request for Forms and Sheets access.
4. Open the EDIT AND PREVIEW link in the execution log.
5. In Customize theme, choose a dark teal accent, pale background and a plain readable font. Keep the header image empty for a compact layout.
6. Preview on mobile, confirm responder access settings, then Publish and copy the responder link.

The script creates a draft form and links a response spreadsheet. It disables email collection, the one-response limit and public response summaries. Account or organization policies may still affect responder access; check before sharing.

The script saves the created form ID to prevent duplicates on rerun. If execution is interrupted, rerunning returns the existing form rather than rebuilding it; inspect the existing draft before making further changes.

Google Forms theme colors and fonts must be selected in the editor; this script does not apply them. Google-hosted execution and visual preview have not been verified in this session because browser control was unavailable.

API reference: https://developers.google.com/apps-script/reference/forms/form
