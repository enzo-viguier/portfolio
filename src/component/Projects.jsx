import Image from "../assets/ordinateur.jpg";
import ProjectCard from "./ProjectCard.jsx";

const projects = [
    {
        title: "Online 'Guess Who?' game",
        description: "A web implementation of the famous 'Guess Who?' game, including both multiplayer mode and AI mode. Also includes different game boards, and a board creation tool.",
        technologies: ["JavaScript", "Express", "Socket.IO"],
        imageUrl: Image,
        moreInfoLink: "#",
        repositoryLink: "#"
    },
    {
        title: "Online 'Guess Who?' game",
        description: "A web implementation of the famous 'Guess Who?' game, including both multiplayer mode and AI mode. Also includes different game boards, and a board creation tool.",
        technologies: ["JavaScript", "Express", "Socket.IO"],
        imageUrl: Image,
        moreInfoLink: "#",
        repositoryLink: "#"
    },
    {
        title: "Online 'Guess Who?' game",
        description: "A web implementation of the famous 'Guess Who?' game, including both multiplayer mode and AI mode. Also includes different game boards, and a board creation tool.",
        technologies: ["JavaScript", "Express", "Socket.IO"],
        imageUrl: Image,
        moreInfoLink: "#",
        repositoryLink: "#"
    },
    {
        title: "Online 'Guess Who?' game",
        description: "A web implementation of the famous 'Guess Who?' game, including both multiplayer mode and AI mode. Also includes different game boards, and a board creation tool.",
        technologies: ["JavaScript", "Express", "Socket.IO"],
        imageUrl: Image,
        moreInfoLink: "#",
        repositoryLink: "#"
    },
    {
        title: "Online 'Guess Who?' game",
        description: "A web implementation of the famous 'Guess Who?' game, including both multiplayer mode and AI mode. Also includes different game boards, and a board creation tool.",
        technologies: ["JavaScript", "Express", "Socket.IO"],
        imageUrl: Image,
        moreInfoLink: "#",
        repositoryLink: "#"
    },
    {
        title: "Online 'Guess Who?' game",
        description: "A web implementation of the famous 'Guess Who?' game, including both multiplayer mode and AI mode. Also includes different game boards, and a board creation tool.",
        technologies: ["JavaScript", "Express", "Socket.IO"],
        imageUrl: Image,
        moreInfoLink: "#",
        repositoryLink: "#"
    },

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