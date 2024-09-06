import Ordinateur from "../assets/ordinateur.jpg"

export default function Hero() {
    return (
        <div className="relative h-screen w-full">
            <img src={Ordinateur} alt="Background Image"
                 className="absolute inset-0 w-full h-full object-cover filter blur-sm"/>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-center text-5xl text-white font-bold">Salut, je suis Enzo VIGUIER</h1>
                <p className="text-center text-3xl text-white mt-4">Développeur Full Stack</p>
            </div>
        </div>
    );
};
