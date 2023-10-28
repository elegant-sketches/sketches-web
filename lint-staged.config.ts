module.exports = {
  // this will check Typescript files
  '**/*.(ts|tsx)': () => 'yarn type-check',

  // This will lint and format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn lint --fix ${filenames.join(' ')}`,
    `yarn prettier --ignore-path .gitignore --write ${filenames.join(' ')}`
  ],

  // this will Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `yarn prettier --ignore-path .gitignore --write ${filenames.join(' ')}`
};
