const Formation = require('../models/Formation');

const defaultFormations = [
    {
        title: 'Marketing Digital',
        shortDescription: 'Maîtrisez la publicité Meta, Google Ads, et le community management.',
        longDescription: "Ce bootcamp intensif vous prépare à devenir un expert du marketing digital. Vous apprendrez à créer et gérer des campagnes Meta et Google Ads rentables, à définir une stratégie de contenu impactante et à maîtriser l'analyse de données avec Google Analytics. La formation se termine par un projet réel sur lequel vous devrez auditer et optimiser la présence en ligne d'une vraie entreprise.",
        level: 'Débutant',
        duration: '8 Semaines',
        icon: 'target'
    },
    {
        title: 'Design Graphique',
        shortDescription: 'Créez des visuels pro avec Canva, Photoshop et Illustrator.',
        longDescription: "Devenez créatif et indépendant. Ce parcours vous emmènera des bases de la composition visuelle et de la typographie jusqu'à la maîtrise des outils phares de l'industrie : Adobe Photoshop et Illustrator (ainsi que Canva pour la rapidité). Vous ressortirez de cette formation avec un portfolio complet comprenant logos, affiches promotionnelles et maquettes UI de base.",
        level: 'Débutant',
        duration: '6 Semaines',
        icon: 'pen-tool'
    },
    {
        title: 'Développement Web',
        shortDescription: 'Construisez des sites et applications web modernes de A à Z.',
        longDescription: "Démarrez votre carrière de développeur! Vous apprendrez à coder avec HTML5, CSS3, et JavaScript moderne. Nous aborderons ensuite les fondamentaux du back-end et les bases de données pour que vous soyez capable de déployer une application web fonctionnelle. Le programme inclut les bonnes pratiques de versioning avec Git/GitHub et le déploiement sur des serveurs.",
        level: 'Intermédiaire',
        duration: '12 Semaines',
        icon: 'code'
    },
    {
        title: 'Intelligence Artificielle',
        shortDescription: "Utilisez l'IA pour automatiser, créer et vous démarquer.",
        longDescription: "Apprenez à tirer profit de l'IA générative dans votre quotidien professionnel. Au cours de ces semaines, vous découvrirez comment rédiger des prompts avancés (Prompt Engineering) sur ChatGPT, Midjourney, et d'autres outils IA. L'objectif est de vous rendre 10x plus productif dans vos tâches de rédaction, de création visuelle ou d'analyse de données.",
        level: 'Débutant',
        duration: '6 Semaines',
        icon: 'cpu'
    }
];

async function seedFormations() {
    const count = await Formation.countDocuments();
    if (count === 0) {
        await Formation.insertMany(defaultFormations);
        console.log('✅ Formations par défaut insérées en base');
    }
}

module.exports = seedFormations;
