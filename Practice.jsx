import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Practice() {
    const [exerciseNames, setExerciseNames] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:8000/exercise/';

        async function fetchExerciseNames() {
            try {
                const response = await axios.get(apiUrl);
                setExerciseNames(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchExerciseNames();
    }, []);

    return (
        <div>
            <h1>Exercise Names</h1>
            <ul>
                {exerciseNames.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Practice;
