const express = require('express');
const router = express.Router();
const Formation = require('../models/Formation');

router.get('/', async (req, res) => {
    try {
        const formations = await Formation.find().sort({ createdAt: 1 });
        res.json(formations);
    } catch (err) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const formation = await Formation.findById(req.params.id);
        if (!formation) return res.status(404).json({ error: 'Formation introuvable' });
        res.json(formation);
    } catch (err) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

router.post('/', async (req, res) => {
    try {
        const formation = new Formation(req.body);
        await formation.save();
        res.status(201).json(formation);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const formation = await Formation.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!formation) return res.status(404).json({ error: 'Formation introuvable' });
        res.json(formation);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const formation = await Formation.findByIdAndDelete(req.params.id);
        if (!formation) return res.status(404).json({ error: 'Formation introuvable' });
        res.json({ message: 'Formation supprimée' });
    } catch (err) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

module.exports = router;
