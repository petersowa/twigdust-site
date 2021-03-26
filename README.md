# Simple Website with React Client Side

## To Do

- [ ] Add database
- [ ] Add Readme
- [ ] Create a utility component to log render stats
- [ ] Add husky
- [ ] Add Testing
- [x] Add Sass
  - [x] npm install node-sass --save
- [x] Add Env File
- [ ] Add Repo on github
- [ ] Add to DigitalOcean App component for testing

## File/Folder Structure

```text
/src
    /components 
        Footer - page footer
        Header - page header
        Layout - layout structure
        SidebarPrimary - sidebar 
        Status - status component

    /context
        global - global context setup using useReducer hook

    /lib
        location for reusable utility code and components

    /pages
        stores main content or apps

    /redux - sample redux state setup
        Store - store setup, includes reducer and actions

    /styles
        Global and component styles

    index
        Includes global styles, sets up app states, and creates routing 
        for pages. Uses Layout component to structure pages.


```

## Logs
- 2/27/2021
  - Update README.md
  - Add sass support
  - Document folder structure
  - Store app title in .env, later accessed in global context to set initial app title, using \
  ```title: process.env.REACT_APP_TITLE || 'Snappy Blog',```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
