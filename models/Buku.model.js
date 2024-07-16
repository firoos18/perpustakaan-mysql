const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../helpers/init_mysql");

class Buku extends Model {}

Buku.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    judul: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pengarang: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sinopsis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ["tersedia", "dipinjam"],
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB("long"),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Buku",
    tableName: "buku",
    timestamps: false,
    getterMethods: {
      imageUrl() {
        return `/api/buku/${this.id}/image`;
      },
    },
    scopes: {
      withStatus: {
        attributes: [
          "id",
          "judul",
          "pengarang",
          "sinopsis",
          "status",
          "imagePath",
        ],
      },
    },
  }
);

module.exports = Buku;
