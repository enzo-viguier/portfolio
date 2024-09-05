import Ordinateur from "../assets/ordinateur.jpg"

export default function Hero() {
    return (
        <div className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center background-image text-left"
             style={{ backgroundImage: `url(${Ordinateur})` }}>
            <div className="bg-neutral-800 bg-opacity-60 p-10 rounded-lg text-center">
                <h1 className="text-5xl font-bold text-sky-600 mb-4">
                    Salut, je suis Enzo VIGUIER
                </h1>
                <p className="text-2xl text-gray-100">
                    Développeur Web Full Stack
                </p>
            </div>
        </div>
    );
};
