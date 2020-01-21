/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Products', {
		'productId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'productName': {
			type: DataTypes.STRING(255),
			allowNull: false,
			comment: "null",
			unique: true
		},
		'capacity': {
			type: DataTypes.INTEGER,
			allowNull: false,
			comment: "null"
		},
		'basePrice': {
			type: DataTypes.DECIMAL,
			allowNull: false,
			comment: "null"
		},
		'minimumPrice': {
			type: DataTypes.DECIMAL,
			allowNull: false,
			comment: "null"
		},
		'costPerMinute': {
			type: DataTypes.DECIMAL,
			allowNull: false,
			comment: "null"
		},
		'costPerDistance': {
			type: DataTypes.DECIMAL,
			allowNull: false,
			comment: "null"
		},
		'serviceFees': {
			type: DataTypes.DECIMAL,
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
		}
	}, {
		tableName: 'Products'
	});
};
