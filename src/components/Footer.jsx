import React from 'react';
import { Box, Flex, Link, List, ListItem, Text, Image } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box as="footer" bg="black" color="white" py="4rem">
      <Box maxW="64rem" mx="auto" px={6}>
        <Flex
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          justifyContent="space-between"
          alignItems="start"
          mb={10}
        >
          <Box flex={{ base: '0 0 100%', md: '1 1 30%' }} mb={{ base: '2rem', md: '0' }} mr={{ base: '0', md: '4rem' }}>
            <Image
              src="/img/logo.png" 
              alt="HackElite Logo"
              boxSize={{ base: '150px', md: '200px' }}  // Adjust size as needed
              objectFit="cover"
              borderRadius="full"  // This makes the image round
              mb={{ base: '2rem', md: '0' }}
            />
          </Box>
          <Box flex={{ base: '0 0 100%', md: '1 1 40%' }} mb={{ base: '2rem', md: '0' }} ml={{ base: '0', md: '8rem' }}>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              Links
            </Text>
            <List fontSize="sm" lineHeight="2" fontWeight="bold" spacing={2}>
              <LinkItem to="/" text="Home" />
              <LinkItem to="/services" text="Services" />
              <LinkItem to="/contact" text="Contact Us" />
              <LinkItem to="/about" text="About Us" />
              <LinkItem to="/blog" text="Blog" />
            </List>
          </Box>
          <Box flex={{ base: '0 0 100%', md: '1 1 30%' }} mt={{ base: '2rem', md: '0' }}>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Address
            </Text>
            <Text fontSize="sm" mb={4}>
              Delhi
              <br />
               India
            </Text>
            <Text fontSize="sm" mb={4}>
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
              abc@hack.com
            </Text>
          </Box>
        </Flex>
        <Box borderTop="1px solid #4A5568" py={6} textAlign="center">
          <Flex
            alignItems="center"
            justifyContent="center"
            fontSize="sm"
            color="gray.400"
          >
            <Text>© 2024 HackTheTech. All rights reserved.</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

const LinkItem = ({ to, text }) => (
  <ListItem>
    <Link
      as={RouterLink}
      to={to}
      _hover={{ textDecoration: 'underline', color: 'green.400' }}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      {text}
    </Link>
  </ListItem>
);

export default Footer;
