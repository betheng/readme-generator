// array of questions for user - WAS "questions"
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    message: "Provide a short description explaining the what, why, and how of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Please tell us about your project:",
    name: "about",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation",
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
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla",
      "MIT",
      "Apache",
      "Boost",
    ],
  },
  {
    type: "input",
    message: "Please enter any testing protocols you used:",
    name: "test",
  },
  {
    type: "input",
    name: "author",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "userEmail",
    message: "What is your email?",
  },
];

module.exports = {
  questions: questions,
};