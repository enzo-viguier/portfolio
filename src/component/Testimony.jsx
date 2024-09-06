import TestimonyCard from "./TestimonyCard.jsx";
import UserPhoto from "../assets/user.jpg"
import DjManuEventsLogo from "../assets/logo_djmanuevents.png"

// const testimonies = [
//     {
//         image: UserPhoto,
//         name: 'John Doe',
//         role: 'Software Engineer',
//         text: 'Travailler avec Enzo a été une expérience incroyable. Il est très compétent et toujours prêt à aider.'
//     },
//     {
//         image: UserPhoto,
//         name: 'Jane Smith',
//         role: 'Product Manager',
//         text: 'Enzo est un professionnel dévoué qui apporte une grande valeur ajoutée à chaque projet.'
//     },
//     {
//         image: UserPhoto,
//         name: 'Jane Smith',
//         role: 'Product Manager',
//         text: 'Enzo est un professionnel dévoué qui apporte une grande valeur ajoutée à chaque projet.'
//     },
//     {
//         image: UserPhoto,
//         name: 'Jane Smith',
//         role: 'Product Manager',
//         text: 'Enzo est un professionnel dévoué qui apporte une grande valeur ajoutée à chaque projet.'
//     },
//     {
//         image: UserPhoto,
//         name: 'Jane Smith',
//         role: 'Product Manager',
//         text: 'Enzo est un professionnel dévoué qui apporte une grande valeur ajoutée à chaque projet.'
//     },
//     {
//         image: UserPhoto,
//         name: 'Jane Smith',
//         role: 'Product Manager',
//         text: 'Enzo est un professionnel dévoué qui apporte une grande valeur ajoutée à chaque projet.'
//     }
//
//     // Ajoute d'autres témoignages ici
// ];

const testimonies = [
    {
        image: DjManuEventsLogo,
        name: 'DJ Manu Events 34',
        role: 'DeeJay',
        text: 'Enzo m\'a aidé à créer un site web pour mon activité de DeeJay. Il a été très professionnel et a su répondre à mes attentes.'
    },
    {
        image: UserPhoto,
        name: 'Jane Smith',
        role: 'Développeur Web',
        text: 'Pour avoir étudié avec Enzo, je peux dire qu\'il est un développeur web très compétent et passionné par son travail. Il est toujours prêt à aider et à partager ses connaissances.'
    },
    {
        image: UserPhoto,
        name: 'Jane Smith',
        role: 'Développeur Web',
        text: 'Pour avoir étudié avec Enzo, je peux dire qu\'il est un développeur web très compétent et passionné par son travail. Il est toujours prêt à aider et à partager ses connaissances.'
    },


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