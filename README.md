# GetYourFeeds - A RSS Reader

## Motivation

Undertaken as part of a take home assignment, courtesy of Avoma.

## What does it do?

The app is a simple SPA RSS Reader created with React. It accepts an RSS Feed, and displays the information retrieved from the feed onto the app. Simple as that!

## What makes it work?

The following technologies/dependencies have been used to create the app:

- React -> Frontend Library
- react-router-dom -> Enable client side routing
- styled-components -> CSS-in-JS styling
- react-icons -> Icon Library

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Project Structure

| File or folder      | Description                                                                                                                               |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `src/index.jsx`     | The entry file. This renders the App into the root DOM node.                                                                              |
| `public/index.html` | The only HTML file in our App. All scripts and styles will be injected here by Webpack.                                                   |
| `src/App.jsx`       | The Application. This is where our Context is passed down from, Routes are called and Themes are shared.                                  |
| `src/routes.js`     | react-router-dom's main functionality is done here with Route Switches. Additionally, all routes have been lazy loaded using `React.lazy` |
| `src/components`    | Small single utility react components                                                                                                     |
| `src/containers`    | They act as the business layer for the components.                                                                                        |
| `src/pages`         | Route Pages                                                                                                                               |
| `src/context`       | createContext root                                                                                                                        |
| `src/reducers`      | Contains initialState and reducers to be pushed down the child nodes using Context.                                                       |
| `src/services`      | Network calls                                                                                                                             |
