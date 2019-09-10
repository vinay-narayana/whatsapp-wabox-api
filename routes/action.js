// Main functionality of API calls 
const uuid1 = require('uuid/v1');
const Express = require("express")
const router = Express.Router()
const Remote = require('../remote/remote');
const appConfig = require('../config/main');
const api = require('../config/api');
const constantMethods = require('../config/constantMethods');
const Constants = require('../config/constants');

router.post("/sendTextMessage", async (req, res) => {
	let payload = {
		method: Constants.POST,
		baseURL: appConfig.host,
		url : api.END_POINT_SEND + constantMethods.SEND_TEXT,
		params: {
				uid: appConfig.uid,
				to: req.body.to,
				text: req.body.text,
				custom_uid: uuid1(),
				token: Remote.getToken()
			},
		headers: Remote.getHeaders()
	}
	Remote.callApi(payload, (err, resp) => {
		console.log('response', resp);
		if(err) {
			res.send(err);
		} else {
			res.send(resp);
		}
	})
});

router.post("/sendImage", async (req, res) => {
	let payload = {
		method: Constants.POST,
		baseURL: appConfig.host,
		url: api.END_POINT_SEND + constantMethods.SEND_IMAGE,
		params: {
			uid: appConfig.uid,
			to: req.body.to,
			custom_uid: uuid1(),
			token: Remote.getToken(),
			url: req.body.url
		},
		headers: Remote.getHeaders()
	}
	if(req.body.title) {
		payload.params.caption = req.body.title;
	}
	if(req.body.description) {
		payload.params.description = req.body.description;
	}
	Remote.callApi(payload, (err, resp) => {
		if(err) {
			res.send(err);
		} else {
			res.send(resp);
		}
	})
});

router.post('/sendLink', async (req, res) => {
	let payload = {
		method: Constants.POST,
		baseURL: appConfig.host,
		url: api.END_POINT_SEND + constantMethods.SEND_LINK,
		params: {
			uid: appConfig.uid,
			to: req.body.to,
			custom_uid: uuid1(),
			token: Remote.getToken(),
			url: req.body.url
		},
		headers: Remote.getHeaders()
	}
	if(req.body.title) {
		payload.params.caption = req.body.title;
	}
	if(req.body.description) {
		payload.params.description = req.body.description;
	}
	if(req.body.thumbnailUrl) {
		payload.params.url_thumb = req.body.thumbnailUrl;
	}
	Remote.callApi(payload, (err, resp) => {
		if(err) {
			res.send(err);
		} else {
			res.send(resp);
		}
	})
});

router.post('/sendMedia', async(req, res) => {
	let payload = {
		method: Constants.POST,
		baseURL: appConfig.host,
		url: api.END_POINT_SEND + constantMethods.SEND_MEDIA,
		params: {
			uid: appConfig.uid,
			to: req.body.to,
			custom_uid: uuid1(),
			token: Remote.getToken(),
			url: req.body.url
		},
		headers: Remote.getHeaders()
	}
	if(req.body.title) {
		payload.params.caption = req.body.title;
	}
	if(req.body.description) {
		payload.params.description = req.body.description;
	}
	if(req.body.thumbnailUrl) {
		payload.params.url_thumb = req.body.thumbnailUrl;
	}
	Remote.callApi(payload, (err, resp) => {
		if(err) {
			res.send(err);
		} else {
			res.send(resp);
		}
	})
});

module.exports = router