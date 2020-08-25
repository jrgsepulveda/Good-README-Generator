const inquirer = require("inquirer");
const fs = require("fs");
const util=require("util");
const writeFileAsync=util.promisify(fs.writeFile);

const init=async ()=>{
    const response=await inquirer.prompt([
    {
        type:"input",
        message:"what is title of this project?",
        name:"title"
    },
    {
        type:"input",
        message:"Please write a short discription of your project",
        name:"description"
    },
    {
        type:"input",
        message:"Please write a table of contents",
        name:"tableOfContents"
    },
    {
        type:"list",
        choices:["npm install"],
        message:"What command should be run to install dependencies?",
        name: "install"
    },
    {
        type:"input",
        message:"What is the usage of this project?",
        name:"usage"
    },
    {
        type:"input",
        message:"What kind of license should your project have?",
        name:"license"
    },
    {
        type:"list",
        choices:["npm test"],
        message:"What command should be run to run test?",
        name:"test"
    },
    {
        type:"input",
        message:"What does the user need to know about using the repo?",
        name:"questions"
    },
    {
        type:"input",
        message:"What does the user need to know about contributing to the repo?",
        name:"contributing"
    }
]);
const readMe = `
#  ${response.title}
* * * 
## Description
>${response.description}
* * *
## Table of Contents
+ ${response.tableOfContents}
* * *
### Installation
+ ${response.install}
### Usage
> ${response.usage}
### License
> ${response.license}
### Contributing
> ${response.contributing}
### Tests
> ${response.test}
### Questions
> ${response.questions}
`;
await writeFileAsync("./README.md", readMe);
console.log("README files has been successfully generate!")

}
init();