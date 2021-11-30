exports.autenticacao = function autenticacao(){
    return function(req,res,next){
        if(req.isAuthenticated()){
          return next();
        }
        req.flash("msg", "Você tem que esta logado para acessar esse link!");
        res.redirect("/admin");
    };
};