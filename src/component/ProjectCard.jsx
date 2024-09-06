import {FaExternalLinkAlt} from "react-icons/fa";

export default function ProjectCard({ title, description, technologies, imageUrl, moreInfoLink, repositoryLink }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={imageUrl} alt={title}/>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="mb-4">
                    {technologies.map((tech, index) => (
                        <span key={index}
                              className="text-sm font-medium text-sky-600 bg-gray-200 rounded-full px-3 py-1 mr-2">
              {tech}
            </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <a href={moreInfoLink} className="bg-sky-600 hover:bg-sky-700 p-2 rounded text-white font-semibold">More info</a>
                    <a href={repositoryLink} target="_blank" className="text-sky-600 font-semibold inline-flex items-center">Repository<FaExternalLinkAlt className="ml-1"/></a>
                </div>
            </div>
        </div>
    );
};