/** Rock's master's group: SG-20261013-cyber-management-15. Creates a draft. */
function createCyberManagementGroupSurvey() {
  const props = PropertiesService.getScriptProperties();
  const key = 'STUDYFELLOW_CYBER_MANAGEMENT_15_FORM_ID';
  const saved = props.getProperty(key);
  if (saved) {
    const existing = FormApp.openById(saved);
    console.log('Existing form; review before use: ' + existing.getEditUrl());
    console.log('RESPONDENT_URL: ' + existing.getPublishedUrl());
    return;
  }
  const form = FormApp.create("Cyber Security Management | Master's Learning Survey | StudyFellow", false);
  props.setProperty(key, form.getId());
  form.setDescription("For master's students studying cyber security management in this WhatsApp learning group. Help us identify a concept or task you would find useful to practise. About 3 minutes. This is voluntary, informal hackathon research, not a graded quiz. All questions are optional. We do not collect names or email addresses. Please describe learning experiences without personal, employer, client, system or security-sensitive details. Responses will help choose a topic for a later short practice exercise.");
  form.setCollectEmail(false).setLimitOneResponsePerUser(false)
    .setProgressBar(true).setShuffleQuestions(false).setPublishingSummary(false)
    .setConfirmationMessage('Thank you! Your feedback will help us choose a relevant concept and short practice exercise for StudyFellow.');
  function paragraph(title, help) {
    const item = form.addParagraphTextItem().setTitle(title).setRequired(false);
    if (help) item.setHelpText(help);
  }
  paragraph('Which cyber security management concept or task would you most like help understanding or applying?', 'Name one topic from your course, or write None if you do not currently need help.');
  paragraph('What specifically is difficult or confusing about that topic?', 'For example, describe the step, decision or connection you find hard to explain. Leave blank if none applies.');
  paragraph('Can you describe a recent study question or practice task where this difficulty appeared?', 'Use a general or fictional example. Do not share confidential assignments, employer information or real security incidents.');
  paragraph('What did you try to understand it, and how well did that help?');
  paragraph('What would make a short explanation and practice exercise useful and accessible to you?', 'You may mention course materials, examples, feedback, study time, internet/data access, language or an access need. Avoid personal details.');
  form.addMultipleChoiceItem().setTitle('Would you be willing to try one short, ungraded practice question on a topic identified by this group?')
    .setChoiceValues(['Yes', 'Maybe', 'No']).setRequired(false);
  const responses = SpreadsheetApp.create('StudyFellow | Cyber Security Management masters group responses');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, responses.getId());
  console.log('RESPONDENT_URL: ' + form.getPublishedUrl());
  console.log('EDIT_URL: ' + form.getEditUrl());
  console.log('RESPONSES_URL: ' + responses.getUrl());
}
