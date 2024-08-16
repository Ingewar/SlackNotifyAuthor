// .github/actions/my-custom-action/index.js
const core = require('@actions/core');

try {
  const slackToken = core.getInput('slack-bot-token');
  console.log(`Token is, ${slackToken}!`);
} catch (error) {
  core.setFailed(error.message);
}