import express, { json } from 'express';
import cors from 'cors';
import { Sequelize, DataTypes } from 'sequelize';

const app = express();
app.use(json());
app.use(cors());

// Konfiguracja MySQL (Wpisz swoje hasło z poprzednich zadań!)
const sequelize = new Sequelize('amw_db', 'root', 'macbook', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

// Model Wydarzenia
const Wydarzenie = sequelize.define('Wydarzenie', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tytul: DataTypes.STRING,
    data: DataTypes.STRING,
    opis: DataTypes.TEXT
}, { timestamps: false, tableName: 'wydarzenia' });

// Trasy RESTful CRUD
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

// Start i synchronizacja bazy (automatycznie stworzy tabelę)
app.listen(3000, async () => {
    await sequelize.sync(); 
    console.log("SEAN Backend (MySQL) działa na porcie 3000");
});