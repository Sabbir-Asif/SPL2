const neo4j = require('neo4j-driver');
require('dotenv').config();

const URI = process.env.NEO4J_URI;
const USER = process.env.NEO4J_USERNAME;
const PASSWORD = process.env.NEO4J_PASSWORD;
let driver;

async function connectToDatabase() {
  try {
    driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD));
    const serverInfo = await driver.getServerInfo();
    console.log('Connection established');
    console.log(serverInfo);
    return driver;
  } catch (err) {
    console.log(`Connection error\n${err}\nCause: ${err.cause}`);
    throw err; // Rethrow the error to handle it elsewhere
  }
}

module.exports = {
  connectToDatabase
};
