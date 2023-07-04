// Variables for required packages
const inquirer = require("./node_modules/inquirer");
const fs = require("fs");
const util = require("util");
// Variables to connect modules to application
const generateMarkdown = require("./utils/generateMarkdown");
//const licenseBadge = require("./utils/licenseBadge").licenseBadge;
const questions = require("./utils/readmeQuestions").questions;
//Allows for use of async await
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

// function call to initialize program
init();