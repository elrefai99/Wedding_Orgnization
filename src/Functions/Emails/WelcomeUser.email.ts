import sgMail from '@sendgrid/mail'

const WelCome_New_User = (email: string, username: string) => {
    const API_Email = process.env.Send_Email_Api_Key as string
                sgMail.setApiKey(API_Email)
                
                const message = {
                    to: `${email}`,
                    from: "wedding.cs74@gmail.com",
                    subject: 'Hello from Wedding.cs74',
                    html: `<strong>Welocme to the app, ${username}. Let me know how you get along with the app.</strong>`
                }

                sgMail.send(message)
                    .then(() => {
                        console.log("Email Send ...")
                    }).catch(err => console.log(err));
}

export default WelCome_New_User;