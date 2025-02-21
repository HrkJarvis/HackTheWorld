import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import servicesData from '../data/servicesData';

const ServicesOverview = () => (
  <Box
    bgImage="url(/img/services.gif)"
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
  >
    <Heading as="h2" size="2xl" color="white" mb={{ base: '1.5rem', md: '2rem' }}>
      Our Services
    </Heading>
    <Box maxW="1200px" mx="auto">
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
        showArrows={false}
        showIndicators={false}
        dynamicHeight={false}
        centerMode
        centerSlidePercentage={100} // Display one slide at a time
      >
        {servicesData.map((service) => (
          <Box key={service.id} p={6} flex="0 0 auto" width="100%" maxWidth="300px" mx="auto">
            <Link to={`/services`}>
              <Box
                mx="auto"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                bg="rgba(0, 0, 0, 0.3)"
                textAlign="center"
              >
                <Box
                  bg="gray.800"
                  color="white"
                  px={4}
                  py={3}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="100px"
                >
                  <FontAwesomeIcon icon={service.icon} size="3x" color="#22B850" />
                </Box>
                <Box px={4} py={3}>
                  <Heading as="h3" size="md" color="#22B850" mb={2}>
                    {service.title}
                  </Heading>
                  <Text fontSize="sm" color="white">
                    {service.description}
                  </Text>
                </Box>
              </Box>
            </Link>
          </Box>
        ))}
      </Carousel>
    </Box>
    <Flex justifyContent="center" mt={8}>
      <Link to="/services" style={{ textDecoration: 'none' }}>
        <Box
          bg="#22B850"
          color="white"
          px={6}
          py={3}
          borderRadius="md"
          _hover={{ bg: '#1A9447' }}
          cursor="pointer"
        >
          Explore All Services
        </Box>
      </Link>
    </Flex>
  </Box>
);

export default ServicesOverview;
