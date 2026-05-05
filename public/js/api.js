const API = '/api';

class FormationsManager {
    static async getAll() {
        const res = await fetch(`${API}/formations`);
        if (!res.ok) throw new Error('Erreur chargement formations');
        return res.json();
    }

    static async getById(id) {
        const res = await fetch(`${API}/formations/${id}`);
        if (res.status === 404) return null;
        if (!res.ok) throw new Error('Erreur chargement formation');
        return res.json();
    }

    static async create(data) {
        const res = await fetch(`${API}/formations`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.error || 'Erreur création');
        }
        return res.json();
    }

    static async update(id, data) {
        const res = await fetch(`${API}/formations/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.error || 'Erreur modification');
        }
        return res.json();
    }

    static async delete(id) {
        const res = await fetch(`${API}/formations/${id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error('Erreur suppression');
    }
}

class EnrollmentsManager {
    static async getAll() {
        const res = await fetch(`${API}/enrollments`);
        if (!res.ok) throw new Error('Erreur chargement inscriptions');
        return res.json();
    }

    static async create(data) {
        const res = await fetch(`${API}/enrollments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error('Erreur inscription');
        return res.json();
    }

    static async updateStatus(id, status) {
        const res = await fetch(`${API}/enrollments/${id}/status`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        });
        if (!res.ok) throw new Error('Erreur mise à jour statut');
        return res.json();
    }
}
