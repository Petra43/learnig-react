# Learning React Project

I am using this project to apply what i have learned in react tutorials.

## What im building: Warhammer 40k crusade manager.



### The Goal

Create a web app is that it can be used to manage crusade armies in warhammer 40k.

### features
#### app features(what it can do)
current
- Are able to create multiple orders of battle(a list of warhammer units that can be used in games)
- Create in an order of battle units and keep track of their equipment, upgrades and battle statistics
possible features
- build armies with units in an order of battle
- keep track of individual battle statistics
- make battle statistics of a unit equal the sum of it's individual battle statistics

#### technical features(how it dose it)
current
- uses firebase to make data persistent 
- Dashboard component: manages orders of battle
- OrderOfBattle component manages the crusade cards(units) in an order of battle
- crusadeCard component: can edit the details of an individual unit
- Input components: reduces the repetition when adding lots of inputs to a component
future
- enable the deletion of ordersOfBattle and Units
- flesh out the css to make it responsive and enhance usability
- A multi-select/ tag component for the crusade card fields that can have multiple values
- allow a user to log out





## Getting Started with Create React App: readme from npx create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
