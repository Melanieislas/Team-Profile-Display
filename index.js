const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Classes/Employee');

const generateHTML = ({ name, jobTitle, ID, email, github, name1, name2, name3, name4, jobTitle1, jobTitle2, jobTitle3, jobTitle4, ID1, ID2, ID3, ID4, email1, email2, email3, email4, github1, github2, github3, github4 }) =>
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./Public/style.css"/>

</head>

<body>
    <header class="text-center">
        <h1>My Team</h1>
    </header>
    <div class="container">
        <div class="row">
        <div class="card text-center col Cards">
            <div class="card-body">
                <h3>${name}</h3>
                <h4>${jobTitle}</h4>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${ID}</li>
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">GitHub: 
                        <a href="https://github.com/${github}"> ${github} </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card text-center col Cards">
            <div class="card-body">
                <h3>${name1}</h3>
                <h4>${jobTitle1}</h4>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${ID1}</li>
                    <li class="list-group-item">Email: ${email1}</li>
                    <li class="list-group-item">GitHub: 
                        <a href="https://github.com/${github1}"> ${github1} </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card text-center col Cards">
            <div class="card-body">
                <h3>${name2}</h3>
                <h4>${jobTitle2}</h4>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${ID2}</li>
                    <li class="list-group-item">Email: ${email2}</li>
                    <li class="list-group-item">GitHub: 
                        <a href="https://github.com/${github2}"> ${github2} </a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        <div class="row">
            <div class="card text-center col Cards">
                <div class="card-body">
                    <h3>${name3}</h3>
                    <h4>${jobTitle3}</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${ID3}</li>
                        <li class="list-group-item">Email: ${email3}</li>
                        <li class="list-group-item">GitHub: 
                            <a href="https://github.com/${github3}"> ${github3} </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card text-center col Cards">
                <div class="card-body">
                    <h3>${name4}</h3>
                    <h4>${jobTitle4}</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${ID4}</li>
                        <li class="list-group-item">Email: ${email4}</li>
                        <li class="list-group-item">GitHub: 
                            <a href="https://github.com/${github4}"> ${github4} </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</body>

</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the Team Managers Name: ',
    },
    {
      type: 'list',
      name: 'jobTitle',
      message: 'What is your Job Title?',
      choices: ['Engineer', 'Intern', 'Manager'],
    },
    {
      type: 'input',
      name: 'ID',
      message: 'What is your employee ID number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter your Office Number',
    },
      {
        type: 'list',
        name: 'jobTitle1',
        message: 'Would you like to add and Engineer or Intern?',
        choices: ['Engineer', 'Intern'],
      },
      {
        type: 'input',
        name: 'name1',
        message: 'What is their name?',
    },
      {
        type: 'input',
        name: 'ID1',
        message: 'What is their employee ID number?',
      },
      {
        type: 'input',
        name: 'email1',
        message: 'What is their email?',
      },
      {
        type: 'input',
        name: 'github1',
        message: 'Enter their GitHub Username',
      },
      {
        type: 'list',
        name: 'jobTitle2',
        message: 'Would you like to add and Engineer or Intern?',
        choices: ['Engineer', 'Intern'],
      },
      {
        type: 'input',
        name: 'name2',
        message: 'What is their name?',
      },
      {
        type: 'input',
        name: 'ID2',
        message: 'What is their employee ID number?',
      },
      {
        type: 'input',
        name: 'email2',
        message: 'What is their email?',
      },
      {
        type: 'input',
        name: 'github2',
        message: 'Enter their GitHub Username',
      },
      {
        type: 'list',
        name: 'jobTitle3',
        message: 'Would you like to add and Engineer or Intern?',
        choices: ['Engineer', 'Intern'],
      },
      {
        type: 'input',
        name: 'name3',
        message: 'What is their name?',
      },
      {
        type: 'input',
        name: 'ID3',
        message: 'What is their employee ID number?',
      },
      {
        type: 'input',
        name: 'email3',
        message: 'What is their email?',
      },
      {
        type: 'input',
        name: 'github3',
        message: 'Enter their GitHub Username',
      },
      {
        type: 'list',
        name: 'jobTitle4',
        message: 'Would you like to add and Engineer or Intern?',
        choices: ['Engineer', 'Intern'],
      },
      {
        type: 'input',
        name: 'name4',
        message: 'What is their name?',
      },
      {
        type: 'input',
        name: 'ID4',
        message: 'What is their employee ID number?',
      },
      {
        type: 'input',
        name: 'email4',
        message: 'What is their email?',
      },
      {
        type: 'input',
        name: 'github4',
        message: 'Enter their GitHub Username',
      },
  ])

  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });


