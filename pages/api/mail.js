const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SG_API_KEY);

export default async (req, res) => {
	try {
		const body = JSON.parse(req.body);

		const message = `
Ονοματεπώνυμο: ${body.firstName} ${body.lastName}\r\n
Email: ${body.email}\r\n
Τηλέφωνο: ${body.phoneNumber}\r\n
Μήνυμα: ${body.message}\r\n
\r\n
\r\n
This message was sent from the wikodid.com website
	`;

		const data = {
			to: "wikodid.qr@gmail.com",
			from: "contact@wikodid.com",
			subject: "Nέο μήνυμα από wikodid.com",
			text: message,
			html: message.replace(/\r\n/g, "<br />"),
		};

		await mail.send(data);
	} catch (error) {
		console.log("error: ", error);

		res.status(500).json({
			message: "Συνέβη κάποιο σφάλμα... Παρακαλούμε προσπαθήστε πάλι σε λίγο",
		});
	}

	res.status(200).json({ message: "Επιτυχία! Το μήνυμα έχει σταλεί" });
};
