// src/components/HeroCarousel.jsx
import React from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faLock, faGlobe } from '@fortawesome/free-solid-svg-icons';

const slides = [
  {
    heading: 'Protecting Your Digital World',
    icon: faShieldAlt,
  },
  {
    heading: 'Comprehensive Cybersecurity Solutions',
    icon: faLock,
  },
  {
    heading: 'Safeguard Your Business from Threats',
    icon: faGlobe,
  },
];

const HeroCarousel = () => (
  <Box
    position="relative"
    height="50vh"
    bgImage="url('/markus-spiske-iar-afB0QQw-unsplash (1).jpg)" // Replace with your image path
    bgSize="cover"
    bgPosition="center"
    bgRepeat="no-repeat"
  >
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      bgImage="url('/markus-spiske-iar-afB0QQw-unsplash (1).jpg)" // Dark overlay to improve text readability
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
        showArrows={false} // Disable arrow controls
      >
        {slides.map((slide, index) => (
          <Flex key={index} alignItems="center" justifyContent="center" height="100%">
            <Box textAlign="center" zIndex="1">
              <FontAwesomeIcon icon={slide.icon} size="5x" color="#22B850" mb={4} /> {/* Green color */}
              <Heading as="h1" size="2xl" fontWeight="bold" color="#22B850" mb={8}> {/* Green color */}
                {slide.heading}
              </Heading>
            </Box>
          </Flex>
        ))}
      </Carousel>
    </Box>
  </Box>
);

export default HeroCarousel;
