import React from 'react';
import { Box, Heading, Text, Flex, List, ListItem, keyframes, Image } from '@chakra-ui/react';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const CustomIcon = () => (
  <Box
    as="span"
    display="inline-block"
    width="10px"
    height="10px"
    bg="#22B850"
    borderRadius="50%"
    marginRight="8px"
    animation={`${pulse} 1.5s infinite`}
  />
);

const WhoWeAre = () => {
  return (
    <Box
      bg="black"
      color="white"
      py="5rem"
      px={{ base: '2rem', md: '4rem' }}
      width="100%"
    >
      <Flex
        direction={['column', 'column', 'row']}
        justifyContent="flex-start"
        alignItems="stretch"
        height="100%"
      >
        <Box
          flexBasis={{ base: '100%', md: '50%' }}
          flexShrink={0}
          textAlign="center"
          height={{ base: '200px', md: '300px', lg: 'auto' }}
          display={{ base: 'none', md: 'flex' }}
          alignItems="center"
        >
          <Image 
            src="/img/whoweare.gif" 
            alt="Who We Are" 
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>
        <Box
          flexBasis={{ base: '100%', md: '50%' }}
          textAlign={{ base: 'center', md: 'left' }}
          bg="rgba(0, 0, 0, 0.6)"
          p={{ base: 6, md: 8, lg: 10 }}
          borderRadius="md"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Heading as="h2" size={{ base: 'lg', md: 'xl' }} color="#22B850" mb={6}>
            Who We Are
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="white" mb={4} textAlign="justify">
            HackTheTech is committed to providing cutting-edge cybersecurity solutions. We specialize in
            identifying and mitigating digital threats, ensuring the security and integrity of your
            digital assets. Our team of experts works tirelessly to deliver innovative strategies that
            safeguard your business operations.
          </Text>
          <List spacing={3} pl={0}> {/* Set paddingLeft to 0 to align bullets with text */}
            <ListItem>
              <Flex align="center">
                <CustomIcon />
                <Text>Leading provider of cybersecurity solutions</Text>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex align="center">
                <CustomIcon />
                <Text>Innovative methods to protect digital assets</Text>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex align="center">
                <CustomIcon />
                <Text>Expertise in threat detection and prevention</Text>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex align="center">
                <CustomIcon />
                <Text>Customized solutions for business needs</Text>
              </Flex>
            </ListItem>
            
          </List>
        </Box>
      </Flex>
    </Box>
  );
};

export default WhoWeAre;
