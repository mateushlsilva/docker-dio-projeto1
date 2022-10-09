import { Sequelize } from 'sequelize'


const connection = new Sequelize("usuario", "root", "123", {
    host: '172.17.0.1',
    dialect: 'mysql'
 })

 /*
const connection = new Sequelize("embraer", "root", "1903", {
    host: 'localhost',
    dialect: 'mysql'
 })*/

connection.authenticate()
.then(function(){
    console.log("Conexão com banco de dados realizada com sucesso!");
}).catch(function(){
    console.log("Erro: Conexão com banco de dados");
})

module.exports = connection;