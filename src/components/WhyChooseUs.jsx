import React from 'react';
import { Box, Flex, Heading, Text, Stack, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserShield, FaLock, FaRocket } from 'react-icons/fa';

const MotionBox = motion(Box);

const reasons = [
  {
    icon: FaShieldAlt,
    title: 'Advanced Security',
    description: 'We provide the most advanced security measures to protect your assets.',
  },
  {
    icon: FaUserShield,
    title: 'Trusted Experts',
    description: 'Our team consists of highly skilled and trusted cyber security experts.',
  },
  {
    icon: FaLock,
    title: 'Data Privacy',
    description: 'Your data privacy is our top priority. We ensure complete confidentiality.',
  },
  {
    icon: FaRocket,
    title: 'Fast Response',
    description: 'We offer quick and efficient response times to handle any security threats.',
  },
];

const WhyChooseUs = () => {
  return (
    <Box
      bgImage="url(/img/why2.gif)"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      color="white"
      py={{ base: '3rem', md: '5rem' }}
      px={{ base: '1rem', md: '2rem' }}
      position="relative"
      width="100%"
      minHeight="100vh"
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Heading as="h2" size="2xl" mb={{ base: '1.5rem', md: '2rem' }}>
        Why Choose Us?
      </Heading>
      <Flex justifyContent="left">
        <Box maxW="1200px" p={{ base: '1rem', md: '2rem' }} borderRadius="md">
          <Stack spacing={8}>
            {reasons.map((reason, index) => (
              <MotionBox
                key={index}
                p={6}
                borderRadius="lg"
                bg="transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                textAlign="left"
              >
                <Flex alignItems="center">
                  <Icon as={reason.icon} w={12} h={12} color="#22B850" mr={4} />
                  <Box>
                    <Heading as="h3" size="md" mb={2}>
                      {reason.title}
                    </Heading>
                    <Text>{reason.description}</Text>
                  </Box>
                </Flex>
              </MotionBox>
            ))}
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default WhyChooseUs;
