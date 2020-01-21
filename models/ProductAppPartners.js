/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ProductAppPartners', {
		'productId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			comment: "null",
			references: {
				model: 'Products',
				key: 'productId'
			}
		},
		'appPartnerId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			comment: "null",
			references: {
				model: 'AppPartners',
				key: 'appPartnerId'
			}
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
		tableName: 'ProductAppPartners'
	});
};
