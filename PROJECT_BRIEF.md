# StudyFellow — Project Brief

## Overview

**StudyFellow is an AI teaching fellow that helps learners make steady progress through their studies.** A learner can start with a topic, question, assignment, or learning resource and describe what is confusing. StudyFellow diagnoses a likely gap, infers a useful learning outcome, plans a short route, and teaches through responsive steps. One-off help is the first priority; recurring study plans are a later session mode.

The fellow teaches progressively through explanations, practical examples, questions, guided practice, and useful visuals such as diagrams. The learner can ask a clarifying question at any point and stay on the current step until ready. StudyFellow responds to the learner's reasoning, adapts the route when needed, and ends with a recap and next action. It should infer the teaching goal rather than require the learner to design one, while allowing the learner to correct the tutor's interpretation. Prepared, replayable scenario conversations can demonstrate the dynamic experience before live generation is available.

## Product owner framing checklist (13 October 2026)

This framing separates the current hackathon hypothesis from validated findings and from the longer-term product direction.

### 1. Problem identification — defined for the prototype; validation pending

**Product-level problem:** Learners across professional, secondary-school, college, and university settings may struggle to understand or apply a specific concept in their studies. StudyFellow is intended to help a learner work through that concept with guided, responsive teaching.

**Bounded demo problem:** The current hackathon lesson tests this product hypothesis with secondary-school biology and photosynthesis: some learners may struggle to explain how plants use light energy, water, and carbon dioxide to produce glucose. This is a demo scenario, not the full product audience.

This is the owner's selected prototype problem, documented in `outputs/photosynthesis-demo-spec.md`. It is a specific, demonstrable learning challenge, but no secondary-school learner observation has yet established how common or consequential it is.

### 2. Customer pain point — signals identified; not validated for the chosen segment

The pain to investigate is that learners can have access to study content yet still lack clear explanations, practical guided practice, trustworthy answers, and timely help when they get stuck or miss class.

The available survey summary describes **7 technical and vocational learners in Nigeria**, not the selected secondary-school biology audience: 6/7 prioritized practical examples and guided practice; 6/7 cited incorrect explanations as a blocker; 4/7 cited poor alignment with their course material; and 5/7 reported competing time obligations. A study-group contact also indicated that catching up after class absence matters to their virtual-assistant group. These are directional signals from other learner contexts. They motivate investigation but do not validate the photosynthesis pain point. See the survey limitations above and the study-group records in `outputs/`.

**Validation gap:** Ask secondary-school biology learners or a relevant teacher about a recent photosynthesis learning difficulty, what they tried, and what remained unclear. Observe whether the lesson's adaptive explanation helps them answer a fresh question.

### 3. Business opportunity — product opportunity articulated; commercial case unknown

There is an opportunity to make credible learning support more useful between classes by connecting a concise explanation to learner practice, responsive feedback, and a manageable next step. The owner's market direction is **Africa, starting with Nigeria**. StudyFellow's potential value is in helping learners work through a concept and continue their learning, rather than only surfacing or summarizing content.

For this hackathon, assess this as a **product and learner-value opportunity**. Professional learners, schools, and academies are owner-identified potential adopters; professional learners may also pay individually, while schools or academies may pay institutionally. These are customer hypotheses, not confirmed buyers. No market size, willingness-to-pay evidence, pricing, or sustainable business model has been established.

### 4. Market hypothesis — narrow beachhead proposed; geography and channel unconfirmed

**Product hypothesis:** Learners in different education and professional contexts will find a short, source-linked lesson more useful when it responds to their explanation and checks application to a new situation.

**Hackathon test case:** The team will demonstrate this reusable learning loop with a secondary-school biology photosynthesis lesson. The demo tests the interaction pattern; it does not validate demand across the broader audience.

**Geography:** Africa, starting with Nigeria (owner direction). The specific state, language, and curriculum for the prototype audience still need to be selected.

**Potential adopters and payers:** Professional learners (individual adoption/payment), schools, and academies (institutional adoption/payment). Which segment to serve first and who controls purchase remain undecided.

**Reach assumption:** Marketing is the current proposed way to reach learners and prospective institutional adopters. Specific channels, partners, cost, conversion, and retention are untested. A biology teacher or subject-knowledgeable reviewer may also help verify the lesson, but this is not itself a validated acquisition channel.

The prior Nigeria survey sample was technical/vocational and does not establish demand or reachability among secondary-school biology students, professional learners broadly, or institutional buyers.

**Evidence needed:** Select one Nigerian curriculum and reach a small number of relevant learners; observe lesson completion and the fresh-transfer answer; ask whether they would use it again and which marketing channels they notice or trust. Separately interview professional learners and school/academy decision-makers to test the first segment, adoption path, and willingness to pay. Keep small-sample evidence directional.

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

**Intended learner audience:** Professionals and secondary-school, college, and university learners who struggle with a specific concept or topic. Their needs, contexts, and preferred teaching approaches will differ; the product should let a learner start from their own topic or learning material.

**Hackathon demo learner:** A secondary-school biology learner studying photosynthesis. This is one configured scenario for proving the learning loop, not a decision to focus the product only on biology or school learners. Its reachability and the prevalence of this specific difficulty have not yet been validated.

**Market direction and roles:** Africa, starting with Nigeria. Learners are the users. Professional learners may adopt/pay individually; schools, academies, colleges, and universities are potential institutional adopters or payers. These are hypotheses, and the first segment, buying path, curriculum, language, and route to reach each remain open. Avoid assuming that one learner profile, curriculum, language, or access condition represents all African learners.

## Product experience

1. The learner brings a topic, question, assignment, or learning resource and describes what feels confusing.
2. StudyFellow diagnoses the likely gap, asks one focused follow-up if needed, and does not block help when the learner is unsure.
3. StudyFellow infers a useful learning outcome and proposes a short, ordered route. The learner can correct the interpretation; they do not have to supply a formal goal.
4. The one-off session teaches through varied steps: explanation, example, diagram, learner question, practice, or a short prerequisite lesson.
5. The learner can ask a clarifying question within any step. The answer appears in context and does not discard their place or draft.
6. StudyFellow responds to learner evidence, adapts explanations or step order, then checks application with a fresh task.
7. It closes with a concise recap, what the learner demonstrated or should revisit, source references, and a manageable next action; saved progress supports a later return.

The tutor can recommend a recurring plan when the learner's need suggests it, but the MVP starts with one-off help. Scheduling and reminders require later design and explicit learner consent.

## Hackathon fit

**Primary track: Engagement & Staying in the Learning Journey.** StudyFellow aims to reduce the friction of starting, help learners get unstuck through interactive practice, and make it easier to return after an interruption. **Supporting track: Access & Discovery of Learning Resources**, by helping learners work with materials they already have.

## Proof of concept

Demonstrate a reusable topic-learning loop with several prepared, replayable scenarios, beginning with the configured photosynthesis lesson. Each demonstrates the tutor inferring an outcome, planning multiple steps, teaching with text and an explanatory image/diagram, handling a learner clarification, adapting to a response, and checking application. Save the simulated conversations as clearly labeled demo data; do not present them as live model generation or real learner results. The UI should feel like dynamically composed teaching content, not a static questionnaire. See `outputs/studyfellow-idea-sketch.md` and `outputs/studyfellow-project-spec.md` for the revised experience and acceptance criteria. Recurring study planning remains later work.

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
