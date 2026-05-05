require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const seedFormations = require('./config/seed');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/formations', require('./routes/formations'));
app.use('/api/enrollments', require('./routes/enrollments'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/afidigital')
    .then(async () => {
        console.log('✅ MongoDB connecté');
        await seedFormations();
        app.listen(PORT, () => {
            console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('❌ Erreur connexion MongoDB:', err.message);
        process.exit(1);
    });
