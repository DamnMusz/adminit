# AdminIT

## Notes ##

Frontend

- AngularJs
- [www.adminit.ml](http:///www.adminit.ml)
- hosted in github pages

Backend

- nodejs
- [api.adminit.ml](http:///api.adminit.ml)
- hosted in Heroku


## Roadmap ##

- landing page
- implement HTTP verbs to API
- render cards from backend
- login/logout

## API usage ##

### Cards ###
    ID              Uniq card id in the datastore
    OWNER           Owner
    TITLE           Title
    CONTENT         Content
    TIMESTAMP       Last modified

### API endpoints ###
    ROUTE               VERV    ACTION
    /cards              GET     Get all the cards.
    /cards              POST    Create a cards.
    /cards/:cardId      GET     Get a single cards.
    /cards/:cardId      PUT     Update a cards with new info.
    /cards/:cardId      DELETE  Delete a cards.

## Dev guide ##

### Backend ###

#### Install ####
    npm install

#### Test ####
    node server.js

#### Deploy ####
    git push origin master

### Frontend ###

#### Install ####
    npm install && bower install

#### Test ####
    grunt serve

#### Build ####
    grunt build

### Deploy ###
    git subtree push --prefix frontend/dist origin gh-pages