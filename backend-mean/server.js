import express, { json } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(json());
app.use(cors());

const MONGO_URI = 'mongodb+srv://macbook:macbook123@cluster0.te7uqpw.mongodb.net/amw_db';

mongoose.connect(MONGO_URI)
    .then(() => console.log('Połączono z MongoDB!'))
    .catch(err => console.error(err));

const wydarzenieSchema = new mongoose.Schema({
    tytul: String,
    data: String,
    opis: String
}, { versionKey: false });

const Wydarzenie = mongoose.model('Wydarzenie', wydarzenieSchema, 'wydarzenia');

app.get('/api/wydarzenia', async (req, res) => res.json(await Wydarzenie.find()));
app.post('/api/wydarzenia', async (req, res) => res.json(await Wydarzenie.create(req.body)));
app.put('/api/wydarzenia/:id', async (req, res) => res.json(await Wydarzenie.findByIdAndUpdate(req.params.id, req.body)));
app.delete('/api/wydarzenia/:id', async (req, res) => res.json(await Wydarzenie.findByIdAndDelete(req.params.id)));

app.listen(3001, () => console.log("MEAN Backend (MongoDB) działa na porcie 3001"));