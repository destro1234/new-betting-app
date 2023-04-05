
# The New Betting App

# Project Template: React/Rails API

## Description

This project is scaffolded so that you can build a React frontend and Rails
backend together, and easily deploy them to Render. This web app is a single page application that use Javascript, React, AcitveRecord, Sinatra and Ruby.

This web app has a sign up/login authentication process. You can signup or login wiht a unique username and a password. 
Once logged in you can see a list of NBA games. Each game allows you to write out a prediction for that game of the winner and the reason why they will win. 

At the bottom of the page in the predictions log there all of a user predictions are listed. There you can edit a prediction and change the winner and the reason why they will win. You can also delete the prediction and that will remove it from the users predicitions.

Users have a one to many relationship with predictions. and a many to many relationship with games. Games also have a one to many relationship with predicitons.

The logout button will allow you to sign out.


