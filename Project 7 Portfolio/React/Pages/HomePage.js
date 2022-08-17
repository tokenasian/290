import React from 'react';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setExerciseToEdit }) {
    const history = useHistory();
    const [exercises, setExercises] = useState([]);
    
    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const exercises = await response.json();
        setExercises(exercises);
    };

    useEffect(() => {
        loadExercises();
    }, []);

    const onDelete = async _id => {

        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });

        if (response.status === 204) {
            const getResponse = await fetch('/exercises');
            const exercises = await getResponse.json();
            setExercises(exercises);
        } else {
            console.error(`Failed to delete exercise with ID = ${_id}, status code = ${response.status}`)
        }
    }

    const onEdit = async exercisetoedit => {
        setExerciseToEdit(exercisetoedit);
        history.push("/edit-exercise");
    };

    return (
        <div>
            <ExerciseList exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseList>
        </div>
    );
}

export default HomePage;