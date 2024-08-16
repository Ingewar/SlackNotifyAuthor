// .github/actions/my-custom-action/index.js
const core = require('@actions/core');

try {
  const slackToken = core.getInput('slack-bot-token');
  const whoToNotify = core.getInput('who-to-notify');
  
  console.log(`Notifing ${whoToNotify}`);
} catch (error) {
  core.setFailed(error.message);
}