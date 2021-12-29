
import express from 'express';

import { Organisation } from '../entities/Organisation';

import { User } from '../entities/User';

const sendEmail = require("../helpers/email");

const router = express.Router();

router.post('/api/organisation', async (req, res) => {
	const {
		organisation,
		abn,
		email,
		phone,
		
	} = req.body;

	if(!Organisation){
		return res.send({
			success:0,
			message:"please submit your organisation name to proceed"
		})
	}
	if(!abn){
		return res.send({
			success:0,
			message:"please submit your organisation ABN  to proceed"
		})
	}

	if(!email){
		return res.send({
			success:0,
			message:"please submit your organisation's contact email  to proceed"
		})
	}

	if(!phone){
		return res.send({
			success:0,
			message:"please submit your organisation's contact number  to proceed"
		})
	}

	if(abn.length !== 11){
		return res.send({
			success:0,
			message:"ABN of your organisation should be of 11 digits"
		})
	}

	if(phone.length !== 10){
		return res.send({
			success:0,
			message:"Contact number of your organisation should be of 10 digits"
		})
	}




	const data = Organisation.create({
		organisation_name: organisation,
		abn_number: abn,
		contact_email:email,
		contact_number: phone,
		
	});

	const user_data = User.create({
		organisation: organisation,
		
		work_email:email,
		is_complete:false
		
		
	});

	try{
		const resp = await data.save()

		const user_resp = await user_data.save()

		const message = ` <h1>You have requested a password reset</h1>
      <p>Please make a put request to the following link:</p> `;

		await sendEmail({
			to: email,
			subject: "Password Reset Request",
			text: message,
		  });
	}
	catch(err){
		return res.send({
			success:0,
			message:"some technical issues please contact support"
		})
	}

	return res.json({
		success:1,
		message:"added"
	});
});

export { router as organisationRouter };