import { Text } from "@chakra-ui/react";
import { useExercises } from "../hooks/useExercises";

const ExerciseGrid = () => {
  const { exercises, error } = useExercises();
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
