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
        badges.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)')
        break;
      case 'AGPLv3':
        badges.push('[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)')
        break;
      case 'GPLv3':
        badges.push('[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)')
        break;
      case 'LGPLv3':
        badges.push('[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)')
        break;
      case 'Mozilla 2.0':
        badges.push('[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)')
        break;
    }
  }
  return badges;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {}

// TODO: Create a function to generate markdown for README
function genRdmeMrkdwn(data) {
  return `# ${data.title}`;
}

module.exports = genRdmeMrkdwn;
