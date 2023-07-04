// Variables for required packages
const inquirer = require("./node_modules/inquirer");
const fs = require("fs");
const util = require("util");

// Variables to connect modules
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/readmeQuestions").questions;

const writeFileAsync = util.promisify(fs.writeFile);

// function to initialize program and create README file
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    //answers.licenseBadge = licenseBadge(answers.license);
    let readMeData = generateMarkdown(answers);
    await writeFileAsync("newlyCreated-README.md", readMeData);
    console.log('Successfully created README document');
}   catch(err) {
    console.log(err);
}
}
// function to initialize program
init();