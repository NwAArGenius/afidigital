const mongoose = require('mongoose');

const formationSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
    level: {
        type: String,
        required: true,
        enum: ['Débutant', 'Intermédiaire', 'Avancé']
    },
    duration: { type: String, required: true },
    icon: { type: String, default: 'book' }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

module.exports = mongoose.model('Formation', formationSchema);
