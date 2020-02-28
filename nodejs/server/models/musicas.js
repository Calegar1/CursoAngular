module.exports = (sequelize, DataTypes) => {

    const Musicas = sequelize.define('musicas', {

      id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
      },  
      nome: DataTypes.STRING,      
	    compositor: DataTypes.STRING,
      iframe: DataTypes.STRING,
    });
  
    return Musicas;
  }
