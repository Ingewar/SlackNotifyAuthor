const core = require('@actions/core');
const readYamlFile = require('read-yaml-file');

try {
  const slackToken = core.getInput('slack-bot-token');
  const whoToNotify = core.getInput('who-to-notify');
  const contributorsPath = core.getInput('contributors-path');
  const contributors = readYamlFile.sync(contributorsPath);
  const user = contributors[whoToNotify];
  console.log(user);
    // Set the output value
  core.setOutput('notified-user', user);

} catch (error) {
  core.setFailed(error.message);
}