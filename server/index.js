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
const guardianRoutes = require('./routes/guardian-routes');
const userGuardianRoutes = require('./routes/userGuardian-routes');
const roleRoutes = require('./routes/role-routes');
const institutionRoutes = require('./routes/institution-routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes.routes);
app.use('/api', userInfoRoute.routes);
app.use('/api', classRoutes.routes);
app.use('/api', cityRoutes.routes);
app.use('/api', genderRoutes.routes);
app.use('/api', guardianRoutes.routes);
app.use('/api', userGuardianRoutes.routes);
app.use('/api', roleRoutes.routes);
app.use('/api', institutionRoutes.routes);




app.listen(config.port,() => console.log('App is listening on url http://localhost:' + config.port));