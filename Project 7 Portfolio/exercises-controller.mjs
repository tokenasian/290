import * as exercises from './exercises-model.mjs';
import express, { urlencoded } from 'express';
const app = express();
const PORT = 3000;

app.use(express.json());
/**
 * route handler for POST requests 
 */
 app.post('/exercises', (req, res) => {
    exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Invalid Request' });
        });
});
/**
 * route handler for GET requests using get/exercises
 */
 app.get("/exercises", (req, res) => {
    exercises.findExercise()
    .then((exercises) => {
        res.status(200).json(exercises)
    })   
    .catch((error) => {
        console.error(error);
        res.status(400).json({Error: 'Invalid Request'})
        });
});

/**
 * route handler for GET requests using get/exercises/:_id
 */
 app.get('/exercises/:_id', (req, res) => {
    console.log(req.body);
    const exerciseId = req.params._id;
    exercises.findExerciseById(exerciseId)
        .then(exercises => {
            if (exercises !== null) {
                res.json(exercises);
            } else {
                res.status(404).json({Error:'Invalid Request'});
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Invalid Request' });
        });
 });
/**
 * route handler for PUT requests
 */
 app.put("/exercises/:_id", (req, res) => {
    const exerciseId = req.params._id;
    exercises.replaceExercise(exerciseId, req)
        .then((exercises) => {
            res.status(200).json(exercises);
        })
        .catch((error) => {
            console.error(error);
            if (error === "Invalid Request") {
                res.status(400).json({Error: 'Invalid Request'});
            }
            else if (error === "Not Found") {
                res.status(404).json({Error: 'Not Found'});
            }
            else {
                res.status(400).json({Error: "Invalid Request"})
            };
        });
});
/**
 * route handler for DELETE requests
 */
 app.delete("/exercises/:_id", (req, res) => {
    exercises.deleteExerciseById(req.params._id)
    .then((deletedCount) => {
        if (deletedCount === null) {
            res.status(404).json({Error: "Not found"})
        }
        else {
            res.status(204).send()
        }
    })
    .catch((error) => {
        console.log(error);
        res.send({Error: "Invalid Request"})
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
