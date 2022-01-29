// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string //
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      licenseBadge = `[![License: MIT]`;
      return licenseBadge;
    
    case 'Apache':
      licenseBadge = `[![License: Apache]`;
      return licenseBadge;
      
    case 'Mozilla':
      licenseBadge = `[![License: Mozilla]`;
      return licenseBadge;
    
    default:
        licenseBadge = ``;
        return licenseBadge;
  }  
};

// Create a function that returns the license link //
// If there is no license, return an empty string //
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      licenseLink = '(https://img.shields.io/badge/license-MIT-brightgreen)]';
      return licenseLink;
    
    case 'Apache':
      licenseLink = '(https://img.shields.io/badge/license-Apache-yellow)]';
      return licenseLink;

      case 'Mozilla':
        licenseLink = '(https://img.shields.io/badge/license-Mozilla-pink)]';
        return licenseLink; 
      
      default:
        licenseLink = ``;
        return licenseLink;

    //if (license !== "None") {
    // return license link for table of contents //
    //} else {
     // return '';
    //}
}}

// Create a function that returns the license section of README //
// If there is no license, return an empty string //
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      licenseSection = '(https://www.mit.edu/~amini/LICENSE.md)';
      return licenseSection;

    case 'Apache':
      licenseSection = '(https://www.apache.org/licenses/LICENSE-2.0.txt)';
      return licenseSection;

      case 'Mozilla': 'https://www.mozilla.org/en-US/MPL/2.0/';
        return licenseSection;
    
      default:
      licenseSection = 'None';
      return licenseSection;
  }
};


// Create a function to generate markdown for README //
function generateMarkdown(userResponses) {
    console.log("userResponses: ", userResponses)
    let generateMarkdown = '## table of contents';

    if (userResponses.description !== '') { generateMarkdown += `
    * [Description](#description)` };

    if (userResponses.installation !== '') { generateMarkdown += `
    * [Installation](#installation)` };

    if (userResponses.usage !== '') { generateMarkdown += `
    * [Usage](#usage)` };

    if (userResponses.license !== '') { generateMarkdown += `
    * [License](#license)` };

    if (userResponses.contributing !== '') { generateMarkdown +=`
    * [Contributing](#contributing)` };

   if (userResponses.tests !== '') { generateMarkdown +=`
    * [Tests](#tests)` };

    if (userResponses.questions !== '') { generateMarkdown +=`
    * [Questions](#questions)` };


  return `# ${userResponses.title}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)

## Description
${userResponses.description}

## Installation
${userResponses.installation}

## Usage
${userResponses.usage}

## License
${renderLicenseSection(userResponses.license)}

## Contirbuting
${userResponses.contributing}

## Tests
${userResponses.tests}

### Questions
Please reach me at ${userResponses.repo} , ${userResponses.questions} and ${userResponses.email} on GitHub!

`;
}

module.exports = generateMarkdown;