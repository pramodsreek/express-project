/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RiderPreferences', {
		'riderId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			comment: "null",
			references: {
				model: 'Riders',
				key: 'riderId'
			}
		},
		'tollRoadPreferred': {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			comment: "null"
		},
		'shortDurationPreferred': {
			type: DataTypes.INTEGER(1),
			allowNull: false,
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
		tableName: 'RiderPreferences'
	});
};
