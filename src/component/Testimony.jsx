import TestimonyCard from "./TestimonyCard.jsx";
import UserPhoto from "../assets/user.jpg"

const testimonies = [
    {
        image: UserPhoto,
        name: 'John Doe',
        role: 'Software Engineer',
        text: 'Travailler avec Enzo a été une expérience incroyable. Il est très compétent et toujours prêt à aider.'
    },
    {
        image: UserPhoto,
        name: 'Jane Smith',
        role: 'Product Manager',
        text: 'Enzo est un professionnel dévoué qui apporte une grande valeur ajoutée à chaque projet.'
    },
    {
        image: UserPhoto,
        name: 'Jane Smith',
        role: 'Product Manager',
        text: 'Enzo est un professionnel dévoué qui apporte une grande valeur ajoutée à chaque projet.'
    },
    {
        image: UserPhoto,
        name: 'Jane Smith',
        role: 'Product Manager',
        text: 'Enzo est un professionnel dévoué qui apporte une grande valeur ajoutée à chaque projet.'
    },
    {
        image: UserPhoto,
        name: 'Jane Smith',
        role: 'Product Manager',
        text: 'Enzo est un professionnel dévoué qui apporte une grande valeur ajoutée à chaque projet.'
    },
    {
        image: UserPhoto,
        name: 'Jane Smith',
        role: 'Product Manager',
        text: 'Enzo est un professionnel dévoué qui apporte une grande valeur ajoutée à chaque projet.'
    }

    // Ajoute d'autres témoignages ici
];

export default function Testimony() {
    return (
        <>
            <section className="bg-gray-100 py-16" id="testimonials">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-neutral-800 mb-8">Témoignages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonies.map((testimony, index) => (
                            <TestimonyCard key={index} testimony={testimony}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};