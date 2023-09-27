import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import config from 'dotenv'


import routes from './routes/index.js';
const port = 3003;


const app = express();

app.use(cors());
app.use(bodyParser.json());


routes.map((route) => app.use(route.path, route.router));

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
