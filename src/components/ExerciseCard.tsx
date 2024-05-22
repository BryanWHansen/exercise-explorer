import { Card, Heading, Image, Stack } from "@chakra-ui/react";
import { Exercise } from "../hooks/useExercises";
import ExerciseCardInstructions from "./ExerciseCardInstructions";

interface Props {
  exercise: Exercise;
}

const ExerciseCard = ({ exercise }: Props) => {
  const FormatString = (input: string): string => {
    if (!input) return "";
    return input.charAt(0).toUpperCase() + input.slice(1);
  };

  const secondaryTarget: string[] = exercise.secondaryMuscles.map((sm) => {
    return FormatString(sm);
  });

  return (
    <Card>
      <Image src={exercise.gifUrl} />
      <Stack padding={2} mt="6" spacing="3">
        <Heading size="md">{exercise.name.toUpperCase()}</Heading>
        <Heading size="sm">
          Primary Muscle: {FormatString(exercise.target)}
        </Heading>
        {secondaryTarget.length > 1 ? (
          <Heading size="sm">
            Secondary Muscles: {secondaryTarget.join(", ")}
          </Heading>
        ) : (
          <Heading size="sm">
            Secondary Muscle: {secondaryTarget.join(", ")}
          </Heading>
        )}
        <ExerciseCardInstructions instructions={exercise.instructions} />
      </Stack>
    </Card>
  );
};

export default ExerciseCard;
