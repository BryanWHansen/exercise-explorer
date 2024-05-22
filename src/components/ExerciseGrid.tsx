import { SimpleGrid, Text } from "@chakra-ui/react";
import { useExercises } from "../hooks/useExercises";
import ExerciseCard from "./ExerciseCard";
import ExerciseCardSkeleton from "./ExerciseCardSkeleton";
import ExerciseCardContainer from "./ExerciseCardContainer";

const ExerciseGrid = () => {
  const { exercises, error, isLoading } = useExercises();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding={10} spacing={10}>
        {isLoading &&
          skeletons.map((s, index) => (
            <ExerciseCardContainer key={index}>
              <ExerciseCardSkeleton />
            </ExerciseCardContainer>
          ))}
        {exercises.map((exercise, index) => (
          <ExerciseCardContainer key={index}>
            <ExerciseCard exercise={exercise} />
          </ExerciseCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ExerciseGrid;
