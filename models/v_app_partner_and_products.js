/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('v_app_partner_and_products', {
		'appPartnerId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			comment: "null"
		},
		'appPartnerName': {
			type: DataTypes.STRING(255),
			allowNull: false,
			comment: "null"
		},
		'productId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			comment: "null"
		},
		'productName': {
			type: DataTypes.STRING(255),
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'v_app_partner_and_products'
	});
};
