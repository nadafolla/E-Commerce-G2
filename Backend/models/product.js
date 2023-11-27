const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('your_database_name', 'your_database_user', 'your_database_password', {
  host: 'localhost',
  dialect: 'mysql',
});

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  image: {
    type: DataTypes.JSON,
    allowNull: false,
  },
}, {
  timestamps: true,
});

// Sync the model with the database
sequelize.sync()
  .then(() => {
    console.log('Database and table synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

module.exports = Product;