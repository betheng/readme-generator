// questions for user input where answers will be put into README file
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description explaining the what, why, and how of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "URL",
    message: "What is the URL of the live site?",
  },
  {
    type: "input",
    name: "repo",
    message: "What is the URL of the github repo?",
  },
  {
    type: "list",
    name: "license",
    message: "Please select the license you used for this project.",
    choices: [
      "GNU_AGPLv3",
      "GNU_GPLv3",
      "GNU_LGPLv3",
      "Mozilla",
      "MIT",
      "Apache",
      "Boost",
    ],
  },
  {
    type: "input",
    name: "test",
    message: "Please enter any testing protocols you used:",
  },
  {
    type: "input",
    name: "contributors",
    message: "What are the GitHub username(s) of contributors? (separate by comma)",
  },
  {
    type: "input",
    name: "userName",
    message: "What is the GitHub username of the person who can be contacted for questions? (single user)",
  },
  {
    type: "input",
    name: "name",
    message: "What is the name of the person who can be contacted for questions?",
  },
  {
    type: "input",
    name: "email",
    message: "What is that persons email address?",
  },
];

module.exports = {
  questions: questions,
};