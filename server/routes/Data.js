const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../db.js');

router.get('/data', async (req, res) => {
  let driver;

  try {
    driver = await connectToDatabase();
    const session = driver.session();
    
    // Your Neo4j query to retrieve the data
    const result = await session.run('MATCH (n)-[:CONTAINS]->(p) RETURN n, p');

    const data = result.records.map(record => ({
      topic: record.get('n').properties.name,
      paper: record.get('p').properties.title,
      // Add other properties as needed
    }));

    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Neo4j:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    // Close the driver connection
    if (driver) {
      await driver.close();
    }
  }
});

module.exports = router;
