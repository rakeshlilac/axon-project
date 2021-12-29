
import express from 'express';

import { Clinic } from '../entities/Clinic';
import { Organisation } from '../entities/Organisation';

const router = express.Router();

router.post('/api/organisation', async (req, res) => {
	const {
		site,
		abn,
		business,
		address1,
        address2,
        suburb,minor,organisation
		
	} = req.body;

	if(!site){
		return res.send({
			success:0,
			message:"please submit your site's name to proceed"
		})
	}
	if(!abn){
		return res.send({
			success:0,
			message:"please submit your organisation's ABN  to proceed"
		})
	}


    if(!minor){
		return res.send({
			success:0,
			message:"please submit your site's monor id  to proceed"
		})
	}
	

	if(abn.length !== 11){
		return res.send({
			success:0,
			message:"ABN of your organisation should be of 11 digits"
		})
	}

	
	if(!address1 || !address2 || !suburb){
        return res.send({
			success:0,
			message:"Address of your site is incomplete"
		})
    }

	if(!organisation){
        return res.send({
			success:0,
			message:"please mention which organisation does your site belongs to"
		})
    }

	const data = Clinic.create({
		site_name: site,
		abn_number: abn,
        business_name:business,
        address_1:address1,
        address_2:address2,
        suburb:suburb,
		minor_id:minor,
		organisation:organisation
	});

	try{
		const resp = await data.save()
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