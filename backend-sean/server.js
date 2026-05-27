import express, { json } from 'express';
import cors from 'cors';
import { Sequelize, DataTypes } from 'sequelize';

const app = express();
app.use(json());
app.use(cors());

const sequelize = new Sequelize('amw_db', 'root', 'macbook', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const Wydarzenie = sequelize.define('Wydarzenie', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tytul: DataTypes.STRING,
    data: DataTypes.STRING,
    opis: DataTypes.TEXT
}, { timestamps: false, tableName: 'wydarzenia' });

app.get('/api/wydarzenia', async (req, res) => res.json(await Wydarzenie.findAll()));
app.post('/api/wydarzenia', async (req, res) => res.json(await Wydarzenie.create(req.body)));
app.put('/api/wydarzenia/:id', async (req, res) => {
    await Wydarzenie.update(req.body, { where: { id: req.params.id } });
    res.json({ success: true });
});
app.delete('/api/wydarzenia/:id', async (req, res) => {
    await Wydarzenie.destroy({ where: { id: req.params.id } });
    res.json({ success: true });
});

app.listen(3000, async () => {
    await sequelize.sync(); 
    console.log("SEAN Backend (MySQL) działa na porcie 3000");
});