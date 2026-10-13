# StudyFellow photosynthesis demo specification

**Status:** Focused demo fixture for StudyFellow's broader topic-learning product. The learner need and concept are the owner's selection; target-learner validation is still pending. This specification does not define the product's full audience or supported subject range.

## Framing

- **Demo persona:** Secondary-school biology student. The intended product audience is broader: professional learners and secondary-school, college, and university learners who struggle with a specific concept or topic.
- **Concept:** How light energy, water, and carbon dioxide support photosynthesis and sugar production.
- **Problem:** Secondary school biology students may struggle to explain how plants use light energy, water, and carbon dioxide to produce glucose during photosynthesis.
- **Promise:** StudyFellow will teach this process through a guided example and adapt its follow-up explanation to the learner’s responses.
- **Demo success measure:** After the lesson, the learner correctly explains what happens to glucose production when a plant receives less light, using the role of light energy in their answer.

This is a scoped prototype hypothesis, not a claim that research has established this as a common difficulty among secondary-school learners. The earlier N=7 discovery summary came from technical/vocational learners and does not validate this biology segment.

## Science and source treatment

Use OpenStax Biology 2e as the traceable reference. Its overview explains that photosynthesis captures light energy and uses carbon dioxide and water to make carbohydrates; the light-dependent reactions convert light into chemical energy used by later sugar-building steps. See [8.1 Overview of Photosynthesis](https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis) and [8.2 The Light-Dependent Reactions](https://openstax.org/books/biology-2e/pages/8-2-the-light-dependent-reactions-of-photosynthesis).

For a secondary-school explanation, the simplified equation is:

```text
carbon dioxide + water + light energy → sugar (often represented as glucose) + oxygen
```

Be precise in teacher notes: the Calvin cycle's direct carbohydrate product is G3P, which can be used to make glucose and other carbohydrates. The demo may use “glucose” in the familiar simplified equation, but should not imply glucose is produced directly in one step. The intended inference is conditional: if light is limiting and water, carbon dioxide, temperature, and other conditions stay suitable, less available light energy generally means a lower rate of sugar production. Do not ask learners to infer the plant's total stored glucose from light alone.

## Three-to-five-minute learner journey

1. **Start (20 seconds):** “Let’s work out how a plant makes sugar.” Offer a skip-able recall prompt: “Which are materials the plant uses: water, carbon dioxide, or light energy?”
2. **Explain (45 seconds):** Show a text-first flow: `light captured by chlorophyll → energy stored in chemical carriers → that energy helps build sugar from CO₂`; water participates in the process and oxygen is released. Label light as an energy source, and water/CO₂ as matter inputs. Keep the source link visible.
3. **Guided example (45 seconds):** “A plant has enough water and carbon dioxide. Its leaves absorb light. The captured light energy is converted into forms the plant can use to build sugar. What role does the light play?” Invite a short answer.
4. **Respond adaptively (45 seconds):**
   - If learner says light is food/material: contrast energy with matter inputs and re-show the flow.
   - If learner names light as energy but cannot connect it to sugar: explain that captured light becomes chemical energy used in sugar-building reactions.
   - If the explanation is sound: acknowledge the reasoning and move to a new situation.
   - Never require the recall prompt; all learners can proceed.
5. **Fresh transfer check (45 seconds):** “Two similar plants have the same water, carbon dioxide, and temperature. Plant B is moved to much dimmer light, and light is now the limiting factor. Which plant makes sugar faster? Explain why.” This changes the context from the guided example.
6. **Feedback and next step (20 seconds):** Give feedback against the rubric below. If incomplete, offer one targeted re-explanation and a different practice question. If correct, offer a short recap and optional next concept (for example, the role of chlorophyll).

## Success scoring

Score the fresh transfer answer, not recognition of a multiple-choice response:

| Point | Evidence required |
|---|---|
| 1 — prediction | Says Plant A (brighter light) has a higher sugar-production rate under the stated conditions. |
| 1 — reasoning | Connects dimmer light to less captured light energy, which means less energy available to support sugar building. |

**Demo success:** 2/2 on the fresh transfer check. A correct prediction with no energy reasoning is partial evidence (1/2), not a pass. If the learner misses either point, adapt and retry with a new scenario; report the first attempt separately from the retry. A scripted or seeded response demonstrates the interaction only and is not learner validation.

## Minimum implementation acceptance criteria

- Lesson works as a text-first flow on a phone-sized viewport and does not require audio, video, or an upload.
- Source attribution is visible beside the explanation and can be opened.
- Learner can skip diagnostic input and still receive the lesson.
- At least the three response classes above produce distinct, relevant follow-ups.
- Final question differs from the teaching example and is scored with the two-point rubric.
- Show what was understood and one manageable next step; avoid collecting identifying learner details for this demo.
- Provide deterministic seeded answers for a repeatable judge demonstration, clearly labeled as demo data.

## Known limits and next evidence

- No secondary-school learner observation or biology subject-matter review has been recorded yet. Ask a biology teacher/knowledgeable reviewer to verify level, terminology, and answer key before presenting it as instruction.
- The selected demo persona and concept are a product choice for a bounded test case, not a finding from the N=7 survey and not a restriction on StudyFellow's intended audience.
- A short post-lesson response measures immediate application in this scenario, not durable learning, broad effectiveness, or all photosynthesis understanding.
- English text is the current scope; multilingual quality and curriculum alignment require review before claims are made.
- Build status is partial: `system/study-fellow-ui/` contains an initial learner dashboard and photosynthesis lesson shell. Adaptive response branches, scored fresh transfer, recap, and reliable resume behavior remain to be implemented.
