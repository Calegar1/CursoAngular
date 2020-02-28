
const Sequelize = require('sequelize')
const MusicasModel = require('./models/musicas')
const UsuarioModel = require('./models/usuario')
const ProdutoModel = require('./models/produto')
const VendaModel = require('./models/venda')


const sequelize = new Sequelize('grandeporte', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
      freezeTableName: true,
      timestamps: false
    },

})



const Musicas = MusicasModel(sequelize, Sequelize)
const Usuarios = UsuarioModel(sequelize, Sequelize)
const Produtos = ProdutoModel(sequelize, Sequelize)
const Vendas = VendaModel(sequelize, Sequelize)

module.exports = {
    Musicas, Usuarios, Produtos , Vendas
}
