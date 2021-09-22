const User = require('../Models/users');

exports.getLogin = (req, res) => {
    const { username, password } = req.body;
    User.find({ email: username, password: password }).then(
        response => {
            if (response.length > 0) {
                res.status(200).json({ message: "Logged in  Succesfully",isAuthenticateduser:true, user: response })
            }
            else {
                res.status(200).json({ message: "Log in  Unsuccess",isAuthenticateduser:false, user: response })
            }
        }
    ).catch(
        err => {
            res.status(500).json({ message: "Error", error: err })
        }
    )
}

exports.createLogin = (req, res) => {
    const { username, password, firstname, lastname } = req.body;
    
    const userinfo =   new User ({email:username, password: password, firstName: firstname, lastName:lastname});
    userinfo.save()
        .then(response => {
            res.status(200).json({ message: "User creates successfully", items: response })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}