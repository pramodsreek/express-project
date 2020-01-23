/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('v_app_partners_with_max_revenue_sharing', {
		'isGlobalAppPartner': {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			comment: "null"
		},
		'NumberOfPartners': {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			comment: "null"
		},
		'ListOfParners': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'PartnerType': {
			type: DataTypes.STRING(18),
			allowNull: false,
			defaultValue: '',
			comment: "null"
		}
	}, {
		tableName: 'v_app_partners_with_max_revenue_sharing'
	});
};
