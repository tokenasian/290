import React, { useState } from "react";
import { useHistory } from "react-router-dom";


export const AddExercisePage = () => {
    const [name, setName] = useState("");
    const [reps, setReps] = useState("");
    const [weight, setWeight] = useState("");
    const [unit, setUnit] = useState("");
    const [date, setDate] = useState("");

    const history = useHistory();

    const AddExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch("/exercises", {
            method: "POST",
            body: JSON.stringify(newExercise),
            headers: {
                "Content-Type": "application/JSON",
            },
        });
        if (response.status === 201) {
            alert("Successfully added the exercise :)")
        }
        else {
            alert("Failed to add the exercise :(")
        }
        history.push("/");
    };
    return (
        <div>
            <h1>Add Exercise Routine</h1>
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)} />
                <input
                    type="number"
                    placeholder="Reps Finished"
                    min="1"
                    value={reps}
                    onChange={e => setReps(e.target.value)} />
                <input
                    type="number"
                    placeholder="Weights Used"
                    min="1"
                    value={weight}
                    onChange={e => setWeight(e.target.value)} />
                <select 
                    name="unit"
                    value={unit}
                    onChange={e => setUnit(e.target.value)}>
                    <option value=""></option>
                    <option value="lbs">lbs</option>
                    <option value="kgs">kgs</option>
                </select>
                <input
                    type="text"
                    placeholder="MM-DD-YY"
                    value={date}
                    onChange={e => setDate(e.target.value)} />
                </form>
                <button
                    onClick={AddExercise}>Add</button>
        </div>
    );
}

export default AddExercisePage;
