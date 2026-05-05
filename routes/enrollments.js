const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');

router.get('/', async (req, res) => {
    try {
        const enrollments = await Enrollment.find().sort({ createdAt: -1 });
        res.json(enrollments);
    } catch (err) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

router.post('/', async (req, res) => {
    try {
        const enrollment = new Enrollment(req.body);
        await enrollment.save();
        res.status(201).json(enrollment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/:id/status', async (req, res) => {
    try {
        const enrollment = await Enrollment.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true, runValidators: true }
        );
        if (!enrollment) return res.status(404).json({ error: 'Inscription introuvable' });
        res.json(enrollment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
