export default function TechnologieCategory({ category, technologies }) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-sky-600 mb-4">{category}</h3>
            <div className="flex flex-wrap">
                {technologies.map((tech, index) => (
                    <div key={index} className="m-2 relative">
                        <img
                            src={tech.logo}
                            alt={tech.name}
                            className="h-12 w-12 object-contain"
                            title={tech.name} // Ceci ajoute un tooltip natif avec le nom de la technologie
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};