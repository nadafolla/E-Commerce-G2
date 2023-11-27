const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('your_database_name', 'your_database_user', 'your_database_password', {
  host: 'localhost',
  dialect: 'mysql',
});

const Order = sequelize.define('Order', {
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subtotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  shipping: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  delivery_status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  },
  payment_status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

const Product = sequelize.define('Product', {
  productId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

Order.hasMany(Product);
Product.belongsTo(Order);

// Sync the models with the database
sequelize.sync()
  .then(() => {
    console.log('Database and tables synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

module.exports = {
  Order,
  Product,
};
