/**
 * Reusable template for a group-specific StudyFellow discovery survey.
 * Customize the group context and questions from the contact's actual reply.
 * Run createVirtualAssistantGroupSurvey only for the current virtual-assistant lead.
 * The form is created as an unpublished draft; review the form and sharing settings
 * before publishing it to respondents.
 */
function createVirtualAssistantGroupSurvey() {
  const form = FormApp.create('TS Academy VA | Catch-up & Difficult Topics | StudyFellow', false);
  form.setDescription('We are exploring StudyFellow, a hackathon learning project. This short survey is for learners in TS Academy VA studying virtual assistance at secondary or university level. It asks what is difficult when catching up after missing a class and which topics are hardest to understand or apply. About 3 minutes. Participation is voluntary and informal, not a graded quiz. Questions are optional. We do not collect names or email addresses; please avoid personal or sensitive details. Your answers will help us choose one topic for a later short practice exercise.');
  form.setCollectEmail(false).setLimitOneResponsePerUser(false)
    .setProgressBar(true).setShuffleQuestions(false).setPublishingSummary(false)
    .setConfirmationMessage('Thank you. Your feedback will help us choose a useful topic and practice exercise for virtual-assistant learners.');

  function choice(title, options) {
    return form.addMultipleChoiceItem().setTitle(title).setChoiceValues(options).setRequired(false);
  }

  form.addSectionHeaderItem().setTitle('About your learning');
  choice('What level are you currently studying at?', [
    'Secondary school', 'University', 'Both / other', 'Prefer not to say'
  ]);
  choice('When you miss a class, what is hardest about catching up?', [
    'Finding out what was covered', 'Getting the notes or learning materials',
    'Understanding the explanation without the teacher',
    'Knowing how to apply the lesson in practical work',
    'Finding someone who can answer questions',
    'Getting enough time or internet/data to catch up', 'Other'
  ]);
  form.addParagraphTextItem()
    .setTitle('If you are comfortable, tell us what usually happens when you miss a class and try to catch up.')
    .setHelpText('Please do not include names or private details.').setRequired(false);

  form.addSectionHeaderItem().setTitle('Topics that feel difficult');
  form.addParagraphTextItem()
    .setTitle('Which virtual-assistant topic or skill is hardest for you to understand or apply?')
    .setHelpText('Name one topic if possible. Examples might include email/calendar management, online research, spreadsheets, client communication, or a topic from your course. These are prompts only; write the topic that fits your learning.')
    .setRequired(false);
  form.addParagraphTextItem()
    .setTitle('What specifically gets confusing or difficult about that topic?')
    .setHelpText('For example: remembering steps, choosing what to do, using a tool, or applying it to a new task.')
    .setRequired(false);
  choice('Would you be willing to try one short, ungraded practice question on a topic learners identify?', [
    'Yes', 'Maybe', 'No'
  ]);
  form.addParagraphTextItem()
    .setTitle('What kind of help would make it easier to catch up after a missed class?')
    .setRequired(false);

  const responses = SpreadsheetApp.create('StudyFellow | Virtual Assistant group survey responses');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, responses.getId());
  console.log('RESPONDENT_URL: ' + form.getPublishedUrl());
  console.log('EDIT_URL: ' + form.getEditUrl());
  console.log('RESPONSES_URL: ' + responses.getUrl());
}
