# StudyFellow Hackathon Roadmap

**Submission window:** Monday 12 October–Friday 16 October 2026 (official dates; exact cutoff time/timezone to confirm). Use 8–11 October for scope decisions and the core build; harden and prepare the submission during the window, aiming to submit early.  
**Judging rubric (owner-provided, 12 Oct 2026):** 25% Uniqueness (novelty of approach); 25% Scalability (ability to scale across geographies); 25% Codex Usage (how well Codex was used to build the project); 25% Presentation (quality of the submission presentation). No detailed sub-rubric or scoring guidance has been supplied.  
**Primary track:** Engagement & Staying in the Learning Journey.  
**Supporting fit:** Access & Discovery, through making a learner-provided resource easier to use; keep Guidance & Opportunity as a future direction unless the core demo naturally supports a credible next step.  
**North-star demo:** A learner gets stuck on a specific concept, StudyFellow responds to their reasoning, the learner demonstrates application, and they see a clear next step. The reusable product is intended for professional and secondary-school, college, and university learners; the hackathon demonstrates it with one photosynthesis lesson. Browser-local resume is implemented and verified for this deterministic demo; no account or cross-device sync exists.

## Early learner signal (owner-provided summary, 8 Oct 2026)

The owner shared a descriptive analysis of **7 respondents** studying across technical and vocational fields in Nigeria. The raw response spreadsheet has not been independently inspected. This small, possibly convenience-based sample is directional and does not establish what all learners need.

- **6/7** selected practical examples and guided practice as most useful; **3/7** selected explanations using their course materials and **3/7** voice/visual explanations.
- **6/7** preferred a mix of scheduled routine and on-demand help; **1/7** preferred one-off help only.
- **6/7** identified incorrect explanations as a major blocker; **4/7** also cited poor alignment with course material.
- Time obligations and infrastructure/access constraints appeared often; fatigue/overwhelm also interrupted planned sessions.
- Respondents emphasized simpler explanations, retention, and review exercises.

**Roadmap consequence:** Make learner practice, responsive correction, and a fresh check central to the demo. Keep source traceability visible. Demonstrate flexible “Learn now” and “Continue” entry points if inexpensive, but do not spend the sprint on calendar integrations. Keep lessons short, save a recap/next step, and make the core path text-first. Do not claim that reminders alone solve engagement or that this sample proves demand broadly.

## Product direction

**StudyFellow is an AI teaching fellow that turns a learner's course material or topic into a guided, interactive lesson, checks understanding, adapts when the learner is confused, and helps them continue where they left off.**

The brief calls for a useful, viable working proof of concept, not a production launch. It explicitly asks that the project respond to a real learning-access challenge and do more than deliver content. Preserve the user's original idea; use AI development tools to build and refine it, not to replace the user's idea-generation process. See `PROJECT_BRIEF.md` for the current product definition.

Support two ways in: **Learn now** for a one-off topic/question/resource, and **Continue learning** for a scheduled or returning learner. Both use the same teaching loop. The hackathon proof should center on one complete learning journey, not the full semester-management vision.

### MVP boundary

**Must demonstrate**

- One configured demo persona, subject, and credible sample resource, while documenting the intended broader learner audience and reusable topic-learning flow.
- Start from a resource (PDF or provided sample) or a topic; set a goal and available time.
- Short diagnostic or recall check, with a skip option.
- A structured teaching loop: explain one idea → ask the learner → respond to their reasoning → adapt an explanation/example → guided practice.
- A final check using a fresh application question and a clear next step.
- Saved session state and a believable resume/return experience.
- Source references for resource-grounded claims and clear handling of uncertainty.
- A visible continuity cue: what the learner understood, where they got stuck, and a manageable next action.
- A practical inclusion choice in the demo (for example, plain-language mode, readable mobile layout, or text-first interaction); never require a learner to pass a diagnostic to proceed.
- A practical example and guided learner attempt, followed by feedback that addresses the learner's reasoning and a fresh application question.

**Operating constraints to account for in the proof of concept**

- **Quality and credibility:** Use a credible, reviewed sample; keep answers tied to source passages; mark unsupported extensions clearly and avoid fabricated certainty.
- **Low bandwidth/basic devices:** Make the main interaction text-first and mobile-friendly. Avoid making generated video or continuous voice essential. Have a preloaded lesson path if upload or network access fails.
- **Accessibility and inclusion:** Use plain language, readable contrast/type, clear controls, and a way to skip personalization questions. State which accessibility checks are and are not covered.
- **Privacy and security:** Use fictional/demo learner data, collect only what the prototype needs, and do not upload real student records or sensitive assignments without an approved handling plan.
- **Multilingual access:** Do not claim multilingual support unless a language and its output have been reviewed by a competent speaker. English-only is an explicit prototype limitation if that is what is implemented.
- **Local relevance:** Choose the learner, subject, resource, and examples with a real local learning context in mind; avoid assuming a single African curriculum or learner profile.

**Only if the core loop is solid**

- Lightweight responsive diagram/whiteboard, voice, reminder, or a scheduled-session touchpoint. Choose at most one enhancement based on available stack/time and judging value.

**Defer for this sprint**

- Generated video, broad multimodal ingestion, full student timetable/calendar integrations, multi-course analytics, production-grade personalization, payments, social features, and enterprise-scale compliance/infrastructure.

## Trackable stages

Mark each item `[x]` when its acceptance evidence exists; use `[~]` for in progress and `[!]` for blocked. Keep the status and next action current during each work session.

### Stage 1 — Align on the challenge and learner (Thu 8–Fri 9 Oct)

- [x] Capture the official challenge brief and preserve its instruction not to use AI to generate the capstone idea.
- [~] Capture submission and judging details: window is 12–16 Oct 2026; four equal-weight rubric categories are recorded above; required deliverable is a demonstrable idea presented well; owner confirms no additional AI rules. Still confirm the Friday cutoff time/timezone.
- [x] Select a bounded demo persona and concept: secondary-school biology, photosynthesis. This is one configured test case for the broader product intended for professional, secondary-school, college, and university learners; reachability and need are not yet validated.
- [x] Review the owner's N=7 survey analysis; record recurring signals without presenting the small sample as representative. Raw response rows remain unverified.
- [x] Write the problem, promise, and demo success measure in `outputs/photosynthesis-demo-spec.md` (owner-supplied framing).
- [x] Define the learning signal: 2/2 on a fresh transfer question, with prediction and light-energy reasoning scored separately.
- [x] Choose visible constraint responses: text-first phone-friendly flow, skip-able diagnostic, source attribution, and no identifying data; limitations are recorded in the spec.

**Gate:** The team can name the target learner, the specific stuck moment, why existing study methods fail, what the demo will prove, and which inclusion/access constraints it addresses.

**Rubric implications for the build and submission:** Make the distinctive response-adaptive teaching loop visible (Uniqueness); describe a credible path to curriculum, language, and regional adaptation without claiming broad deployment from one lesson (Scalability); keep a concise account of how Codex supported implementation and iteration, with the owner retaining product decisions (Codex Usage); and rehearse a short story that demonstrates the working lesson and evidence (Presentation). Protect the one-week vertical slice; do not expand scope to simulate geographic scale.

### Stage 2 — Lock the demo journey and evidence (Fri 9–Sat 10 Oct)

- [x] Storyboard a 3–5 minute judge-facing lesson journey with misconception branches and a fresh transfer check in `outputs/photosynthesis-demo-spec.md`. Local interruption/resume is now implemented and tested; see Stage 3.
- [x] Choose OpenStax Biology 2e photosynthesis material and prepare the explanation, prompt, and fresh final question in the spec; subject-matter review remains outstanding.
- [x] Define minimum interaction acceptance criteria and scoring rubric in the spec.
- [x] Set the differentiating proof for this slice: response-specific explanation followed by a novel application check.
- [ ] Assign ownership/time budget if a team is involved; reserve time for integration and demo preparation.

**Gate:** The demo story is testable end to end, credibly traceable, relevant to the chosen learners, and explainable without claiming unproven long-term learning outcomes.

### Stage 3 — Build the vertical slice (Sat 10–Mon 12 Oct)

- [x] Inspect the current workspace and identify the shortest path: scaffold a focused React/Vite app in `system/study-fellow-ui/`; the workspace previously contained planning artifacts and survey scripts only.
- [x] Implement the start flow: topic/resource drafts with explicit sample handoff, optional custom goal, three/five-minute choice, and skip-able diagnostic. Unsupported input does not generate lesson content.
- [x] Implement the local lesson loop: response-specific deterministic feedback, clarification for uncertain wording, optional practice, two-point fresh transfer scoring, one different retry, and recap. First and retry results and seeded-answer provenance remain separate; no live model is connected.
- [x] Add source summaries, section locators, and OpenStax links; label factual teaching separately from authored examples/feedback. Biology subject review remains outstanding.
- [x] Persist one versioned browser-local session, including setup, drafts, immutable submitted attempts, results, stage, and next action. Reload, failed storage, corrupt snapshots, confirmed reset, and Back navigation are tested; no account or cross-device sync.
- [x] Bundle the preloaded lesson and local rules as the working path. Final production desktop/mobile checks verify cached offline reload, saved-draft resume, and completion after service-worker activation. First visits and external source pages require network access.

**Gate:** One learner can complete the main journey without a presenter manually repairing the flow.

### Stage 4 — Validate and harden the teaching moment (Tue 13 Oct)

- [ ] Have a subject-knowledgeable reviewer inspect the lesson, misconception response, and questions.
- [ ] Observe a small number of target learners using the flow; record where they hesitate, what helps, and whether the final answer shows understanding.
- [ ] Fix the highest-impact correctness, usability, and continuity issues first.
- [x] Check empty answers, unknown/contradictory responses, failed lazy imports, storage failure/corruption, long goals/filenames, and reload/resume recovery through Playwright; sources and full answers remain available through disclosures.
- [x] Check desktop/mobile and 320px layouts, stage focus, keyboard actions, reduced motion, and cached production offline behavior. Inline SVG icons and energy-flow illustrations use existing tokens without new dependencies; comprehensive accessibility and low-end-device audits remain future work.

**Gate:** The central teaching interaction is understandable, credible, and repeatable; limitations are stated honestly.

### Stage 5 — Integrate and make the demo resilient (Wed 14–Thu 15 Oct)

- [ ] Freeze new feature work unless it directly fixes the core journey.
- [ ] Run the complete demo path from a clean start and after a simulated interruption.
- [ ] Verify the sample resource, source references, and demo account/data are ready.
- [ ] Prepare a deterministic fallback (seeded lesson or recorded screenshots/video) that preserves the same story if live services fail.
- [ ] Fix only blockers and high-visibility defects; note known limitations.

**Gate:** The demo can be delivered reliably on the intended device/network, with fallback materials ready.

### Stage 6 — Tell the story and submit (submission window: Mon 12–Fri 16 Oct)

- [ ] Prepare a concise pitch: learner problem → insight → product → live proof → evidence → next step.
- [ ] Make the connection to the selected engagement track explicit and map claims to evidence.
- [ ] Finish required submission materials, project description, setup instructions, and credits/attributions.
- [ ] Rehearse to the time limit; assign speaking/demo roles if applicable.
- [ ] Submit as early as the portal permits, and before the confirmed Friday cutoff; capture the final build/version and submission confirmation.
- [ ] Record judge/user feedback and the three most important post-hackathon follow-ups.

**Gate:** Submission is complete within the official window and the demo's value and evidence are clear within the allocated time.

## Progress snapshot (updated 13 Oct 2026)

- **Current stage:** Stage 4 — validate the completed deterministic frontend vertical slice; biology review and target-learner observation remain outstanding.
- **Completed:** Official brief and judging rubric recorded; broad intended learner audience (professionals plus secondary-school, college, and university learners) separated from the owner-selected secondary-school biology/photosynthesis demo; learners distinguished from potential institutional adopters/payers; product-owner framing and evidence limits documented in `PROJECT_BRIEF.md`; UX blueprint and demo spec updated; Stage 2 lesson journey, source, learning rubric, and implementation criteria captured; Bun/Vite React TypeScript app created in `system/study-fellow-ui/` with requested stack.
- **Implementation evidence (13 Oct):** Lint/build passed; 24 desktop/mobile development checks passed with two production-only checks skipped; six additional assessment/storage checks and two final production offline checks passed. Independent reviewer verdict is recorded in project memory. The flow includes setup, optional diagnostic, response-specific local feedback, transfer/retry, recap, and browser-local resume.
- **Blocked by / unknown:** Exact submission cutoff/timezone and detailed rubric guidance; raw survey rows; team capacity. Need/reachability for the photosynthesis demo, Nigerian curriculum, acquisition channels, first learner/adopter segment, and willingness to pay remain unvalidated. Final build measures main JS at 624.36 kB and total app JS at 797.04 kB; PWA precache is 797.84 KiB. The main-chunk warning remains, although total app JS is lower than the 941.21 kB baseline.
- **Next action:** Have the lesson science reviewed, observe a small number of learners, fix resulting blockers, and rehearse the clean-start/interruption demo. Avoid new scope before submission.

## Working rules

- Reprioritize at each stage gate based on the brief, learner evidence, and working software.
- Protect a coherent vertical slice; cut enhancements before compromising the core teaching loop.
- Separate confirmed facts from hypotheses. A few user sessions provide directional evidence, not proof of broad impact or long-term retention.
- Update this roadmap after each meaningful work session: checkbox state, evidence, decision changes, blockers, and next action.
