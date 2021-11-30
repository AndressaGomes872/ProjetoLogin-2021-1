var passport = require("passport")
, localStrategy = require("passport-local").Strategy;
const Cadastro = require("../model/Cadastro");

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    Cadastro.findByPk(id).then(function(user, err){
       
            done(err, user);
        
    });
});


passport.use(new localStrategy({
    usernameField: "email",
    passwordField: "senha",
    passReqToCallback: true
},
    function(req, username, password, done){
      Cadastro.findOne({where: {email: username }}).then(function(user, err){
          if(err){
              return done(err);
          }
          if(!user){
              return done(null, false, req.flash("msg", "Cadastro não existe! "));
          }
          if(user.senha != password){
            return done(null, false, req.flash("msg", "Senha incorreta! "));
          }
          return done(null, user);
      });


    }
));

module.exports = passport;