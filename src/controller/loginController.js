const passport = require("../config/passport");

async function abrelogin(req, res){
    res.render("index.ejs", { msg: req.flash("msg")});

}

const logar = passport.authenticate("local", {
    successRedirect:"admin/cadastro", 
    failureRedirect:"/admin", 
    failureFlash: true
});


    module.exports = {
    abrelogin,
    logar,
};