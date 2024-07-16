const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const sequelize = new Sequelize(
  "perpustakaan",
  "avnadmin",
  "AVNS_mDUGFvjqea8ekTVKhkD",
  {
    host: "mysql-36fe9ea6-perpustakaan.h.aivencloud.com",
    port: "14179",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    ssl: true,
    dialectOptions: {
      ssl: {
        ca: Buffer.from(process.env.SSL_CERTIFICATE, "base64").toString(
          "ascii"
        ),
      },
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Unable to Connect to the Database", err);
  });

module.exports = sequelize;
