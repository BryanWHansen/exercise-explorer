import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Exercise {
  id: string;
  name: string;
}

const ExerciseGrid = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [error, SetError] = useState("");

  useEffect(() => {
    apiClient
      .get<Exercise[]>("/exercises")
      .then((res) => setExercises(res.data))
      .catch((err) => SetError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ExerciseGrid;
