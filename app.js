import express from 'express';
import { createServer } from 'http';
import 'dotenv/config'

import routes from './routes/index.js';

const app = express();

const { PORT }  = process.env;

app.use(express.json());
app.use(routes);

const server = createServer(app);

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});