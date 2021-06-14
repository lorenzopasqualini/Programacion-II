module.exports= (sequelize, dataTypes)=>{
    let alias= 'User';

    let cols={
        id:{
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        userName:{
            type: dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        }
    };

    let config={
        table: 'user',
        timestamps: true
    };

    const User= sequelize.define(alias, cols, config);

    User.associate = (models)=>{
        User.hasMany(models.Product,{
            as: 'products',
            foreignKey: 'userId'
        }),
        User.hasMany(models.Comentario,{
            as: 'comentario',
            foreignKey:'userId'
        })
    }
    return User;
}