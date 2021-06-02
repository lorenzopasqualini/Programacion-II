module.exports= (sequelize, dataTypes)=>{
    let alias= 'Comentario';

    let cols={
        id:{
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        userId:{
            foreignKey: true,
            type: dataTypes.INTEGER
        },
        productsId:{
            foreignKey: true,
            type: dataTypes.INTEGER
        },
        texto:{
            type: dataTypes.STRING
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        },
    };

    let config={
        table: 'Comentario',
        timeStamps: false
    };

    const Comentario= sequelize.define(alias, cols, config);

    return Comentario;
}