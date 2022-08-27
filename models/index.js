// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMay(Tag, {
  through: ProductTag,
  as: 'tag_id',
  foreignKey: 'tag_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMay(Product, {
  through: ProductTag,
  as: 'product_id',
  foreignKey: 'product_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
