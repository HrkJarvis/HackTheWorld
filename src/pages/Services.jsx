import React from 'react';
import { Box, Heading, Text, Divider, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import servicesData from '../data/servicesData';

const MotionBox = motion(Box); // Create a motion-enabled Box component

const Services = () => (
  <Box
    bgImage="url(/img/ser.png)"
    color="white"
    py={20}
    px={[4, 6, 10]} // Responsive padding
    textAlign="left"
  >
    <Heading as="h2" size="xl" color="#22B850" mb={20} textAlign="center">
      Identify threats before they become thefts.
    </Heading>
    {servicesData.map((service) => (
      <MotionBox
        key={service.id}
        mb={10}
        initial={{ opacity: 0, x: -100 }} // Initial animation values (off-screen)
        animate={{ opacity: 1, x: 0 }} // Animation when component is visible
        transition={{ duration: 0.5, delay: 0.2 }} // Animation duration and delay
        whileHover={{ scale: 1.05 }} // Scale up on hover
        whileTap={{ scale: 0.95 }} // Scale down on tap (optional)
      >
        <Flex
          direction={['column', 'column', 'row']} // Stack on smaller screens
          alignItems={['flex-start', 'flex-start', 'center']} // Align items to the start on smaller screens
        >
          <Box
            width={['100%', '100%', '30%']} // Full width on smaller screens
            mr={[0, 0, 4]} // No margin on smaller screens
            mb={[4, 4, 0]} // Margin bottom on smaller screens
            display="flex"
            alignItems="center"
          >
            <FontAwesomeIcon
              icon={service.icon}
              size="3x"
              color="#22B850"
              style={{ marginRight: '10px', transition: 'color 0.3s ease-in-out' }}
            />
            <Heading
              as="h3"
              size="lg"
              color="#22B850"
              mb={2}
              fontSize={['lg', 'xl']}
              _hover={{ textDecoration: 'underline' }}
            >
              {service.title}
            </Heading>
          </Box>
          <Box width={['100%', '100%', '70%']} opacity={1} transition="opacity 0.3s ease-in-out">
            <Text fontSize={['sm', 'md']} color="white" textAlign="justify">
              {service.detailDescription}
            </Text>
          </Box>
        </Flex>
        <Divider my={4} borderColor="gray.600" />
      </MotionBox>
    ))}
  </Box>
);

export default Services;
