const STORAGE_KEY = 'afi_formations';

// Default formations to seed the database if empty
const defaultFormations = [
    {
        id: '1',
        title: 'Marketing Digital',
        shortDescription: 'Maîtrisez la publicité Meta, Google Ads, et le community management.',
        longDescription: 'Ce bootcamp intensif vous prépare à devenir un expert du marketing digital. Vous apprendrez à créer et gérer des campagnes Meta et Google Ads rentables, à définir une stratégie de contenu impactante et à maîtriser l\'analyse de données avec Google Analytics. La formation se termine par un projet réel sur lequel vous devrez auditer et optimiser la présence en ligne d\'une vraie entreprise.',
        level: 'Débutant',
        duration: '8 Semaines',
        icon: 'target'
    },
    {
        id: '2',
        title: 'Design Graphique',
        shortDescription: 'Créez des visuels pro avec Canva, Photoshop et Illustrator.',
        longDescription: 'Devenez créatif et indépendant. Ce parcours vous emmènera des bases de la composition visuelle et de la typographie jusqu\'à la maîtrise des outils phares de l\'industrie : Adobe Photoshop et Illustrator (ainsi que Canva pour la rapidité). Vous ressortirez de cette formation avec un portfolio complet comprenant logos, affiches promotionnelles et maquettes UI de base.',
        level: 'Débutant',
        duration: '6 Semaines',
        icon: 'pen-tool'
    },
    {
        id: '3',
        title: 'Développement Web',
        shortDescription: 'Construisez des sites et applications web modernes de A à Z.',
        longDescription: 'Démarrez votre carrière de développeur! Vous apprendrez à coder avec HTML5, CSS3, et JavaScript moderne. Nous aborderons ensuite les fondamentaux du back-end et les bases de données pour que vous soyez capable de déployer une application web fonctionnelle. Le programme inclut les bonnes pratiques de versioning avec Git/GitHub et le déploiement sur des serveurs.',
        level: 'Intermédiaire',
        duration: '12 Semaines',
        icon: 'code'
    },
    {
        id: '4',
        title: 'Intelligence Artificielle',
        shortDescription: 'Utilisez l\'IA pour automatiser, créer et vous démarquer.',
        longDescription: 'Apprenez à tirer profit de l\'IA générative dans votre quotidien professionnel. Au cours de ces semaines, vous découvrirez comment rédiger des prompts avancés (Prompt Engineering) sur ChatGPT, Midjourney, et d\'autres outils IA. L\'objectif est de vous rendre 10x plus productif dans vos tâches de rédaction, de création visuelle ou d\'analyse de données.',
        level: 'Débutant',
        duration: '6 Semaines',
        icon: 'cpu'
    }
];

class FormationsManager {
    static init() {
        if (!localStorage.getItem(STORAGE_KEY)) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultFormations));
        }
    }

    static getAll() {
        this.init();
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    }

    static getById(id) {
        const formations = this.getAll();
        return formations.find(f => f.id === id);
    }

    static generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    static create(formation) {
        const formations = this.getAll();
        const newFormation = {
            ...formation,
            id: this.generateId()
        };
        formations.push(newFormation);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formations));
        return newFormation;
    }

    static update(id, updatedData) {
        const formations = this.getAll();
        const index = formations.findIndex(f => f.id === id);
        if (index !== -1) {
            formations[index] = { ...formations[index], ...updatedData };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(formations));
            return formations[index];
        }
        return null;
    }

    static delete(id) {
        let formations = this.getAll();
        formations = formations.filter(f => f.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formations));
    }
}

// Initialise upon load
FormationsManager.init();
