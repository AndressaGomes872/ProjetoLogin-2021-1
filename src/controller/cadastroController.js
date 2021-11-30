const Cadastro = require("../model/Cadastro");
const { Op } = require("sequelize");


async function abreadd(req, res){
   res.render("cadastro/add.ejs",{});

}

async function add(req, res){
   const {nome, sobrenome, endereco, nascimento, email, senha} = req.body;

    if(req.file != undefined ){
        var foto = req.file.filename;
    }

   await Cadastro.create({nome, sobrenome, endereco, nascimento, email, senha, foto}).then((cadastro) => {
    req.flash(  
        "msg",
        " O cadastro "  + cadastro.nome +  " foi adicionado com sucesso! ");
    
   });
   res.redirect("/admin/cadastro");

}

async function list(req, res){
    const cadastros = await Cadastro.findAll();
        res.render("cadastro/list.ejs",{Cadastros: cadastros, msg: req.flash("msg")});  

}

async function  filtro(req, res){
     const pesquisar = req.body.pesquisar;
     const cadastros = await Cadastro.findAll({
         where: { nome: {
            [Op.iLike]: "%" +pesquisar+ "%"
         }},
     });
     res.render("cadastro/list.ejs",{Cadastros: cadastros, msg: req.flash("msg")});
}
   

async function abreedit(req, res){
    const cadastro = await Cadastro.findByPk(req.params.id);
    res.render("cadastro/edt.ejs",{ cadastro: cadastro });
}

async function edit(req, res){
    const cadastro = await Cadastro.findByPk(req.params.id);
     
    
    cadastro.nome = req.body.nome;
    cadastro.sobrenome = req.body.sobrenome;
    cadastro.endereco = req.body.endereco;
    cadastro.nascimento = req.body.nascimento;
    cadastro.email = req.body.email;
    cadastro.senha = req.body.senha;

    if(req.file != undefined){
        cadastro.foto = req.file.filename;
    }

    cadastro.save().then((cadastro) => {
        req.flash("msg", "O cadastro " +cadastro.nome+ "foi alterado com sucesso!");
        res.redirect("/admin/cadastro");
    });
}

async function del(req, res){
    const deletar  = req.params.id;
    Cadastro.destroy({ where: {id: deletar }}).then(() => {
        req.flash("msg", " O cadastro foi deletado com sucesso!");
        res.redirect("/admin/cadastro");
    });
}

module.exports = {abreadd, add, list, filtro, abreedit, edit, del};