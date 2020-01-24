/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Riders', {
		'riderId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'firstname': {
			type: DataTypes.STRING(255),
			allowNull: false,
			comment: "null"
		},
		'lastname': {
			type: DataTypes.STRING(255),
			allowNull: false,
			comment: "null"
		},
		'email': {
			type: DataTypes.STRING(255),
			allowNull: false,
			comment: "null"
		},
		'mobile': {
			type: DataTypes.STRING(255),
			allowNull: false,
			comment: "null"
		},
		'createdAt': {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			comment: "null"
		},
		'updatedAt': {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			comment: "null"
        },
        'score': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'Riders'
	});
};
