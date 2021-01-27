# Eat Da Burger Mini Application [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
### MySQL + Node.js + MVC + Handlebars + Express.js + Homemade ORM 
This is a Node.js-driven mini application deployed to the web. Every line of code written from the server, to the routing, to the database queries and creation, the html, css, javascript, and handlebars application was all written by me in this application. It built as a project for my fullstack coding bootcamp. It allows the user to feed the database the name of a burger and then submit it to the list to "be devoured" and then allows the user to select burgers off of the list to "devour" and move to the next list.

## Table of Contents

[Assignment Details & Acceptance Criteria](#assignment-details--acceptance-criteria) 

[Installing/Dependencies](#installingdependencies)  

[Usage Information](#usage-information)

[Walkthrough](#walkthrough)  

[Contributing to this project](#contributing-to-this-project)  

[Questions?](#questions)  

[License](#license)

## Assignment Details & Acceptance Criteria
### Assignment Details
I was given the following user story to guide my development:

"In this assignment, you'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML."

### Acceptance Criteria

- Summarized Acceptance Criteria:

    -> be written from scratch

    -> contain at least these three methods for viewing/editing/creating burgers: selectAll(), insertOne(), updateOne()
    
    -> be deployed to Heroku successfully using JAWSDB_URL to connect the deployed project to a mySQL database


## Installing/Dependencies
```npm i express```
```npm i express-handlebars```
```npm i mySQL```

## Usage Information
Clone this project, install the required dependencies, and run 'node server.js' in your terminal.

Or, alternatively, visit the deployed version of the finished project on Heroku [here](https://radiant-tor-37762.herokuapp.com/index).

## Walkthrough

### How It's Working

The MVC routing of this app gives it its main functionality. The three main functions begin with selectAll(), insertOne(), and updateOne() in the orm.js file. At this point all of the functions only have default, vague parameters that would allow this ORM to be re-used by other applications. Then, those functions are passed to the burger.js file, which is the models folder. There, the functions are given a shorter name and a callback, and are also provided with the parameters that do not need to be determined by the user and are hyper-specific to the application, such as the database and table and column names. For selectAll(), there was no user parameters needed. For insertOne(), only the name of the burger needed dynamic input to the parameter. For updateOne(), only the id of the burger to be devoured needed to be dynamic. Then, these functinos are fed to the controller file, which routes them via express, defines where the dynamic parameter inputs will come from, and handles any other use cases with these functions (like if no rows are changed upon call of updateOne()). 

After all the info is handled by the server file and the MVC structure, the handlebars templates and javascript come into the picture. A main and index handlebars file are used to draw the page for the user, and present the user with dynamic lists based on sandwiches devoured/not devoured and provide a form for new sandwich inputs. The javascript on these files handles the click events for both the form submit button (which triggers the insertOne() method and passes the user input) and also the devour button (which triggers the updateOne() method and passes the id captured from the associated sandwich). Finally, some overarching css and an image in the public directory style the rest of the site for user experience.

![Gif Walkthrough of Application](https://www.youtube.com/watch?v=Cio91wbjGGA&feature=youtu.be).

[Again, you can check out the deployed project here!](https://radiant-tor-37762.herokuapp.com/index)

## Contributing to this project
Pull requests are welcome! Find my contact information below to reach out about collaborating with me.

## Questions?
[Laura Baumann](https://github.com/thelbaumann) -- You can reach me anytime for questions or collaboration at l.bmann@yahoo.com.
## License
This project is licensed under [MIT](LICENSE) - 2020 Laura Baumann
