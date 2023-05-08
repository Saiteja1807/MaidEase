import express from 'express';
import allRoutes from './src/route/LoginRoute.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

const DB = 'mongodb+srv://rushda:maidease@maideasecluster.uuxkdmg.mongodb.net/?retryWrites=true&w=majority';
mongoose.set("strictQuery", false);
mongoose.connect(DB, {
    useNewUrlParser: true
}).then(() =>{
    console.log('connecttion successful');
}).catch((err) => console.log('no connecttion'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

allRoutes(app);

app.get('/', (req, res) =>
    res.send(`Your node and express server is running on port: ${port}`)
);

app.listen(port, () => {
    console.log("restAPI is running on port: " + port);
});