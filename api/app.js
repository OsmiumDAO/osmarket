import express from "express";
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import cors from "cors";
import Boom from '@hapi/boom';
import http from 'http';
import chalk from "chalk";
import { admin, health, blockfrostProxy } from "./src/controllers/index.js";
import dotenv from "dotenv";

dotenv.config();

// Server
const app = express();
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000)

// Cookies
app.use(cookieParser());

// Body
app.use(express.urlencoded({ extended: false }));
app.use(express.json({
    limit: '100mb',
    strict: false,
}));

// CORS
const corsOptions = { preflightContinue: true };
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

// Security
// NOTE: Setting everything explicitly so we can ignore security on things that are inconvenient at the moment
//app.use(helmet.contentSecurityPolicy()); // TODO implement nonce
app.use(helmet.dnsPrefetchControl());
// app.use(helmet.expectCt());
//app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

const server = http.createServer(app).listen(app.get('port'), function() {
	console.log(`OSMarket API listening on port ${app.get('port')}`);
});
server.keepAliveTimeout = 1000 * (60 * 6)

// Middleware
app.use((req, res, next) => {
	console.log(req.method, req.url);
	return next();
});

// extract network
// server.param("network", (req, res, next) => {
// 	// TODO: verify network is (preprod|mainnet)
// 	req.network = req.params.network;
// 	return next();
// });

// routes/controllers
health(app);

// Global error handling
app.use((err, req, res, next) => {
	console.error(chalk.red(err))
	if(Boom.isBoom(err)) {
		console.error(err.data)
		err = err.output.payload // convert boom errors to plain objects
	}

	if (res.headersSent) return next(err) // headers already sent, pass it along

	// Standardize error responses
	let errResponse = {
		statusCode: err.statusCode,
		error: err.error,
		message: err.message || ''
	}

	if (process.env.NODE_ENV !== 'production' && err.stack) errResponse.debug = err.stack;

	res.status(errResponse.statusCode).send(errResponse);

	return next()
})


// // Middleware
// // extract network
// server.param("network", (req, res, next) => {
// 	// TODO: verify network is (preprod|mainnet)
// 	req.network = req.params.network;
// 	return next();
// });

// // routes/controllers
// admin(server);
// health(server);
// blockfrostProxy(server);

// // Errors
// server.on('restifyError', function(req, res, err, callback) {
// 	// Log the error to the server
// 	console.error(chalk.red(err))
// 	req.log.error(err);

// 	// Send the error to the client, unify the structure
// 	err.toJSON = () => {
//         return {
// 			code: err.statusCode,
//             name: err.name,
// 			message: err.message
//         };
//     };
	
// 	return callback();
// });

// server.listen(process.env.PORT, function () {
// 	console.log("%s listening at %s", server.name, server.url);
// });
