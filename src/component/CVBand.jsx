import {FaDownload} from "react-icons/fa";
import CV_File from "../assets/CV_Enzo_VIGUIER.pdf";
import ProfilePic from "../assets/photo.jpg";

export default function CvBand() {
    return (
        <div className="w-full bg-pattern">
            <div className="container mx-auto flex flex-col items-center py-16">

                <div className="flex flex-col items-center md:flex-row md:items-center sm:pb-10 md:pb-4 ">
                    <img
                        src={ProfilePic}
                        alt="Enzo Viguier"
                        className="w-50 h-50 rounded-full object-cover mb-6 md:mb-0 md:mr-8"
                    />

                    <p className="text-white text-center md:text-left">
                        Je m&apos;appelle Enzo Viguier, développeur web passionné et curieux, en constante quête
                        d&apos;amélioration. J&apos;ai débuté en programmation dès le lycée en autodidacte, puis
                        j&apos;ai poursuivi
                        des études en informatique pour élargir mes compétences.<br/><br/>
                        Au cours de mon parcours, j&apos;ai acquis des compétences en développement web et en
                        programmation,
                        notamment en créant des applications et des jeux simples. Ces projets m&apos;ont permis de
                        développer
                        une approche concrète et rigoureuse.<br/><br/>
                        Aujourd&apos;hui, je continue à me perfectionner, avec l&apos;ambition d&apos;apporter des
                        solutions innovantes
                        dans le domaine du développement web et des technologies numériques. Mon parcours est détaillé
                        dans mon CV ci-dessous.
                    </p>

                </div>

                <h4 className="text-4xl text-white font-bold">Téléchargez mon CV</h4>
                <a href={CV_File} download="CV_Enzo_VIGUIER"
                   className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-5 rounded mt-8 inline-flex items-center">Télécharger<FaDownload
                    className="ml-2"></FaDownload></a>
            </div>
        </div>
    );
};