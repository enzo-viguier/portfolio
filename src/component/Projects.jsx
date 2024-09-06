import EmptyImage from "../assets/empty.png";
import TodoImage from "../assets/todolist.png";
import CelluloseImage from "../assets/cellulose.png";
import ProjectCard from "./ProjectCard.jsx";

// const projects = [
//     {
//         title: "Online 'Guess Who?' game",
//         description: "A web implementation of the famous 'Guess Who?' game, including both multiplayer mode and AI mode. Also includes different game boards, and a board creation tool.",
//         technologies: ["JavaScript", "Express", "Socket.IO"],
//         imageUrl: Image,
//         moreInfoLink: "#",
//         repositoryLink: "#"
//     },
//     {
//         title: "Online 'Guess Who?' game",
//         description: "A web implementation of the famous 'Guess Who?' game, including both multiplayer mode and AI mode. Also includes different game boards, and a board creation tool.",
//         technologies: ["JavaScript", "Express", "Socket.IO"],
//         imageUrl: Image,
//         moreInfoLink: "#",
//         repositoryLink: "#"
//     },
//     {
//         title: "Online 'Guess Who?' game",
//         description: "A web implementation of the famous 'Guess Who?' game, including both multiplayer mode and AI mode. Also includes different game boards, and a board creation tool.",
//         technologies: ["JavaScript", "Express", "Socket.IO"],
//         imageUrl: Image,
//         moreInfoLink: "#",
//         repositoryLink: "#"
//     },
//     {
//         title: "Online 'Guess Who?' game",
//         description: "A web implementation of the famous 'Guess Who?' game, including both multiplayer mode and AI mode. Also includes different game boards, and a board creation tool.",
//         technologies: ["JavaScript", "Express", "Socket.IO"],
//         imageUrl: Image,
//         moreInfoLink: "#",
//         repositoryLink: "#"
//     },
//     {
//         title: "Online 'Guess Who?' game",
//         description: "A web implementation of the famous 'Guess Who?' game, including both multiplayer mode and AI mode. Also includes different game boards, and a board creation tool.",
//         technologies: ["JavaScript", "Express", "Socket.IO"],
//         imageUrl: Image,
//         moreInfoLink: "#",
//         repositoryLink: "#"
//     },
//     {
//         title: "Online 'Guess Who?' game",
//         description: "A web implementation of the famous 'Guess Who?' game, including both multiplayer mode and AI mode. Also includes different game boards, and a board creation tool.",
//         technologies: ["JavaScript", "Express", "Socket.IO"],
//         imageUrl: Image,
//         moreInfoLink: "#",
//         repositoryLink: "#"
//     },
//
//     // Ajoute d'autres projets ici
// ];

const projects = [
    {
        title: "Nest",
        description: "Application web conçue pour la recherche et la réservation d'hébergements. Inspirée par les fonctionnalités de la plateformes AirBnB.",
        technologies: ["Angular", "Express", "NodeJs", "MongoDB", "Tailwind"],
        imageUrl: EmptyImage,
        moreInfoLink: "#",
        repositoryLink: "https://github.com/enzo-viguier/Nest"
    },
    {
        title: "Todo List",
        description: "Application web de gestion de tâches. Permet de créer et supprimer des tâches. Ce projet avait pour but de me familiariser avec React. Je l'ai transformé en application avec Capacitor pour le rendre disponible sur mobile.",
        technologies: ["React", "Tailwind", "Capacitor"],
        imageUrl: TodoImage,
        moreInfoLink: "#",
        repositoryLink: "https://github.com/enzo-viguier/To-do-List-with-React"
    },
    {
        title: "La Boutique Française",
        description: "Site web de ecommerce pour une boutique de vêtements. Ce projet a été réalisé pour apprendre à utilisé le framework Symfony.",
        technologies: ["Symfony", "Bootstrap", "Stripe", "MailJet"],
        imageUrl: EmptyImage,
        moreInfoLink: "#",
        repositoryLink: "https://github.com/enzo-viguier/laboutiquefrancaise"
    },
    {
        title: "Cellulose 21",
        description: "Ce projet simule comment des bactéries décomposent la cellulose. Il aide les ingénieurs à tester des procédés en utilisant un programme, ce qui permet de mieux comprendre cette molécule importante dans plusieurs domaines industriels.",
        technologies: ["Python", "PyQt", "Matplotlib", "Numpy"],
        imageUrl: CelluloseImage,
        moreInfoLink: "#",
        repositoryLink: "https://github.com/enzo-viguier/Cellulose-21"
    },
    {
        title: "Portfolio",
        description: "Site web personnel pour présenter mes compétences, mes projets et mon parcours professionnel.",
        technologies: ["React", "Tailwind"],
        imageUrl: EmptyImage,
        moreInfoLink: "#",
        repositoryLink: "https://github.com/enzo-viguier/portfolio"
    }


    // Ajoute d'autres projets ici
];

export default function Projects() {
    return (
        <div className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-neutral-800 mb-8">Mes Projets</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            imageUrl={project.imageUrl}
                            moreInfoLink={project.moreInfoLink}
                            repositoryLink={project.repositoryLink}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};