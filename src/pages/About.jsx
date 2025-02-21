import React from 'react';
import { Box, Flex, Heading, Text, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const AboutSection = () => {
  return (
    <Box
      bg="linear-gradient(135deg, #000000 0%, #1a202c 100%)" // Black gradient background
      color="white"
      py="5rem"
      px={{ base: '2rem', md: '4rem' }}
      position="relative"
      overflow="hidden"
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="url('https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png')"
        opacity="0.1"
        zIndex="0"
      />

      <Heading
        as="h2"
        textAlign="center"
        mb="2rem"
        fontSize={{ base: '2xl', md: '4xl' }}
        zIndex="1"
        position="relative"
        color="#22B85C" // Heading font color
      >
        About Us
      </Heading>
      <Stack spacing={8} zIndex="1" position="relative">
        <MotionBox
          p={6}
          borderRadius="md"
          bg="#1a202c" // Dark black background color
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
        >
          <Flex alignItems="center">
            <Box flex="1" pr={4}>
              <Heading as="h3" size="lg" mb={4} color="#22B85C"> {/* Updated heading color */}
                Our Mission
              </Heading>
              <Text color="gray.300">
                To provide state-of-the-art cybersecurity solutions that ensure the safety and privacy of our clients' digital assets.
              </Text>
            </Box>
            {/* Replace emoji with an icon or illustration */}
            <Box
              boxSize="100px"
              bg="linear-gradient(135deg, #6b7280, #374151)"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="48"
                height="48"
                className="text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </Box>
          </Flex>
        </MotionBox>
        <MotionBox
          p={6}
          borderRadius="md"
          bg="#1a202c" // Dark black background color
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
        >
          <Flex alignItems="center">
            <Box flex="1" pr={4}>
              <Heading as="h3" size="lg" mb={4} color="#22B85C"> {/* Updated heading color */}
                Our Vision
              </Heading>
              <Text color="gray.300">
                To be a global leader in cybersecurity, known for our innovation, commitment, and excellence in protecting the digital world.
              </Text>
            </Box>
            {/* Replace emoji with an icon or illustration */}
            <Box
              boxSize="100px"
              bg="linear-gradient(135deg, #6b7280, #374151)"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="48"
                height="48"
                className="text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </Box>
          </Flex>
        </MotionBox>
        <MotionBox
          p={6}
          borderRadius="md"
          bg="#1a202c" // Dark black background color
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
        >
          <Flex alignItems="center">
            <Box flex="1" pr={4}>
              <Heading as="h3" size="lg" mb={4} color="#22B85C"> {/* Updated heading color */}
                Our Values
              </Heading>
              <Text color="gray.300">
                Integrity, Innovation, Excellence, and Customer Satisfaction are at the core of everything we do.
              </Text>
            </Box>
            {/* Replace emoji with an icon or illustration */}
            <Box
              boxSize="100px"
              bg="linear-gradient(135deg, #6b7280, #374151)"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="48"
                height="48"
                className="text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </Box>
          </Flex>
        </MotionBox>
      </Stack>
    </Box>
  );
};

export default AboutSection;
