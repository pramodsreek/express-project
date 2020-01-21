/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('AppPartners', {
		'appPartnerId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'appPartnerName': {
			type: DataTypes.STRING(255),
			allowNull: false,
			comment: "null"
		},
		'isGlobalAppPartner': {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			comment: "null"
		},
		'revenueSharing': {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			comment: "null"
		},
		'revenueSharePercentage': {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '0',
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
		tableName: 'AppPartners'
	});
};
