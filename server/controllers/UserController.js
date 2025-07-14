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

import { Webhook } from "svix";
import userModel from "../models/userModel.js";

//API Controller Function to manage Clerk User with Database
//API end point(created at) -  https://localhost:4000/api/user/webhooks

const clerkWebhooks = async (req, res) => {
  //logic: whenever we'll create a new user in frontend, we will get the user data in backend too -
  //we need public IP to work with clerk webhooks, we can use vercel to get public IP that will assign domain to our backend, we'll use this domain as public IP in clerk webhooks
  try {
    //Create a Svix instance with Clerk webhook secret.
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastname: data.last_name,
          photo: data.image_url,
        };
        await userModel.create(userData);
        res.json({});
        break;
      }
      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastname: data.last_name,
          photo: data.image_url,
        };
        await userModel.findOneAndUpdate({ clerkId: data.id, userData });
        res.json({});
        break;
      }
      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkId: data.id });
        res.json({});
        break;
      }
      default:
        break;
    }

  } 
  catch (error) {
    console.log("error :>> ", error.message);
    res.json({ success: false, message: error.message });
  }
}

export { clerkWebhooks }
