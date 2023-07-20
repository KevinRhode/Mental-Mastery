# placeholdername-project
```md
Current Notes,

Problem we are solving: Lessening the mental load on a user/family
MVP:

User Logs In/Out
Create a Family (component) 
Select a Member (component)
Task (component)
2 types: personal, family 
Dashboard - (
    shows tasks,
    can select a member to view, can create a task
    )

each family member's info (build upon)
(when storing family PII bcrypt maybe)
bday
allergies:{

}
blood type:""
medications:{
    {
        doctor,
        where last filled,

    }
}

maybe grocery list(component)
create lists(2 types, personal and family)

maybe (find an api for receipes) (component) (on select member page)
-use search to populate 5 posiable reciepes (has peanut alg/ removes all receipts with said ingriedent)

maybe Calendar API - every ones schedule, something with quick editing and recurring events


```
## Mental Mastery - Family Scheduling and Task Application

## Table of Contents

## Description
Mental Mastery is a collaborative MERN-stack single-page application designed to solve the challenges faced by families in managing their schedules and tasks. The application provides a user-focused platform that allows families to coordinate their activities, assign tasks, and stay organized.

## Technologies Used
React (Front-end framework)
GraphQL (API)
Node.js and Express.js (Server)
MongoDB (Database)
Mongoose ODM (Object Data Modeling)
JWT (JSON Web Tokens for authentication)
Heroku (Deployment platform)

## Features
User Authentication: Mental Mastery implements JWT for secure user authentication, ensuring that only authorized individuals can access the application and its features.
Family Scheduling: Users can create and manage their family schedules, including events, appointments, and recurring tasks. The application provides a calendar view for easy visualization and planning.
Task Management: Families can assign tasks to specific members and track their completion. Task lists can be created, and reminders can be set to ensure timely completion.
Data Manipulation: Mental Mastery supports queries and mutations to retrieve, add, update, and delete data. Users can easily modify their schedules, tasks, and user information.
Responsive UI: The application features a polished and responsive user interface, ensuring a seamless experience across different devices and screen sizes.

## Deployment
The Mental Mastery application is deployed on Heroku and can be accessed at: .

## License
This project is licensed under the MIT License.