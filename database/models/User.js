module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: dataTypes.STRING(30)

        },
        email: {
            type: dataTypes.STRING

        },
        password: {
            type: dataTypes.STRING

        },

    };
    let config = {
        table: 'users',
        timestamps: true,
        underscored: false
    };
    const User = sequelize.define(alias, cols, config);
    return User;
}