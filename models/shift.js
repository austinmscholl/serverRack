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
    start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end: {
      type: DataTypes.DATE,
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


// module.exports = (sequelize, DataTypes) => {
//   const Assignment = sequelize.define("assignment", {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     instructions: {
//       type: DataTypes.STRING(525000),
//       allowNull: false
//     },
//     user: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     }
//   });
//   return Assignment;
// };
