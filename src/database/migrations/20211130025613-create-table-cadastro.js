"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable("Cadastro", 
    {
      id:{
         type: Sequelize.INTEGER,
         autoIncrement: true,
         primarykey: true,
         allowNull: false,

      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      sobrenome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
     
      endereco:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      nascimento:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      
      email:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      senha:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      foto:{
        type: Sequelize.STRING,
        
      },
      createdAt:{
        type: Sequelize.DATE,
      },
      updatedAt:{
        type: Sequelize.DATE,
      },
    });
     
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.dropTable("Cadastro");
     
  }
};
