//NOTES:

//share the data with backend, user creates account - we can store the user data in our database => use clerk webhook
//whenever we'll create account we will get this type of data(code below) using web hooks -> using this data we can save in our Database
// {
//   "event": "payment_success",
//   "data": {
//     "amount": 1999,
//     "currency": "INR",
//     "user": "user123"
//   }
// }

// --------------

import { Webhook } from 'svix'

//API Controller Function to manage Clerk User with Database
//API end point(created at) -  https://localhost:4000/api/user/webhooks

const clerkWebhooks = async (req,res) => {
    //logic: whenever we'll create a new user in frontend, we will get the user data in backend too -
    //we need public IP to work with clerk webhooks, we can use vercel to get public IP that will assign domain to our backend, we'll use this domain as public IP in clerk webhooks
    try {
        //
        
    } catch (error) {
        
    }
    
}