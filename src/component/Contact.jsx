import {useState} from "react";
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {FaXTwitter} from "react-icons/fa6";

export default function Contact() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Validation simple
    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'Le prénom est obligatoire';
        if (!formData.lastName) newErrors.lastName = 'Le nom est obligatoire';
        if (!formData.email) newErrors.email = 'L\'email est obligatoire';
        if (formData.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = 'Email non valide';
        }
        if (!formData.subject) newErrors.subject = 'Le sujet est obligatoire';
        if (!formData.message) newErrors.message = 'Le message est obligatoire';
        return newErrors;
    };


    const sendEmail = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "5d9bdda9-7141-4025-8bd1-fbfc51aabee1");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            await sendEmail(e);
            setIsSubmitted(true);
        } else {
            setErrors(validationErrors);
        }
    };


    return (
        <>
            <section id="contact" className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">Contactez-moi</h2>

                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        {/* Informations de contact */}
                        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-10">
                            <h3 className="text-xl font-semibold mb-4">Mes informations de contact</h3>
                            <p className="text-neutral-800 mb-4">Mail : enzoviguier34@gmail.com</p>
                            <p className="text-neutral-800 mb-4">Vous pouvez me contacter via ce formulaire ou sur les
                                réseaux sociaux ci-dessous :</p>

                            {/* Liens des réseaux sociaux */}
                            <div className="flex space-x-4 mb-8">
                                <a href="https://github.com/enzo-viguier" target="_blank" rel="noopener noreferrer"
                                   className="text-sky-600">
                                    <FaGithub size={30}/>
                                </a>
                                <a href="https://www.linkedin.com/in/enzo-viguier-2833b61b7/" target="_blank" rel="noopener noreferrer"
                                   className="text-sky-600">
                                    <FaLinkedin size={30}/>
                                </a>
                                <a href="https://x.com/Enzo_Vigz" target="_blank" rel="noopener noreferrer"
                                   className="text-sky-600">
                                    {/*<FaTwitter size={30}/>*/}
                                    <FaXTwitter size={30}></FaXTwitter>
                                </a>
                            </div>
                        </div>

                        {/* Formulaire de contact */}
                        <div className="lg:w-1/2 w-full">
                            {isSubmitted ? (
                                <p className="text-green-600">Merci pour votre message, je vous répondrai bientôt.</p>
                            ) : (
                                <form onSubmit={handleSubmit} className="bg-gray-300 p-8 rounded-lg shadow-md bg-slate-300">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-neutral-800">Prénom
                                                *</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="prenom"
                                                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                                                value={formData.firstName}
                                                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                            />
                                            {errors.firstName && <p className="text-red-600">{errors.firstName}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-neutral-800">Nom *</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="nom"
                                                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                                                value={formData.lastName}
                                                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                            />
                                            {errors.lastName && <p className="text-red-600">{errors.lastName}</p>}
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-neutral-800">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="mail"
                                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        />
                                        {errors.email && <p className="text-red-600">{errors.email}</p>}
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="phone" className="block text-neutral-800">Téléphone</label>
                                        <input
                                            type="text"
                                            id="phone"
                                            name="telephone"
                                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="subject" className="block text-neutral-800">Sujet *</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="sujet"
                                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                        />
                                        {errors.subject && <p className="text-red-600">{errors.subject}</p>}
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-neutral-800">Message *</label>
                                        <textarea
                                            id="message"
                                            rows="5"
                                            name="message"
                                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                                            value={formData.message}
                                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        ></textarea>
                                        {errors.message && <p className="text-red-600">{errors.message}</p>}
                                    </div>

                                    <button type="submit"
                                            className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition">
                                        Envoyer
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};