# README Generator

## Description
This README generator asks the user a series of questions about a project, and generates Markdown
containing the provided answers.  I built this project in order to practice working with JavaScript
in Node.js, and to use the `inquirer` module.

[View sample output](./out/README.md)

## Usage
The program can be launched from the command line with either `node index.js [outputFile]`, or
`npm start [-- outputFile]`.  The outputFile option can be used to specify where the Markdown output
will be written to.  If no outputFile is specified, `./README.md` will be used as the default.

[Watch a sample usage video](https://drive.google.com/file/d/1c8wJ8p0ihTU5DM0BdH7twDnqwB_9DCVg/view)

## Credits
The README generator app uses the [inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) package.

## License
MIT
