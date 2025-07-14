import express from "express";
import { clerkWebhooks } from '../controllers/UserController.js';

const useRouter = express.Router();

useRouter.post('/webhooks', clerkWebhooks);    //When Clerk sends a webhook to https://yourdomain.com/webhooks, it will be handled by your clerkWebhooks controller.


export default useRouter;
//we'll use this router to create api(in server.js)