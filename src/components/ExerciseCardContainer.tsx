import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ExerciseCardContainer = ({ children }: Props) => {
  return (
    <Box width="500px" borderRadius="lg" overflow="hidden">
      {children}
    </Box>
  );
};

export default ExerciseCardContainer;
