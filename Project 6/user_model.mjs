import mongoose from 'mongoose';

mongoose.connect(
    'mongodb://127.0.0.1:27017/users_db',
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
});

let UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: false }
});

let User = mongoose.model("user", UserSchema);

/**
 * Create user
 * @param {String} name
 * @param {Number} age 
 * @param {String} email
 * @param {Number} phoneNumber 
 * @returns  
 */

let createUser = async (name, age, email, phoneNumber) => {
    let user = new User({ name: name, age: age, email: email, phoneNumber: phoneNumber });
    return user.save();
}

let RetrieveUser = async (filter, projection, limit) => {
    let query = User.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}

/**
 * @param {String} _id 
 * @param {String} name
 * @param {Number} age 
 * @param {String} email 
 * @param {Number} phoneNumber
 * @returns
 * */

 let UpdateUser = async (_id, name, age, email, phoneNumber) => {
    if (name != undefined) {
        name = await User.findByIdAndUpdate({_id: _id}, {name: name} )}
    if (age != undefined) {
        age = await User.findByIdAndUpdate({_id: _id}, {age: age} )}
    if (email != undefined) {
        email = await User.findByIdAndUpdate({_id: _id}, {email: email} )}
    if (phoneNumber != undefined) {
        phoneNumber = await User.findByIdAndUpdate({_id: _id}, {phoneNumber: phoneNumber} )}

    return 1;

}

let DeleteById = async function (filter) {
    let result = User.deleteMany()
    if (filter.length > 0) {
        result.or(filter)
    }
    const exec = result.exec()
    return (await exec).deletedCount
}

export { createUser, RetrieveUser, UpdateUser, DeleteById };