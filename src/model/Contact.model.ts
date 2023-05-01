import { DataTypes, Model, Sequelize, InitOptions } from 'sequelize';

class Contact extends Model{};

const contactModelAttributes = {
    'firstname': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'lastname': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'phone': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'email': {
        type: DataTypes.STRING,
        allowNull: true,
    }
};

const contactModelOptions = {};

export function init(sequelize: Sequelize) {
    Contact.init(
        contactModelAttributes,
        {
            ...contactModelOptions,
            sequelize
        }
    );

    return Contact;
}
