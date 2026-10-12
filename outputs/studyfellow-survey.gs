/** Paste into script.google.com/create, then run createStudyFellowSurvey. */
function createStudyFellowSurvey() {
  const props = PropertiesService.getScriptProperties();
  const saved = props.getProperty('STUDYFELLOW_SURVEY_ID');
  if (saved) {
    console.log('Existing form: ' + FormApp.openById(saved).getEditUrl());
    return;
  }
  const form = FormApp.create('Learning outside class | StudyFellow', false);
  props.setProperty('STUDYFELLOW_SURVEY_ID', form.getId());
  form.setDescription('Help us understand how you study and what gets in the way. About 3 minutes. Participation is voluntary; all questions are optional. We do not collect names or email addresses. Please avoid personal or sensitive details. Responses will guide the StudyFellow student project.');
  form.setCollectEmail(false).setLimitOneResponsePerUser(false)
    .setProgressBar(true).setShuffleQuestions(false)
    .setPublishingSummary(false)
    .setConfirmationMessage('Thank you! Your feedback will help shape StudyFellow around real learning needs.');

  function choice(title, options) {
    return form.addMultipleChoiceItem().setTitle(title).setChoiceValues(options).setRequired(false);
  }
  function checks(title, options, max) {
    const item = form.addCheckboxItem().setTitle(title).setChoiceValues(options).setRequired(false);
    if (max) item.setHelpText('Choose up to ' + max + '.').setValidation(
      FormApp.createCheckboxValidation().requireSelectAtMost(max)
        .setHelpText('Please choose no more than ' + max + ' options.').build());
    return item;
  }
  form.addSectionHeaderItem().setTitle('1 · Your learning');
  choice('Which best describes you?', ['University undergraduate', 'College / polytechnic student', 'Postgraduate student', 'Vocational / professional learner', 'Independent learner', 'Other']);
  form.addTextItem().setTitle('What are you studying, and in which country?').setRequired(false);
  checks('In the past two weeks, what made studying difficult?', [
    'Understanding a topic', 'Applying ideas to practical questions', 'Getting useful feedback',
    'Knowing what to study next', 'Keeping a study routine', 'Finding suitable resources',
    'Time or other responsibilities', 'Data, electricity or device access', 'Other'
  ], 3).setHelpText('Choose up to 3. Leave blank if none apply.');
  choice('The last time you got stuck, what did you try first?', [
    'Asked a classmate or study group', 'Asked a lecturer or tutor', 'Searched websites or videos',
    'Used an AI tool', 'Re-read notes or tried more questions', 'Stopped or postponed studying',
    'I have not recently been stuck', 'Other'
  ]);
  choice('Did that help you understand?', ['Completely', 'Mostly', 'Partly', 'Not at all', 'Not applicable']);

  form.addPageBreakItem().setTitle('2 · Your study routine');
  choice('What most recently stopped a planned study session?', [
    'I forgot', 'Work or another responsibility', 'Tiredness or feeling overwhelmed',
    'I did not know where to start', 'I needed help or materials',
    'Internet, electricity or device problems', 'I do not plan study sessions',
    'I have not recently missed one', 'Other'
  ]);
  choice('How is your usual internet access for studying?', [
    'Reliable and affordable', 'Reliable, but data costs limit use',
    'Often unreliable', 'Often unavailable'
  ]);

  form.addPageBreakItem().setTitle('3 · Your take on StudyFellow')
    .setHelpText('StudyFellow is a proposed AI teaching fellow. Bring a topic or resource for a one-off lesson, or schedule regular sessions with optional reminders. It would offer explanations, practical examples, practice and feedback, then save your progress for next time.');
  choice('Which approach would fit you best?', [
    'One-off sessions when I need help', 'Regular scheduled sessions', 'A mix of both',
    'Neither', 'I would need to try it first'
  ]);
  checks('Which would be most useful?', [
    'Explanations using my course materials', 'Practical examples and guided practice',
    'Feedback on my attempts', 'Recaps to check what I remember',
    'Scheduling and reminders', 'Picking up where I stopped',
    'Voice and visual explanations', 'Help choosing what to learn next'
  ], 2).setHelpText('Choose up to 2. Leave blank if none appeal.');
  checks('What could stop you from using it?', [
    'Incorrect explanations', 'Service cost or data usage', 'Privacy concerns',
    'Too many reminders', 'Poor fit with my course', 'Language or accessibility barriers',
    'Becoming dependent on AI', 'I prefer human support', 'Other'
  ], 3).setHelpText('Choose up to 3. Leave blank if none apply.');
  form.addParagraphTextItem().setTitle('What is one thing you wish studying tools did better?')
    .setHelpText('A recent example, preferred language or access need is welcome.').setRequired(false);

  const responses = SpreadsheetApp.create('StudyFellow | Survey responses');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, responses.getId());
  console.log('EDIT AND PREVIEW: ' + form.getEditUrl());
  console.log('RESPONSES: ' + responses.getUrl());
  console.log('Created as a draft. Review the form, choose a theme, then publish in Google Forms.');
}
