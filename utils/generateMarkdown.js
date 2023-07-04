// Function to generate markdown for README
function generateMarkdown(answers) {
  return `# README for - ${answers.title}
  ![badge](https://img.shields.io/badge/license-${answers.license}-violet)<br />
  The code in this repo is covered under the ${answers.license}.
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Live_Site_and_Code_Repository](#live_site_and_code_repository)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Contributors](#contributors)
  - [Questions](#questions)
  
  ## Live Site and Code Repository
  GitHub Repo link of project: <${answers.repo}>
  <br />
  Live project link: <${answers.URL}>

  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  ![Static Badge](https://img.shields.io/badge/license-${answers.license}-violet)
  This application uses the ${answers.license} license. 
  
  ## Tests
  ${answers.test}

  ## Contributors
  Created by GitHub user(s): ${answers.contributors}

  ## Questions
  Please reach out to ${answers.name} at ${answers.email} with any questions.
  ${answers.name}'s GitHub repo is located at <https://github.com/${answers.userName}>
  `;
    }

module.exports = generateMarkdown;