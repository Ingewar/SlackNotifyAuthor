// .github/actions/my-custom-action/index.js
const core = require('@actions/core');

try {
  const myInput = core.getInput('my-input');
  console.log(`Hello, ${myInput}!`);
} catch (error) {
  core.setFailed(error.message);
}