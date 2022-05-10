const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 8002;
const routes = require('./routes/index');
const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
// To enable CORS => (Cross Origin Resource Sharing)
app.use(cors());
// Starting points for the routes
app.use('/api/', routes);

app.listen(port, () => {
console.info(`Server started on port ${port}`);
});
