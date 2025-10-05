export default function TestimonyCard({ testimony }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
                <img
                    src={testimony.image}
                    alt={testimony.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                    <h3 className="text-lg font-semibold text-neutral-800">{testimony.name}</h3>
                    <p className="text-sm text-gray-600">{testimony.role}</p>
                </div>
            </div>
            <p className="text-gray-800">{testimony.text}</p>
        </div>
    );
};