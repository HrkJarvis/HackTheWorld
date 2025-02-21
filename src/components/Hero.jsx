import React, { useState, useRef } from 'react';
import { Box, Container, Grid, Image, Text, Button, IconButton, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useBreakpointValue } from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const servicesRef = useRef(null); // Create a ref for ServicesOverview component

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Scroll to ServicesOverview component
  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Responsive hook to get screen size
  const showLeftImage = useBreakpointValue({ base: false, md: true });

  return (
    <Box
      bgImage="url(/img/hero.gif)"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      color="white"
      py={{ base: 12, md: 20 }}
      position="relative"
      width="100%"
    >
      <Container maxW="6xl">
        {/* Text Section */}
        <Text fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} fontWeight="bold" mb={4} textAlign="center">
          Cybersecurity Excellence
        </Text>
        <Text fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }} mb={8} color="#22B850" textAlign="center" fontWeight="bold">
          Defending Your Digital Assets Against Cyberattacks
        </Text>
        {/* Grid for Images and Buttons */}
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6} mt={10} alignItems="center">
          {/* Left Image (conditionally rendered) */}
          {showLeftImage && (
            <Box textAlign={{ base: 'center', md: 'left' }}>
              <Box
                _hover={{ transform: 'scale(1.1)', transition: 'transform 0.3s' }}
                as="figure"
                mx="auto"
                maxW={{ base: '300px', md: 'none' }}
              >
                <Image
                  src="/img/threat.png"
                  alt="Left Image"
                  boxSize="100%"
                />
              </Box>
            </Box>
          )}
          {/* Middle Text and Buttons */}
          <Box textAlign="center" gridColumn={{ base: '1', md: 'auto' }}>
            <Text fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} mb={4} fontWeight="bold">
              Stay Ahead of Cyber Threats with HackElite
            </Text>
            <Box>
              <Button
                as={RouterLink} // Use RouterLink to navigate to ServicesOverview
                to="/services" // Path to ServicesOverview component
                colorScheme="green"
                bg="#22B850"
                color="white"
                px={6}
                py={3}
                borderRadius="md"
                _hover={{ bg: '#1A9447' }}
                cursor="pointer"
                
                marginRight={{ base: 0, md: 4 }}
                onClick={scrollToServices} // Scroll to ServicesOverview on click
              >
                Get Started
              </Button>
              <IconButton
                icon={<FaPlay />}
                aria-label="Play Video"
                colorScheme="teal"
                onClick={openModal}
                ml={{ base: 4, md: 0 }} // Add margin left on medium screens and above
                // Add margin top on smaller screens
              />
            </Box>
          </Box>
          {/* Right Image */}
          {/* Right Image */}
<Box
  textAlign={{ base: 'center', md: 'right' }}
  gridColumn={{ base: '1 / -1', md: 'auto' }} // Span full width on smaller screens
>
  <Box
    _hover={{ transform: 'scale(1.1)', transition: 'transform 0.3s' }}
    as="figure"
    mx="auto" // Center the image horizontally
    maxW={{ base: '300px', md: 'none' }}
  >
    <Image
      src="/img/cyber-security.png"
      alt="Right Image"
      boxSize={{ base: '100%', md: '80%' }} // Ensure image scales appropriately
    />
  </Box>
</Box>

        </Grid>
        {/* Video Modal */}
        <Modal isOpen={isOpen} onClose={closeModal} size="2xl">
          <ModalOverlay />
          <ModalContent bg="black" maxW="90vw" maxH="90vh">
            <ModalCloseButton color="white" bg="red" />
            <ModalBody display="flex" justifyContent="center" alignItems="center">
              <Box as="video" width="70%" height="auto" controls>
                <source src="/img/The future of cybersecutity.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
      {/* Placeholder for ServicesOverview scroll target */}
      <Box ref={servicesRef} />
    </Box>
  );
};

export default Hero;
