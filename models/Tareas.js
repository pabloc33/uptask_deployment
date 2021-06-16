const Sequelise = require("sequelize");
const db = require("../config/db");
const Proyectos = require("./Proyectos");

const Tareas = db.define("tareas", {
  id: {
    type: Sequelise.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  tarea: Sequelise.STRING(100),
  estado: Sequelise.INTEGER(1),
});
Tareas.belongsTo(Proyectos);

module.exports = Tareas;
