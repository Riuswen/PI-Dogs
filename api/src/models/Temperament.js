const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  sequelize.define('temperament', {
    UUID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

  },
  { timestamps: false });

  // // Relación muchos a muchos con Dogs
  // Temperament.belongsToMany(sequelize.models.Dog, {
  //   through: 'DogTemperament', 
  // });

};
