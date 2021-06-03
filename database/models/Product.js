module.exports= (sequelize, dataTypes)=>{
    let alias= 'Product';

    let cols={
        id:{
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        image:{
            type: dataTypes.STRING
        },
        title:{
            type: dataTypes.STRING
        },
        artistName:{
            type: dataTypes.STRING
        },
        userId:{
            foreignKey: true,
            type: dataTypes.INTEGER
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        },
    };

    let config={
        table: 'products',
        timeStamps: false
    };

    const Product= sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.User,{
            as: 'user',
            foreignKey: 'userId'

    }),
        Product.hasMany(models.Comentario,{
            as: 'comentarios',
            foreignKey: 'productsId'
})
        }
    return Product;
}