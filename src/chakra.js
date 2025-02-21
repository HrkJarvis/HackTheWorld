// src/chakra.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e6f7ff',
      100: '#bae7ff',
      200: '#91d5ff',
      300: '#69c0ff',
      400: '#40a9ff',
      500: '#1890ff',
      600: '#096dd9',
      700: '#0050b3',
      800: '#003a8c',
      900: '#002766',
    },
    dark: '#1c1c1c',
    green: '#4caf50',
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'dark',
        color: 'white',
        fontFamily: 'body',
      },
    },
  },
});

export default theme;
