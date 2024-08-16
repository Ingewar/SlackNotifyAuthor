const core = require('@actions/core');
const readYamlFile = require('read-yaml-file');

try {
  const githubActor = process.env.GITHUB_ACTOR
  const contributorsPath = core.getInput('contributors-path');
  const contributors = readYamlFile.sync(contributorsPath);
  const user = contributors[githubActor];
  console.log(user);
    // Set the output value
  core.setOutput('notified-user', user);

} catch (error) {
  core.setFailed(error.message);
}