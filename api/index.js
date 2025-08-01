const serverless = require("serverless-http");
const app = require('../Server/Server');

module.exports.handler = serverless(app);
