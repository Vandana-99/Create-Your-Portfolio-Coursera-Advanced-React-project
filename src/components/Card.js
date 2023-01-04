import { Heading, HStack, Image, Text, VStack,Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    
    <VStack bg="white" borderRadius="10px" m={0.5} align="initial">
      <Image borderRadius="10px" src={imageSrc}/>
      <Box p={2}><Heading as="h5" color="black" size='sm' my={0.5}>
        {title}
        </Heading>
        </Box>
      <Box p={2}>
        <Text color="gray.600" fontSize="sm">
          {description}
          </Text>
      </Box>
      <Box p={2}>
        <a href="/">
        <Text fontSize="xs" color="black" my={0.5}>
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Text>
          </a>
      </Box>
    </VStack>
    
    
  );
 
};

export default Card;
