/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('v_preference_anomaly', {
		'TollRoad': {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			comment: "null"
		},
		'ShortDuration': {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			comment: "null"
		},
		'Preference': {
			type: DataTypes.STRING(13),
			allowNull: false,
			defaultValue: '',
			comment: "null"
		}
	}, {
		tableName: 'v_preference_anomaly'
	});
};
