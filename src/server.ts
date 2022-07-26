import express from 'express';
import { router } from './routes';
import swaggerFile from './swagger.json';

const app = express();

const swaggerUi = require('swagger-ui-express');

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => console.log('Server started on port 3333'));