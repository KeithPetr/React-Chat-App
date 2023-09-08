# React Chat App
## React and Firebase Project

This project involved creating an application where you could send and receive messages within a group chat. 
Users can sign in with an existing Gmail account, or they can enter in a new email address and create their own password.
Once the users are logged in, either their Gmail information is displayed along side their messages, or I set up a default
avatar and used their email address as their display name.

## Table of Contents
- [Programming](#programming-languages-used)
- [Screenshots](#screenshots)
- [Links](#links)
- [Project Requirements](#project-requirements)
- [Future Goals](#future-goals)
- [Resources](#resources)

## Programming Languages Used
  - HTML
  - CSS
  - JavaScript
  - React
  - Firebase

## Screenshots
<img src="https://github.com/KeithPetr/React-Chat-App/assets/91621041/e3bab514-5323-41de-8373-d80143d088a9" height="450" width="250" />
<img src="https://github.com/KeithPetr/React-Chat-App/assets/91621041/e0c236a1-9c73-4d45-9d4e-ae20481bf6ac" height="450" width="250" />

## Links
 [Live Demo](https://keiths-react-chat.netlify.app/)

## Project Requirements
There were 4 main requirements for this project. The first requirement was to set up and use the authentication features available from Firebase. 
I created a Firestore database that would hold the message objects that were created when a user sent a message. I then used the methods created by 
Firebase to query those objects so that they could be fetched and displayed according to creation dates. The second requirement was that I needed to 
set up the React components to hold and display the messages sent by each user. I used conditional rendering to display the correct information based 
off of the users authentication status. The third requirement was to access and use the user data that was created when a user signed in. If they did so
with a Google account, their avatar and display name would be used to go alongside their messages. If they created an account manually, their username 
would default to the email address they provided and their avatar would default to a React logo image. The last requirement I had was to create an icon
that could be displayed on mobile devices. When the user accesses the Netlify website, they can select the option to 'add to Home Screen' to add an icon
for the app to their device.

## This project includes the following 'stretch goals':
  - Allow users to manually enter an email address
  - Allow users to create and confirm a new password on sign up
  - Create and link credentials for manually entered email addresses
  - Query the data using Firestore query method
  - Adding a site.webmanifest file to allow a favicon to be added to the home screen of mobile devices

## Future Goals
  - Add the ability for users to create their own chat room and select the users they wish to chat with
  - Style the sign up form and chat boxes better for a more modern look
  - Create a side menu component that holds a users friends they have other chat rooms with

### Resources:
  - [freecodecamp](https://www.freecodecamp.org/news/building-a-real-time-chat-app-with-reactjs-and-firebase/)
