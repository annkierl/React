# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


_______________________________________________________________________________
TASK Description:


Part 1 Inside the src / players.js file, put an array of players with 10 objects representing users - let them have the attributes: username of the string type and points of the number type (let them be integers).

Export the players table by default from the file src / players.js using export default

In the src / App.js file, import the table from pliu src / players.js

Render the HTML table (

) containing the Username and Points headers - in each line display the data of individual objects from the table imported from the src / players.js file
Part 2 - summary
Display an additional row at the bottom in the table, where in the column with the heading Points there will be a number that is the sum of all points scored by players. In the Username column in this row, let's say Total

Below this line, add another line where we will analogically display the average of the points with the label Average

Part 3 - Highlighting
If you do not have any players with more than 100 points in src / players.js, add one or change the points for one of the existing ones.

In the src / App.js file, modify the render method in such a way that lines with players with more than 100 points are highlighted (e.g. have a red background and white text)

Part 4 - getting data from component state
Create a state in the component and write information about the currently enabled highlight color, e.g. const [highlightingColor, setHighlightingColor] = useState ('red')

Use this information instead of the color used in the previous task.

Part 5 - interaction
Add 2 buttons with the labels Red and Blue above the table.

Make sure that clicking on each of these buttons changes the currently used color of highlighting the players in the table.
