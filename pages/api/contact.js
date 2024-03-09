import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SEND_GRID_KEY);

export default async function handler(req, res) {
    if(req.method !== 'POST') {
        res.status(405).json({message: 'INVALID_METHOD'});
        return;
    }

    const { name, email, subject, message } = req.body;

    if(!name || !email || !subject || !message) {
        res.status(400).json({message: 'INVALID_PARAMETER'});
        return;
    }

    const pattern =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!pattern.test(email)) {
            res.status(400).send({
                message: "EMAIL_SYNTAX_INCORRECT",
            });
            return;
        }

         const contenu = message
		 .replace(/\n/g, "<br>")
		 .replace(/\r/g, "<br>")
		 .replace(/\t/g, "<br>")
		 .replace(/<(?!br\s*\/?)[^>]+>/g, "");      

        
	const sendGridMail = {
		to: process.env.EMAIL_CLIENT,
		from: process.env.EMAIL_MASTER,
		templateId: "d-4b09f8cd687547538045df26ea558e04",
		dynamic_template_data: {
			name: name,
			email: email,
			message: contenu,
			subject: subject
		},		
	};
	console.log(sendGridMail)
   
		try {
			await sgMail.send(sendGridMail);
			
			res.status(200).json({
				message: "EMAIL_SENDED_SUCCESSFULLY",
			});
		} catch {
			res.status(500).json({
				message: "ERROR_WITH_SENDGRID",
			});			
		}	
}