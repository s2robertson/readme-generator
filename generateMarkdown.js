const SECTION_ID = {
    INSTALL: 'install',
    USAGE: 'usage',
    LICENSE: 'license',
    CONTRIBUTE: 'contribute',
    TESTS: 'tests',
    QUESTIONS: 'questions'
}
Object.freeze(SECTION_ID);

function renderSectionLink(id) {
    return `<a id="${id}"></a>`;
}

function renderSection(id, title, body) {
    return body.trim() ? `${renderSectionLink(id)}\n## ${title}\n${body}\n` : '';
}

const LICENSE_LINKS = {
    'MIT': 'https://choosealicense.com/licenses/mit/',
    'GPLv3': 'https://choosealicense.com/licenses/gpl-3.0/',
    'Apache v2': 'https://choosealicense.com/licenses/apache-2.0/',
    'Mozilla v2': 'https://choosealicense.com/licenses/mpl-2.0/'
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return license ? `![${license.long}](https://img.shields.io/badge/license-${encodeURIComponent(license.short)}-green)` : '';
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
    return `[${license.short}](${LICENSE_LINKS[license.short]})`
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
    return license ? `${renderSectionLink(SECTION_ID.LICENSE)}\n## License\n${renderLicenseLink(license)}\n` : '';
}

function renderQuestionsSection(githubId, email) {
    const githubLink = githubId.trim() ? `* [My GitHub profile](https://github.com/${githubId})` : '';
    const emailLink = email.trim() ? `* [Email me](mailto:${email})` : '';

    return (githubLink || emailLink) ? `${renderSectionLink(SECTION_ID.QUESTIONS)}\n## Questions\n${githubLink}\n${emailLink}\n` : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let tableOfContents = '## Table of Contents\n';

    const installationSection = renderSection(SECTION_ID.INSTALL, 'Installation', data.installation);
    if (installationSection) {
        tableOfContents += `* [Installation](#${SECTION_ID.INSTALL})\n`;
    }
    const usageSection = renderSection(SECTION_ID.USAGE, 'Usage', data.usage);
    if (usageSection) {
        tableOfContents += `* [Usage](#${SECTION_ID.USAGE})\n`;
    }
    const licenseSection = renderLicenseSection(data.license);
    if (licenseSection) {
        tableOfContents += `* [License](#${SECTION_ID.LICENSE})\n`;
    }
    const contributionSection = renderSection(SECTION_ID.CONTRIBUTE, 'Contributing', data.contribution);
    if (contributionSection) {
        tableOfContents += `* [Contributing](#${SECTION_ID.CONTRIBUTE})\n`;
    }
    const testsSection = renderSection(SECTION_ID.TESTS, 'Tests', data.tests);
    if (testsSection) {
        tableOfContents += `* [Tests](#${SECTION_ID.TESTS})\n`;
    }
    const questionsSection = renderQuestionsSection(data.githubId, data.email);
    if (questionsSection) {
        tableOfContents += `* [Questions](#${SECTION_ID.QUESTIONS})\n`;
    }

    return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

${tableOfContents}
${installationSection}
${usageSection}
${licenseSection}
${contributionSection}
${testsSection}
${questionsSection}
`;
}

module.exports = generateMarkdown;
