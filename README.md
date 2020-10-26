# Animal Crossing Photo Sharing App (Anigram)

## Technologies Used

- Javascript
- React.js
- Node.js
- Express
- Redux
- PostgreSQL
- Sequelize
- Material-UI
- CSS
- Amazon S3

## Features

- User can create an account and login
- User can go to their profile page and select an avatar
- User can go to their profile page and utilize a daily task list where they can check off tasks
- User can upload a photo with a caption
- User can view photos with captions from other users
- User can like other users' photos

Stretch Goals

- Profile themes
- Filter feed by most likes, most recent, etc.
- Follow other users

## Routes

Frontend

- / (homepage - If logged in, will display photo feed, same as /posts.
  If not logged in, will display login (/login))
- /posts (Display all posts)
- /posts/upload (Form to upload a post)
- /users/login (Form to log in)
- /users/signup (Form to sign up)
- /users/:username/profile (user profile page)
- /users/avatar (form to select avatar)

Backend

**users**

- POST /api/session (login)
- DELETE /api/session (logout)
- POST /api/users (sign-up)
- GET api/users/:username (get information on particular user)
- PUT /api/users/:username/edit (edit user profile)

**posts**

- POST api/posts (create a post)
- GET api/posts (get all posts)

**likes**

- GET api/posts/:postId/likes (get number of likes for a post)
- POST api/posts/:postId/likes (like a post)
- DELETE api/posts/:postId/likes (remove a like from a post)
