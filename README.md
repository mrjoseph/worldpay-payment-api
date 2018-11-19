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
