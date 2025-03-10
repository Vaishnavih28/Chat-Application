import express from 'express'
import { getMessages, sendMessage } from '../controllers/message.controller.js';
import { protectRoute} from '../middleware/protectRoute.js'



const router = express.Router();

router.get('/:id',protectRoute,getMessages)
router.post('/send/:id',protectRoute,sendMessage) //protectRoute - middleware to make sure the user is logged inbefore sending message

export default router;