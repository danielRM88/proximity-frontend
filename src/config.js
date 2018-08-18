
var DEVELOPMENT_API_SERVER = "http://localhost";
var DEVELOPMENT_API_PORT = 3000;

var PRODUCTION_API_SERVER = "http://localhost";
var PRODUCTION_API_PORT = 3000;

var server = DEVELOPMENT_API_SERVER;
var port = DEVELOPMENT_API_PORT;

if (process.env.NODE_ENV === 'production') {
  server = PRODUCTION_API_SERVER;
  port = PRODUCTION_API_PORT;
}

export const config = { 
  server: server, 
  port: port
};