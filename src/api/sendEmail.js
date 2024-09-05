const axios = require('axios');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { formData } = req.body;

        try {
            const response = await axios.post(
                'https://api.mailjet.com/v3.1/send',
                {
                    Messages: [
                        {
                            From: {
                                Email: 'tonemail@example.com',
                                Name: 'Ton Nom',
                            },
                            To: [
                                {
                                    Email: 'destinataire@example.com',
                                    Name: 'Destinataire',
                                },
                            ],
                            TemplateID: parseInt(process.env.MAILJET_TEMPLATE_ID),
                            TemplateLanguage: true,
                            Variables: {
                                nom: formData.lastName,
                                prenom: formData.firstName,
                                email: formData.email,
                                telephone: formData.phone || 'Non fourni',
                                sujet: formData.subject,
                                message: formData.message,
                            },
                        },
                    ],
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Basic ${Buffer.from(
                            `${process.env.MAILJET_API_KEY}:${process.env.MAILJET_SECRET_API_KEY}`
                        ).toString('base64')}`,
                    },
                }
            );
            res.status(200).json({ message: 'Email envoyé avec succès', data: response.data });
        } catch (error) {
            res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email', details: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
