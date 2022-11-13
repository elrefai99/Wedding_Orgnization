import sgMail from '@sendgrid/mail'

const Remove_New_User = (email: string, username: string) => {
    const API_Email = process.env.Send_Email_Api_Key as string
    sgMail.setApiKey(API_Email)

    const message = {
        to: `${email}`,
        from: process.env.Admin_Email as string,
        subject: 'Hello from Wedding.cs74',
        html: `
                            <strong>
                                ${username} See u next time.
                            </strong>
                        `,
    }

    sgMail
        .send(message)
        .then(() => {
            console.log('Email Send ...')
        })
        .catch((err) => console.log(err))
}

export default Remove_New_User
