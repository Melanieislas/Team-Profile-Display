const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, jobTitle, ID, email, github }) =>
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
                    <li class="list-group-item">GitHub: ${github}</li>
                </ul>
            </div>
        </div>
        <div class="card text-center col Cards">
            <div class="card-body">
                <h3>${name}</h3>
                <h4>${jobTitle}</h4>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${ID}</li>
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">GitHub: ${github}</li>
                </ul>
            </div>
        </div>
        <div class="card text-center col Cards">
            <div class="card-body">
                <h3>${name}</h3>
                <h4>${jobTitle}</h4>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${ID}</li>
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">GitHub: ${github}</li>
                </ul>
            </div>
        </div>
        </div>
        <div class="row">
            <div class="card text-center col Cards">
                <div class="card-body">
                    <h3>${name}</h3>
                    <h4>${jobTitle}</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${ID}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">GitHub: ${github}</li>
                    </ul>
                </div>
            </div>
            <div class="card text-center col Cards">
                <div class="card-body">
                    <h3>${name}</h3>
                    <h4>${jobTitle}</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${ID}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">GitHub: ${github}</li>
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
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'jobTitle',
      message: 'What is your Job Title?',
    },
    {
      type: 'input',
      name: 'ID',
      message: 'What is your ID number?',
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
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
