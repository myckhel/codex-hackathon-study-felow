# StudyFellow — Project Brief

## Overview

**StudyFellow is an AI teaching fellow that helps learners make steady progress through their studies.** A learner can start a one-off lesson whenever they need help, or schedule regular sessions around their courses. In either case, they can bring a topic, question, assignment, or learning resource.

The fellow teaches progressively: it clarifies the learner's goal, explains concepts in manageable steps, uses practical examples, invites practice, responds to the learner's reasoning, and adapts when something is unclear. It recaps key ideas, saves progress, and helps the learner continue later. Scheduled sessions may include reminders and a short check-in; missed sessions should be easy to reschedule or catch up on.

## Problem

Access to course materials does not ensure that learners can understand and use them. Students may get stuck without timely feedback, struggle to organize independent study, or lose momentum after missing a session. A generic summary does not necessarily help them practise, resolve a misconception, or know what to do next.

This is the project's working problem hypothesis. Learner research should determine which of these difficulties is most pressing for the initial audience.

### Early discovery signal (8 October 2026)

The project owner summarized 7 survey responses from learners across technical and vocational fields in Nigeria. Six respondents prioritized practical examples and guided practice; six preferred a mix of scheduled and on-demand help; six identified incorrect explanations as a major blocker, and four mentioned poor fit with their course materials. Time obligations, maintaining a routine, and connectivity/device constraints also appeared in the summary. These are directional signals from a small sample, not representative findings; the raw response sheet has not been independently reviewed.

For the first prototype, prioritize a short guided practice loop, feedback that responds to the learner's reasoning, and a source-linked lesson that can be resumed. Keep both one-off and returning entry points in view, while deferring calendar automation. This is a scope recommendation based on the early summary, not proof that the prototype will improve retention.

## Intended audience

Initial audience: a reachable group of college or university learners, to be selected through discovery research. The first prototype should focus on one learner segment, one subject, and one credible course resource. Avoid assuming that one learner profile, curriculum, language, or access condition represents all African learners.

## Product experience

1. The learner chooses **Learn now** for a one-off session or **Continue learning** for a scheduled or returning session.
2. They provide a topic, question, assignment, or learning resource and choose what they want to achieve and how much time they have.
3. The fellow checks prior knowledge when useful, with an option to skip.
4. It teaches one idea at a time using explanation, practical examples, questions, and guided practice.
5. It responds to misunderstandings with a different explanation or example, then checks learning with a fresh application question.
6. It closes with a concise recap, what the learner demonstrated or should revisit, and a manageable next step.
7. It saves enough context for the learner to resume later without repeating their story. Scheduled sessions can use optional reminders; after a missed session, learners can reschedule or choose a short catch-up.

One-off and scheduled sessions share the same teaching loop. A learner should be able to try an isolated lesson before making any ongoing commitment.

## Hackathon fit

**Primary track: Engagement & Staying in the Learning Journey.** StudyFellow aims to reduce the friction of starting, help learners get unstuck through interactive practice, and make it easier to return after an interruption. **Supporting track: Access & Discovery of Learning Resources**, by helping learners work with materials they already have.

## Proof of concept

Demonstrate one complete lesson in one subject: start from a topic or sample resource, encounter a deliberate misconception, receive an adapted explanation, complete practice, and see a useful saved recap that supports resumption. The demo should make the learning interaction clear without requiring a full academic timetable or production-ready platform.

### In scope for the first proof

- One-off **Learn now** session and a returning/scheduled session entry point.
- One credible, reviewed sample resource or topic.
- A short diagnostic or recall check that can be skipped.
- Progressive explanation, practical example, learner attempt, adaptive feedback, and a fresh check for understanding.
- Visible source references for resource-grounded claims.
- Saved progress and a clear next action.
- A lightweight, mobile-friendly, text-first experience, with a visual only where it helps explain the concept.

### Defer unless the core teaching journey is already reliable

Full semester timetable integrations, broad resource ingestion, generated video, always-on voice, multi-course analytics, extensive career guidance, payments, and production-scale personalization.

## Design constraints

- **Credibility:** Ground teaching in reviewed material where available, point to relevant source passages, and make uncertainty clear.
- **Low bandwidth and basic devices:** Keep the central interaction text-first, lightweight, and usable on a phone. Save recaps for later access. Do not imply offline AI teaching unless implemented.
- **Accessibility and inclusion:** Use readable text and contrast, clear controls, plain-language explanations, and an option to skip profiling questions. Add transcripts/captions if audio is included.
- **Personalization without exclusion:** Let learners change the pace, request a different explanation, revisit ideas, or override a suggested level.
- **Privacy:** Collect minimal data, use fictional data in demos, and avoid sensitive student records or assignments.
- **Multilingual access:** Support languages based on learner need and competent review; do not claim untested language quality.
- **Local relevance:** Validate the chosen curriculum, examples, and terminology with actual learners or a subject reviewer.

## Research and success signals

Start with short interviews and the StudyFellow learning survey. Ask about recent learning episodes and existing workarounds before presenting the concept to reduce leading responses. Include learners with different levels of AI use and connectivity.

For an initial prototype pilot, observe whether learners can complete a session, solve a new application question afterward, and return to a useful next step. Track where they hesitate, whether reminders help or annoy, and reasons for missed sessions. A small hackathon sample provides directional feedback, not evidence of long-term retention or reduced dropout.

## Naming

**StudyFellow** is the chosen project name going forward. The former working name, comeTeachMe, is retained only in historical context and prior discussion artifacts.
