import React, { useEffect, useState } from 'react';
import { Box, Flex, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, Button, useDisclosure, Image, Collapse, Link as ChakraLink } from '@chakra-ui/react';
import { HamburgerIcon, AddIcon, MinusIcon, ChevronDownIcon } from '@chakra-ui/icons';  // Added ChevronDownIcon
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isProductOpen, setProductOpen] = useState(false); // For showing Product's nested link

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, onClose]);

  return (
    <Box bg="black" px={4} py={1} height="100px">
      <Flex alignItems="center" justifyContent="space-between" maxW="6xl" mx="auto" height="100%">
        <Link to="/">
          <Box 
            as="figure" 
            overflow="hidden" 
            borderRadius="full" 
            animation="scaleUp 1s ease-in-out"
            ml={{ base: '2', md: '-4' }} // Adjust left margin for mobile and larger screens
          >
            <Image 
              src="/img/logo.png" 
              alt="HackElite Logo" 
              boxSize={{ base: '100px', md: '200px' }} // Smaller size on mobile, larger on desktop
            />
          </Box>
        </Link>

        <Box display={{ base: 'block', md: 'none' }}>
        <IconButton 
    icon={<HamburgerIcon />} 
    onClick={onOpen} 
    aria-label="Open Menu"
    bg="black"   
    color="white"  
     
    border="1px" 
    borderColor="white"  
    
  />
        </Box>
        <Box display={{ base: 'none', md: 'block' }}>
          <Flex align="center">
            <NavLink to="/" text="Home" />
            <NavLink to="/services" text="Services" />

            {/* Product + Expandable Link */}
            <Box position="relative">
              <Button
                variant="ghost"
                color="#7EDA58"
                _hover={{ color: 'white' }}
                onClick={() => setProductOpen(!isProductOpen)} // Toggle product visibility
                rightIcon={<ChevronDownIcon />} // Dropdown arrow icon for desktop
              >
                Product
              </Button>
              <Collapse in={isProductOpen} animateOpacity>
                <Box
                  bg="black"
                  position="absolute"
                  mt={2}  // Ensure it appears smoothly right below
                  rounded="md"
                  shadow="md"
                  w="200px"  // Width of the dropdown
                  p={2}
                  zIndex={1}
                >
                  <ChakraLink
                    href="https://sanhita.ai"
                    isExternal
                    color="#7EDA58"
                    _hover={{ color: 'white', textDecoration: 'underline' }}
                    display="block"  // Ensure block display for full width
                  >
                    Sanhita.ai
                  </ChakraLink>
                </Box>
              </Collapse>
            </Box>

            <NavLink to="/blog" text="Blog" />
            <NavLink to="/about" text="About Us" />
            <NavLink to="/contact" text="Contact" />
          </Flex>
        </Box>
      </Flex>

      {/* Mobile Navigation Drawer */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent bg="black">
            <DrawerCloseButton color="#00ffa3" />
            <DrawerHeader color="#00ffa3">HackElite</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="stretch">
                <MobileNavLink to="/" text="Home" onClose={onClose} />
                <MobileNavLink to="/services" text="Services" onClose={onClose} />

                {/* Mobile Product + Expandable Link */}
                <Button
                  variant="ghost"
                  color="#00ffa3"
                  justifyContent="space-between"
                  rightIcon={isProductOpen ? <MinusIcon /> : <AddIcon />}  // Mobile keeps the + and - icons
                  onClick={() => setProductOpen(!isProductOpen)}
                  _hover={{ color: 'white' }}
                >
                  Product
                </Button>
                <Collapse in={isProductOpen} animateOpacity>
                  <Box pl={6}>  {/* Indentation to make it look inside Product */}
                    <MobileNavLinkExternal href="https://sanhita.ai" text="Sanhita.ai" onClose={onClose} />
                  </Box>
                </Collapse>

                <MobileNavLink to="/blog" text="Blog" onClose={onClose} />
                <MobileNavLink to="/about" text="About Us" onClose={onClose} />
                <MobileNavLink to="/contact" text="Contact" onClose={onClose} />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

// NavLink component for desktop navigation
const NavLink = ({ to, text }) => (
  <Link to={to} style={{ textDecoration: 'none' }}>
    <Button variant="ghost" color="#7EDA58" _hover={{ color: 'white' }}>{text}</Button>
  </Link>
);

// MobileNavLink component for internal mobile navigation links
const MobileNavLink = ({ to, text, onClose }) => (
  <Link to={to} style={{ textDecoration: 'none' }} onClick={onClose}>
    <Box px={4} py={2} bg="black" color="#00ffa3" _hover={{ bg: 'brand.600' }}>{text}</Box>
  </Link>
);

// MobileNavLink component for external mobile links (like Sanhita.ai)
const MobileNavLinkExternal = ({ href, text, onClose }) => (
  <ChakraLink href={href} isExternal style={{ textDecoration: 'none' }} onClick={onClose}>
    <Box px={4} py={2} bg="black" color="#00ffa3" _hover={{ bg: 'brand.600' }}>{text}</Box>
  </ChakraLink>
);

export default Header;
