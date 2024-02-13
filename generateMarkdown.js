// generateMarkdown.js

function generateMarkdown(data) {
  return `
# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
![License](https://img.shields.io/badge/license-${data.license}-blue.svg)
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For additional questions, contact ${data.github} at ${data.email}.
`;
}

module.exports = generateMarkdown;

