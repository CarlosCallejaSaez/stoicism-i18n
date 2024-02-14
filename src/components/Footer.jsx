import React from 'react';
import { Box, Text, Container, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
    const bgColor = useColorModeValue('rgba(255, 255, 255, 0.3)', 'rgba(26, 32, 44, 0.5)');
  const textColor = useColorModeValue('black.600', 'gray.200');

  return (
    <Box
    mt="auto"
    width="full"
    bg={bgColor}
    color={textColor}
    backdropFilter="blur(10px)" 
    boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" 
  >
      <Container
        as="footer"
        role="contentinfo"
        maxW="container.xl"
        py={{ base: '4', md: '5' }}
        px={{ base: '4', md: '8' }}
        textAlign="center"

      >
        <Text fontSize="sm">
          © {new Date().getFullYear()} Carlos Calleja Sáez
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
