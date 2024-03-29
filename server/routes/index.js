const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
const typeDefs = require('../schemas/typeDefs');
const resolvers = require('../schemas/resolvers');

module.exports = { typeDefs, resolvers };

router.use('/api', apiRoutes);

// serve up react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist'));
});

module.exports = router;
