'use strict';
module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define('Brand', {
    brand_title: DataTypes.STRING
  }, {});
  Brand.associate = function(models) {
    // associations can be defined here
  };
  return Brand;
};