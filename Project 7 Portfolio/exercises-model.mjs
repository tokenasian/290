// Get the mongoose object
import mongoose from 'mongoose';
// Prepare to the database exercises_db in the MongoDB server running locally on port 27017
mongoose.connect(
    'mongodb://localhost:27017/exercise_db',
    { useNewUrlParser: true }
);
// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
});
/**
 * Define the schema
 */
const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true }
});
/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Exercise = mongoose.model("Exercise", exerciseSchema);
/**
 * Create an exercise
 * @param {String} name 
 * @param {Number} reps 
 * @param {Number} weight
 * @param {String} unit 
 * @param {String} date
 * @returns A promise. Resolves to the JSON object for the document created by calling save
 */
 const createExercise = async (name, reps, weight, unit, date) => {
    // Call the constructor to create an instance of the model class Exercise
    const exercise = new Exercise({ name: name, reps: reps, weight: weight, unit: unit, date: date });
    if (!name) { 
        throw "Invalid Request" 
    };
    if (reps <= 0 || (weight <= 0)) { 
        throw "Invalid Request"
    };
    if (isNaN(reps)){  
        throw "Invalid Request"
    };
    if (isNaN(weight)){
        throw "Invalid Request"
    };
    if (typeof(unit) != "string" || (unit != "lbs" && unit != "kgs")) {
        throw "Invalid Request"
    };
    const format = /^\d\d-\d\d-\d\d$/;
    if (!(format.test(date))) {
        throw "Invalid Request"
    };
    return exercise.save();
};

/**
 * Retreive exercises based on the filter, projection and limit parameters
 * @param {Object} filter 
 * @param {String} projection 
 * @param {Number} limit 
 * @returns 
 */
const findExercise = async (filter, projection, limit) => {
    const query = Exercise.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}

/**
 * Find the exercise with the given ID value
 * @param {String} _id 
 * @returns 
 */
 const findExerciseById = async (_id) => {
    const query = Exercise.findById(_id);
    return query.exec();
}

/**
 * Update the exercises
 */

const replaceExercise = async (objId, Obj) => {
    const {name, reps, weight, unit, date} = Obj.body
    if (!name) { 
        throw "Invalid Request" 
    };
    if (isNaN(reps)){
        throw "Invalid Request"
    };
    if (isNaN(weight)){
        throw "Invalid Request"
    };
    if (unit !== "lbs" && unit !== "kgs") {
        throw "Invalid Request"
    };
    const format = /^\d\d-\d\d-\d\d$/;
    if (!(format.test(date))) {
        throw "Invalid Request"
    };
    const replaceExercise = await Exercise.findByIdAndUpdate(objId, Obj.body)
    if (replaceExercise === null) {
        throw "Not Found"
    };
    return replaceExercise;
};

/**
 * Delete the exercises
 */

 const deleteExerciseById = async (objId) => {
    const deleteExerciseById = await Exercise.findByIdAndDelete(objId);
    return deleteExerciseById;
};

export { createExercise, deleteExerciseById, findExercise, findExerciseById, replaceExercise };

