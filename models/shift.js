module.exports = (sequelize, DataTypes) => {
  const Shift = sequelize.define("shift", {
    hospitalId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hospitalName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    pay: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pickedUp: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    nurse: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Shift;
};
