# Hackathon Project Memory

## Working role for this conversation

Act as the user's **Hackathon Product & Engineering Partner**: help turn the team's ideas and actions into a focused, demonstrable, reliable submission. Be a practical sounding board, product strategist, technical guide, builder, reviewer, and documentation aide as needed. Take initiative on useful repository work and explain important tradeoffs plainly.

## Timebox

- Start: Tuesday, 6 October 2026 (user's stated date).
- Official submission window: Monday, 12 October through Friday, 16 October 2026. Exact Friday cutoff time/timezone is still unknown.
- Use 8–11 October for remaining scope decisions and the core build, then harden and prepare submission materials during the official window. Aim to submit before the final day where possible.
- Optimize for visible user value and a working end-to-end demo. Adapt enterprise lifecycle practices to this short timebox; defer production-scale controls unless they materially improve the demo or are required by the brief.

## Project facts

- Repository/workspace: this directory.
- Product: **StudyFellow** (formerly comeTeachMe), an AI teaching fellow that teaches from learner-provided resources or a topic, progressively and interactively, adapting explanations and using modalities when useful.
- A prior project thread recommends **Engagement & Staying in the Learning Journey** as the primary challenge track. Its focused proof is adaptive teaching plus meaningful resumption. Verify against the official brief and rubric.
- The official brief is now captured in the conversation: Track 2 is a confirmed primary fit; Track 1 can be a supporting fit via resource usability. The brief asks for a useful, viable working proof of concept, says not to use AI to generate the capstone idea, and calls out credibility, low bandwidth/basic devices, accessibility/inclusion, personalization without exclusion, privacy, multilingual access, and local relevance.
- Owner-provided judging rubric (12 Oct 2026): 25% Uniqueness (novelty of approach), 25% Scalability (across geographies), 25% Codex Usage (how well Codex was used to build), and 25% Presentation (submission presentation quality). Required deliverable is something that can demonstrate the idea through a good presentation. The owner reports no additional AI rules. Exact Friday cutoff/timezone remains unknown.
- Entry points: one-off “Learn now” sessions and scheduled/returning “Continue learning” sessions. The sprint should prove one learning journey, not implement the entire timetable/product vision.
- Survey links supplied by the owner are documented in `outputs/survey-setup.md`: a public respondent form and a response spreadsheet for personal/project-owner use. Recruitment drafts are in `outputs/survey-posts.md`. On 8 October, the owner shared a descriptive summary of 7 responses; the raw response sheet has not been independently inspected. Treat the results as directional, not representative.
- Reusable message for asking study-group contacts to review/share a tailored survey invitation: `outputs/study-group-outreach-template.md`.
- Reusable workflow for each contact reply: `outputs/study-group-outreach-workflow.md`; current group-specific Apps Script template: `outputs/study-group-survey.gs`.
- Proposed learner discovery approach (not yet validated): recruit through relevant public learner groups, use a brief poll/form to identify a hard concept, then use a short exercise to check understanding. Keep the respondent pool described as a convenience sample and follow each group's posting rules.
- On 9 October 2026, the owner selected a prototype scenario: secondary-school biology students learning photosynthesis. Owner-provided framing and a 3–5 minute, source-backed lesson/transfer-check specification are in `outputs/photosynthesis-demo-spec.md`. Treat this as the owner's capstone idea and a bounded prototype choice, not AI-generated ideation or a need validated by the earlier N=7 technical/vocational survey.
- The spec uses OpenStax Biology 2e, explains the school-level simplified equation while noting G3P is the Calvin cycle's direct product, and defines a 2-point transfer rubric. Text-first, skip-able, and minimal-data choices address selected constraints. Biology review and learner observation remain outstanding.
- As of 9 October, this workspace appears to contain planning artifacts and survey scripts but no learner-facing application implementation. The next build action requires locating/opening the app codebase; do not report the demo as implemented.
- User supplied an enterprise software lifecycle overview. Treat it as a menu of concerns, not a mandatory sequence: discover and scope, design, architect, build, verify, demo, then capture learnings. Prioritize for this one-week hackathon.

## How to keep this memory current

At the start of substantive project work, read this file plus the relevant code and project docs. When new durable information emerges, update this file in the same work session: project goal and users, hackathon criteria/deadline, chosen MVP and exclusions, stack/architecture decisions, current status, blockers, and next highest-value actions. Record dated decisions briefly, remove stale assumptions, and distinguish confirmed facts from guesses. Do not put secrets or transient chat detail here. Keep the user informed of material changes.

## Current status

- Stage: Stage 2 specification is ready; Stage 3 build has not started in this workspace. See `PROJECT_ROADMAP.md`.
- Confirmed: project submission opens Monday 12 October and ends Friday 16 October 2026; project name is StudyFellow; primary track is Engagement & Staying, with Access & Discovery as a supporting fit; N=7 owner-provided survey summary and 12 Oct equal-weight judging rubric are available.
- Unknown: final cutoff time/timezone and detailed rubric guidance; raw survey response sheet; implementation stack/current app state; team capacity; demo environment. The chosen photosynthesis learner segment has not been validated with target learners.
- Next: locate/open the application codebase and implement the owner-selected photosynthesis teaching slice. Apply the rubric by making adaptive teaching easy to see, describing geographic scalability as a future adaptation path, documenting Codex's role honestly, and rehearsing the submission presentation. Biology review and target-learner feedback remain desirable if time allows.

## Decision log

- 2026-10-09: First study-group lead (`SG-20261009-virtual-assistant-lms200`) is TS Academy VA, for virtual-assistant learners at secondary/university levels (200+ members). Contact Tobi (WhatsApp; exact handle/number not supplied) says survey invitations are allowed and requested forwardable text. The reported need is catching up after class absence; exact LMS platform/context remains unclear. No hard concept has been named, so the tailored survey discovers a difficult topic and what confuses learners; create a concept-specific practice and transfer question only after reviewing responses. With the owner's Apps Script authorization, a unique form and owner response sheet were created; the owner then confirmed publishing to anyone with the link. Respondent link: https://docs.google.com/forms/d/e/1FAIpQLSdJqa8aJSWFP6I7-kijFKyqR9I-pr4BmvIjw_tNKocUDYP1vQ/viewform. The form is live. Tailored invitation is saved in tracker row 2 and awaits Tobi's review; it has not been sent or posted.

- 2026-10-09: Added second lead (`SG-20261009-edtech-150`) to tracker row 3: contact Ogudu, Educational Technology, university learners, WhatsApp group of about 150, difficult topic Instructional Design. Contact says survey invitations are not allowed and gave no willingness to review/share. The group name/country are unknown. Do not create, publish, or distribute a survey for this group unless the rules or permission change. The provided WhatsApp number was not copied into project files or tracker.

- Reusable outreach workflow: `outputs/study-group-outreach-workflow.md`. Apps Script source: `outputs/study-group-survey.gs`. Private Google tracker: https://docs.google.com/spreadsheets/d/1Bh-7Xe5SdQJom5SMJ64hwv9-OMUzpO1v2QFZuc6NnMU/edit?gid=0#gid=0. The contact record, live form URL, and invitation are in row 2; the permission-restricted lead is recorded on hold in row 3.

- 2026-10-06: Set this conversation's working role to Hackathon Product & Engineering Partner. Use the supplied enterprise lifecycle as adaptable guidance, narrowed to a one-week build.
- 2026-10-06: Imported the prior comeTeachMe direction: adaptive resource/topic-based teaching, one-off and scheduled entry points, strongest fit hypothesized as Engagement & Staying; prioritize an adaptive lesson and resumption proof over broad feature coverage.
- 2026-10-06: Captured the official challenge brief in the roadmap; confirmed Engagement & Staying as the primary track, included operating constraints, and recorded the instruction that AI must not generate the capstone idea.
- 2026-10-06: User chose **StudyFellow** as the project name going forward. The product supports one-off Learn now lessons as well as scheduled/returning sessions, with a shared teaching loop and saved progress. Added `PROJECT_BRIEF.md` and updated project and survey references.
- 2026-10-06: Owner supplied the public survey URL and personal response-sheet URL. Recorded both in the survey guide, kept the response-sheet link out of public invitation drafts, and prepared LinkedIn, X, WhatsApp, and Facebook copy. Posts have not been published and survey results have not been analyzed.
- 2026-10-08: Owner shared an analysis of 7 survey responses. Main signals: practical examples/guided practice (6/7), hybrid scheduled plus on-demand use (6/7), concern about incorrect explanations (6/7), and major time/routine and infrastructure friction. Record this as a directional summary; raw rows have not been reviewed.
- 2026-10-08: Owner confirmed the official submission window is Monday 12 October to Friday 16 October 2026. Replaced the earlier assumed 13 October target; exact cutoff time/timezone remains to confirm.
- 2026-10-08: Owner proposed recruiting through public study groups to identify a difficult concept and collect feedback efficiently. Treat this as a discovery method to test, not a chosen segment/concept or representative research; pair self-reported difficulty with a short application/transfer check where feasible.
- 2026-10-09: Owner supplied the Stage 1 problem, promise, and demo measure for secondary-school biology/photosynthesis. Created a source-backed lesson specification and updated Stage 1/2 evidence in the roadmap. Kept validation gaps and app-codebase absence explicit.
- 2026-10-12: Owner supplied the judging rubric (equal 25% weights for Uniqueness, Scalability across geographies, Codex Usage, and Presentation), confirmed the deliverable is something that demonstrates the idea through a good presentation, and confirmed there are no additional AI rules. Recorded these in the roadmap and memory. Stage 1 item 2 remains partial only because the exact Friday cutoff/timezone is unknown.
