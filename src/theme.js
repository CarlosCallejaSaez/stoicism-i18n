
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      
      body: {
        bg: 'linear-gradient(90deg, rgba(226,225,206,0.1550595238095238) 7%, rgba(143,135,9,0.1741071428571429) 100%);', 
      },
    },
  },
});

export default theme;
