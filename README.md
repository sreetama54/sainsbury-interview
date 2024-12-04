# React Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## INSTRUCTIONS

The test consist on the creation of a web application in React that in the landing page will show a list of movies and when one of this is clicked, it takes you to another page where more detail info about the movie is displayed. 


### Visuals

Visuals for both pages are provided:

[Home](./Visual_Home.jpg)

[Single Movie](./Visual_Movie.jpg)

Note: They are guidelines more than strict visuals, feel free to improve on them.


### Data

The data will be retrieved via the provided public API:

Endpoint for the list of movies:

`https://api.themoviedb.org/3/discover/movie?api_key=c857fa67fba523ad3ce66df18e7ab279&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

Endpoint for the single movie details:

`https://api.themoviedb.org/3/movie/${id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`

And for the images root path:

`https://image.tmdb.org/t/p/w300`

Note: This endpoints are already in `./src/App.js` in a commented `const` for easier set up.

### Requirements

- Routing:
  - The different pages should be handled by some sort of routing library.
  - No restriction on which library to use.
- State management:
  - The data should handled via some sort of state management library or React API.
  - No restriction on which library to use.
- Styling:
  - The website should be responsive and should be cater at least for 2 views: Desktop and Mobile.
  - The website UI shouldn't look rough.
  - No restriction to use CSS, SASS or CSS-in-JS
- Testing:
  - Not required to test all the components.
  - Encourage to test different cases more than the happy path.

### Notes

- The use of any libraries is allowed.
- For easier set up, many libraries has been already installed.
- Some of this libraries are already config too.

## Preinstalled libs

- react-router-dom
- redux
- react-redux
- redux-thunk
- styled-components
- axios
- node-sass
- enzyme
- jest-enzyme
- @testing-library/react
- @testing-library/jest-dom
