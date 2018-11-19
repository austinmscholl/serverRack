let sequelize = require('./db')
let UserModel = sequelize.import('./models/user')
let ShiftModel = sequelize.import('./models/shift')
let HospitalModel = sequelize.import('./models/hospital')
let HospitalShift = sequelize.import('./models/hospitalshift')
// let StockModel = sequelize.import('./models/stock')

// User hasOne Hospital
// adds attribute 'userId' to the Hospital model
UserModel.hasOne(HospitalModel)

// Hospital belongsTo User 
// UserId is added onto Hospital model
HospitalModel.belongsTo(UserModel)

// creates a new model called HospitalShift, aliased as: 'shifts'
// defining "through" is required
// allows Hospital to have many Shifts as 'shifts' through HospitalShift model(table)
HospitalModel.belongsToMany(ShiftModel, {as: 'shifts', through: HospitalShift})

// Stock belongsTo Cart
// CartId is added onto Stock model
// StockModel.belongsTo(CartItem)


// sequelize.sync().then(console.log('Database and tables created'))