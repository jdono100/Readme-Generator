// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  let badges = [];
  for (i = 0; i < licenses.length; i++) {
    switch(licenses[i]) {
      case 'MIT':
        badges.push('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)')
        break;
      case 'Apache 2.0':
        badges.push('[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)')
        break;
      case 'AGPLv3':
        badges.push('[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)')
        break;
      case 'GPLv3':
        badges.push('[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)')
        break;
      case 'Eclipse 1.0':
        badges.push('[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)')
        break;
      case 'Mozilla 2.0':
        badges.push('[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)')
    }
  }
  return badges;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {
  let licenseLink = "This application is protected under the following license(s):\n"
  for (i = 0; i < licenses.length; i++) {
    switch(licenses[i]) {
      case 'MIT':
        licenseLink = licenseLink.concat('* [MIT](https://opensource.org/licenses/MIT)\n')
        break;
      case 'Apache 2.0':
        licenseLink = licenseLink.concat('* [Apache 2.0](https://opensource.org/licenses/Apache-2.0)\n')
        break;
      case 'AGPLv3':
        licenseLink = licenseLink.concat('* [AGPLv3](https://www.gnu.org/licenses/agpl-3.0)\n')
        break;
      case 'GPLv3':
        licenseLink = licenseLink.concat('* [GPLv3](https://www.gnu.org/licenses/gpl-3.0)\n')
        break;
      case 'Eclipse 1.0':
        licenseLink = licenseLink.concat('* [Eclipse 1.0](https://opensource.org/licenses/EPL-1.0)\n')
        break;
      case 'Mozilla 2.0':
        licenseLink = licenseLink.concat('* [Mozilla 2.0](https://opensource.org/licenses/MPL-2.0)\n')
    }
  }
  return licenseLink;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licensesText) {
  if (licensesText != "This application is protected under the following license(s):\n") {
    let licenseText = `## Licenses\n${licensesText}`
    return licenseText
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function genMarkdown(data) {
  const {title, description, gituser, email, installation, usage, contribution, test, licenses} = data;
  const licenseBadge = renderLicenseBadge(licenses);
  const licenseLink = renderLicenseLink(licenses);
  const licenseSect = renderLicenseSection(licenseLink);
  let toc = `
    * [Installation](#installation)\n
    * [Usage](#usage)\n
    * [Contributing](#contribution)\n
    * [Testing](#test)\n
  `;
  if (licenseSect !== '') {
    toc = toc.concat(`* [Licenses](#licenses)`)
  };

  return `
  <h1 align="center">${title}</h1>

  ${licenseBadge}

  ## Description

  ${description}

  ## Table of Contents

  ${toc}

  ## Installation

  ${installation}

  ## Usage

  ${usage}

  ## Contributing
  
  ${contribution}

  ## Testing

  ${test}

  ${licenseSect}

  ## Questions

  :octocat: Find me on GitHub: [${gituser}](https://github.com/${gituser}) :octocat:

  :inbox_tray: Or send me an email: ${email} :outbox_tray:
  `
}

module.exports = genMarkdown;
