import Timeline from './Timeline';

const ExperienceSection = () => {
    const experienceItems = [
        {
            title: "Ingénieur étude et développement 1",
            subtitle: "SMILE",
            date: "Septembre 2025 - Aujourd'hui",
            description: "Développement de nouvelles fonctionnalités sur un projet client en production et correction d'anomalies. Approche évolutive pour répondre aux besoins changeants."
        },
        {
            title: "Stagiaire développeur PHP",
            subtitle: "SMILE - Stage",
            date: "Février 2025 - Août 2025",
            description: "Apprentissage de Drupal et participation dans un projet client"
        },
        {
            title: "Développeur web",
            subtitle: "MELEXPO - Alternance",
            date: "Octobre 2022 - Août 2023",
            description: "Développement d'un site web 'Terre Equestre', un portail pour le domaine équestres."
        }
        // {
        //     title: "",
        //     subtitle: "",
        //     date: "",
        //     description: ""
        // }
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-neutral-800 mb-8">Mon Expérience Professionnelle</h2>
                <Timeline items={experienceItems} className="max-w-2xl mx-auto" />
            </div>
        </section>
    );
};

export default ExperienceSection;