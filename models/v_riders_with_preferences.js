/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('v_riders_with_preferences', {
		'riderId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '0',
			comment: "null"
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
		'tollRoadPreferred': {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			comment: "null"
		},
		'shortDurationPreferred': {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'v_riders_with_preferences'
	});
};
