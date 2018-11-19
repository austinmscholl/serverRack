module.exports = (sequelize, DataTypes) => {
  const Submission = sequelize.define("submission", {
    nurseId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hospitalId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shiftId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(524000),
      allowNull: false
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Submission;
};