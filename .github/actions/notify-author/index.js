// .github/actions/my-custom-action/index.js
const core = require('@actions/core');
const users = require('./users.json');
const readYamlFile = require('read-yaml-file');

try {
  const slackToken = core.getInput('slack-bot-token');
  const whoToNotify = core.getInput('who-to-notify');
  const contributorsPath = core.getInput('contributors-path');
  const contributors = readYamlFile.sync(contributorsPath);
  console.log(contributors);
  const user = users[whoToNotify];
  console.log(`Notifing ${user}`);
    // Set the output value
  core.setOutput('notified-user', user);

} catch (error) {
  core.setFailed(error.message);
}