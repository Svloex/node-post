const express = require("express")
const { getContacts } = require("../controllers/contact-controller")
const router = express.Router()
router.get('/contacts', getContacts
    //  (req, res) => {
    //     const title = "Contacts"
    //         // const contacts = [
    //         //     { name: "SVLOEX", link: "http://youtube.com" },
    //         //     { name: "VLO", link: "http://youtube.com" },
    //         //     { name: "LOEX", link: "http://youtube.com" }
    //         // ]
    //     Contact
    //         .find()
    //         .then((contacts) => res.render(createPath("contacts"), { contacts, title }))
    //         .catch(err => {
    //             console.log(err)
    //             res.render(createPath("error"), { title: "Error" })
    //         })
    //         // res.render(createPath("contacts"), { contacts, title })
    // }
)
module.exports = router