const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(
    sendgridTransport({
        auth: {
            api_key: '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'
        }
    })

)

exports.sendmail = (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message

    // const { name, email, subject, message } = req.body
    console.log('the body is ', name, email, subject, message)

    transporter.sendMail({
            to: 'dennismoha2@gmail.com',
            from: email,
            subject: subject,
            html: `<pre>${message}</p>`

        }).then(() => {
            res.redirect('/')
        })
        .catch(error => {
            throw error
        })

    //validate data

}