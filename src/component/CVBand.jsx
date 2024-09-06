import {FaDownload} from "react-icons/fa";

export default function CvBand() {
    return (
        <div className="w-full bg-pattern">
            <div className="container mx-auto flex flex-col items-center py-16">
                <h2 className="text-4xl text-white font-bold">Téléchargez mon CV</h2>
                <a href="CV_Enzo_VIGUIER.pdf" download="CV_Enzo_VIGUIER.pdf"
                   className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-5 rounded mt-8 inline-flex items-center">Télécharger<FaDownload className="ml-2"></FaDownload></a>
            </div>
        </div>
    );
};