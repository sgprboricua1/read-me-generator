const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
    {
      type:'input',
      name: 'title',
      message: 'What is Your project name?'
    },
    {
      type:'input',
      name: 'description',
      message: 'Please, describe your project?'
    },
    {
      type:'input',
      name: 'license',
      message: 'What is Your licensee?'
    },
    {
      type:'input',
      name: 'installation software',
      message: 'What software are you using?'
    },
    {
      type:'input',
      name: 'contributors',
      message: 'Who is contributing in your project name?'
    },
    {
      type:'input',
      name: 'tests',
      message: 'Are there any tests?'
    },
    {
      type:'input',
      name: 'questions',
      message: 'list any questions you may have?'
    }
  ]).then((rest1) => {
    console.log(rest1);
    fs.writeFile('ReadMe.md', JSON.stringify(rest1, null, '\t'), (err) => {
      err ? console.log(err) : console.log('Success!');
    })
  });
