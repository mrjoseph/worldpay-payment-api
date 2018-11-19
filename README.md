# World Pay Api test
## How to run this example
This example is using Create React App for the frontend and a Express server for the api. You will need to open two terminal
shell's and run front end in one and backend in another.

### Clone repo
```
git clone https://github.com/mrjoseph/worldpay-payment-api.git

cd worldpay-payment-api
```

### start api
The api is hard coded on port 2000
```
cd worldpay-payment-api/server
yarn start
```

### start client
Create react app will start on port 3000
```
cd worldpay-payment-api/client
yarn start
```



## TODOs
### Unit tests
1. Api function
1. Add JWT to protect routes
1. Add a nice fade out of the authorization message after 10 seconds
1. Attach event for button that render when you click `Settle payment` `partial settle` `cancel` `View details of your payment`
1. add environment variables for `localhost:3000`

## Questions
1. Where is the payment status stored?
1. What is the `payment:events` href?




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
