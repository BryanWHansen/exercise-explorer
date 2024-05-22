import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";

interface Props {
  instructions: string[];
}

const ExerciseCardInstructions = ({ instructions }: Props) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Instructions
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {instructions.map((i, index) => (
            <Text key={index}>
              {index}) {i}
            </Text>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default ExerciseCardInstructions;
