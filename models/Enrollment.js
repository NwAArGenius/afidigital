const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    fullName: { type: String, required: true, trim: true },
    whatsappNumber: { type: String, required: true, trim: true },
    formation: { type: String, required: true },
    modality: {
        type: String,
        required: true,
        enum: ['En ligne', 'Présentiel']
    },
    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'contacted', 'enrolled', 'cancelled']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);
