import { Sequelize } from "sequelize";

const sequelize = new Sequelize("fruver", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

export {
    sequelize
}