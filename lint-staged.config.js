const path = require('path');

const lintingCommand = (filenames) =>
  `yarn lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const beautifyCommand = (filenames) => [
  `yarn prettier --ignore-path .gitignore --write ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')}`
];

const tsCommand = () => 'yarn type-check';

module.exports = {
  // this will check Typescript files
  '**/*.(ts|tsx)': [tsCommand],

  // This will lint and format TypeScript and JavaScript files
  '**/*.(ts|tsx|js|jsx)': [lintingCommand, beautifyCommand],

  // this will Format MarkDown and JSON
  '**/*.(md|json)': [beautifyCommand]
};
