'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const userRoutes = require('./routes/user-routes');
const userInfoRoute = require('./routes/userInfo-routes');
const classRoutes = require('./routes/class-routes');
const cityRoutes = require('./routes/city-routes');
const genderRoutes = require('./routes/gender-routes');


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes.routes);
app.use('/api', userInfoRoute.routes);
app.use('/api', classRoutes.routes);
app.use('/api', cityRoutes.routes);
app.use('/api', genderRoutes.routes);




app.listen(config.port,() => console.log('App is listening on url http://localhost:' + config.port));