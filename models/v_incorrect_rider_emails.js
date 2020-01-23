/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('v_incorrect_rider_emails', {
		'email': {
			type: DataTypes.STRING(255),
			allowNull: false,
			comment: "null"
		},
		'number_of_incorrect_email_ids': {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			comment: "null"
		}
	}, {
		tableName: 'v_incorrect_rider_emails'
	});
};
