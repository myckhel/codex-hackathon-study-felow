# StudyFellow — Project Brief

## Overview

**StudyFellow is an AI teaching fellow that helps learners make steady progress through their studies.** A learner can start a one-off lesson whenever they need help, or schedule regular sessions around their courses. In either case, they can bring a topic, question, assignment, or learning resource.

The fellow teaches progressively: it clarifies the learner's goal, explains concepts in manageable steps, uses practical examples, invites practice, responds to the learner's reasoning, and adapts when something is unclear. It recaps key ideas, saves progress, and helps the learner continue later. Scheduled sessions may include reminders and a short check-in; missed sessions should be easy to reschedule or catch up on.

## Product owner framing checklist (13 October 2026)

This framing separates the current hackathon hypothesis from validated findings and from the longer-term product direction.

### 1. Problem identification — defined for the prototype; validation pending

**Focused problem:** Secondary-school biology students may struggle to explain how plants use light energy, water, and carbon dioxide to produce glucose during photosynthesis.

This is the owner's selected prototype problem, documented in `outputs/photosynthesis-demo-spec.md`. It is a specific, demonstrable learning challenge, but no secondary-school learner observation has yet established how common or consequential it is.

### 2. Customer pain point — signals identified; not validated for the chosen segment

The pain to investigate is that learners can have access to study content yet still lack clear explanations, practical guided practice, trustworthy answers, and timely help when they get stuck or miss class.

The available survey summary describes **7 technical and vocational learners in Nigeria**, not the selected secondary-school biology audience: 6/7 prioritized practical examples and guided practice; 6/7 cited incorrect explanations as a blocker; 4/7 cited poor alignment with their course material; and 5/7 reported competing time obligations. A study-group contact also indicated that catching up after class absence matters to their virtual-assistant group. These are directional signals from other learner contexts. They motivate investigation but do not validate the photosynthesis pain point. See the survey limitations above and the study-group records in `outputs/`.

**Validation gap:** Ask secondary-school biology learners or a relevant teacher about a recent photosynthesis learning difficulty, what they tried, and what remained unclear. Observe whether the lesson's adaptive explanation helps them answer a fresh question.

### 3. Business opportunity — product opportunity articulated; commercial case unknown

There is an opportunity to make credible learning support more useful between classes by connecting a concise explanation to learner practice, responsive feedback, and a manageable next step. StudyFellow's potential value is in helping learners work through a concept and continue their learning, rather than only surfacing or summarizing content.

For this hackathon, assess this as a **product and learner-value opportunity**. No market size, willingness-to-pay evidence, institutional buyer, pricing, or sustainable business model has been established. Schools and teachers are possible reviewers or distribution partners, not confirmed customers.

### 4. Market hypothesis — narrow beachhead proposed; geography and channel unconfirmed

**Prototype hypothesis:** Secondary-school biology learners studying photosynthesis will find a short, source-linked, text-first lesson more useful when it responds to their explanation and checks transfer to a new situation.

The initial user is the learner. A biology teacher or subject-knowledgeable reviewer may help validate lesson accuracy; a teacher, school, or learner community may provide a route to reach participants. The first country, curriculum, acquisition route, and any buyer remain undecided. The previous Nigeria survey sample is not evidence that this selected segment or market is reachable there.

**Evidence needed:** Reach a small number of learners in one named curriculum/geography; observe completion and the fresh-transfer answer; ask whether they would use the lesson again and where they would expect to find it. Keep this small-sample evidence directional.

### 5. Initial product vision — stated; broad product remains aspirational

**Vision:** StudyFellow helps learners make steady progress by turning a topic or course resource into a concise, source-grounded lesson that adapts to their reasoning, checks what they can apply, and gives them a clear next step.

**Hackathon expression:** Demonstrate that vision with the owner-selected photosynthesis lesson: explain one process, respond to a learner's reasoning, and check understanding with a fresh light-limitation scenario. Scheduled study plans, reminders, broad resource ingestion, and cross-region personalization remain outside this first vertical slice unless the core interaction is complete.

## Problem

Access to course materials does not ensure that learners can understand and use them. Students may get stuck without timely feedback, struggle to organize independent study, or lose momentum after missing a session. A generic summary does not necessarily help them practise, resolve a misconception, or know what to do next.

This is the project's working problem hypothesis. Learner research should determine which of these difficulties is most pressing for the initial audience.

### Early discovery signal (8 October 2026)

The project owner summarized 7 survey responses from learners across technical and vocational fields in Nigeria. Six respondents prioritized practical examples and guided practice; six preferred a mix of scheduled and on-demand help; six identified incorrect explanations as a major blocker, and four mentioned poor fit with their course materials. Time obligations, maintaining a routine, and connectivity/device constraints also appeared in the summary. These are directional signals from a small sample, not representative findings; the raw response sheet has not been independently reviewed.

For the first prototype, prioritize a short guided practice loop, feedback that responds to the learner's reasoning, and a source-linked lesson that can be resumed. Keep both one-off and returning entry points in view, while deferring calendar automation. This is a scope recommendation based on the early summary, not proof that the prototype will improve retention.

## Intended audience

**Hackathon prototype audience:** Secondary-school biology learners studying photosynthesis, selected by the owner as a bounded test segment. Their reachability and the prevalence of this difficulty have not yet been validated.

**Longer-term audience:** Learners who need help understanding and persisting with course concepts. The specific age band, geography, curriculum, and route to reach them remain open discovery questions. Avoid assuming that one learner profile, curriculum, language, or access condition represents all African learners.

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
