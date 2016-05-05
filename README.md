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