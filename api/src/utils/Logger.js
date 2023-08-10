var winston = require('winston');

// Log info, warnings and errors 
const log = winston.createLogger({
	levels: {
		error: 0, 
		warn: 1, 
		warning: 1,
		info: 2, 
		verbose: 3, 
		debug: 4, 
		silly: 5
	}
});

if (process.env.NODE_ENV !== 'test') { // Don't log during testing
	
	// If we're not in production, get a little more wordy
	if (process.env.NODE_ENV !== 'production') {
	  log.add(
	  	new winston.transports.Console({
		  	format: winston.format.combine(
		  		winston.format.timestamp(),
			    winston.format.cli()
			),
		    level: process.env.LOG_LEVEL || 'info'
	  	})
	  );
	}

	log.add(
		new winston.transports.Console({
			format: winston.format.combine(
			    winston.format.timestamp(),
			    winston.format.errors({ stack: true }),
			    winston.format.prettyPrint( {colorize: true} )
			),
			level: 'warn'
		})
	);
} else {
	const Transport = require('winston-transport');

	class NullTransport extends Transport {
	  constructor(opts) {
	    super(opts);
	    this.name = 'NullTransport';
	  }

	  log(...args) {
	    args[args.length - 1]();
	    return this;
	  }
	}

	log.add(new NullTransport())
}

module.exports = log;
