import { Box, Text, VStack, Link, Image, SimpleGrid, useColorModeValue, Center, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';
import Footer from '../components/Footer';
import MusicPlayer from '../components/MusicPlayer';


const HomePage = () => {
  const { t } = useTranslation();

  const textColor = useColorModeValue('gray.800', 'gray.100');

  return (
    <>
 <div>
      <MusicPlayer src="https://cdn.pixabay.com/download/audio/2023/04/28/audio_fe7cd14210.mp3?filename=koi-discovery-postmorphose-148118.mp3" /> 
    </div>
    <VStack
    p={4}
    color={textColor}
    spacing={5}
    bgImage="url('./../assets/bc.gif')"
    bgPosition="center"
    bgRepeat="no-repeat"
    bgSize="cover"
    width="full"
    minHeight="100vh" 
  >
     <VStack
        bg="rgba(255, 255, 255, 0.2)" 
        backdropFilter="blur(10px)" 
        p={4}
        borderRadius="lg" 
        spacing={4}
        width="full" 
        maxWidth="container.xl" 
        marginX="auto" 
      >
        <Box p={4}>
        <LanguageSwitcher />
      </Box>
      <Text fontSize="2xl">{t('welcome')}</Text>
      <Text>{t('intro')}</Text>

      <VStack spacing={8}>
        
      <Box padding="4" >
      <Center>
      <Heading mb="4">{t('whatIsStoicism')}</Heading>
      <Text>{t('stoicismExplanation')}</Text>
      </Center>
    </Box>
    
    </VStack>
      <VStack>
        <Text fontSize="xl" fontWeight="bold">{t('quotes_title')}</Text>
        <Box>
          <Text>"{t('quote1')}" - {t('marcoAurelio')}</Text>
          <Text>"{t('quote2')}" - {t('seneca')}</Text>
          <Text>"{t('quote3')}" - {t('epicteto')}</Text>
        </Box>
      </VStack>

 
      <VStack>
        <Text fontSize="xl" fontWeight="bold">{t('resources_title')}</Text>
        <SimpleGrid columns={[1, null, 2]} spacing="40px">
          <Link href="https://www.amazon.es/Meditaciones-Pensamiento-Ilustrado-Marco-Aurelio/dp/8418395206/ref=asc_df_8418395206/?tag=googshopes-21&linkCode=df0&hvadid=469181880954&hvpos=&hvnetw=g&hvrand=3226662748996088444&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9049160&hvtargid=pla-1294872269240&psc=1&mcid=56aaa50d613d399ca6597e639742993a" isExternal>{t('resource1')}</Link>
          <Link href="https://www.amazon.es/Manual-fragmentos-TEXTOS-CL%C3%81SICOS-Epicteto/dp/8424939662/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=35M8OV2NQ9JK&dib=eyJ2IjoiMSJ9.5PcP5-6kZTpYe_nZ8oGUCMvCTOeB1eF-8GDMWj1T7g7UQ88HdXkdzNGxGgmmrDTVao09p8CHX5QGdW5ErKnVy2uTM_8YPMThxF3PZWdzObo6vymSvOh0y1zSAMjA1V15DoXg5fCUpFYfbyWrLQL-VGkoMq2liokhhtMq6l0eqvl1yT50KC23W9YndHR_dhovfxTsF-wXadpuJA0D5ui_WAxzMdEMawgxWFFQvwzx9p0.bS6Zn5Yl-x6GbdebPNQqDOroqrs-23T-cLhQNu6N2Yw&dib_tag=se&keywords=manual+epicteto&qid=1707907864&s=books&sprefix=manual+epicteto%2Cstripbooks%2C105&sr=1-1" isExternal>{t('resource2')}</Link>
          <Link href="https://medium.com/stoicism-philosophy-as-a-way-of-life/how-to-structure-your-day-like-a-stoic-f8086569aaca#:~:text=The%20Stoic%20life%20centred%20around,lead%20good%20and%20happy%20lives." isExternal>{t('resource3')}</Link>
          <Link href="https://modernstoicism.com/" isExternal>{t('resource4')}</Link>
        </SimpleGrid>
      </VStack>

      
      <VStack>
        <Text fontSize="xl" fontWeight="bold">{t('figures_title')}</Text>
        <SimpleGrid columns={[2, null, 3]} spacing="40px">
          <Box>
            <Image src="../assets/marco.jpg" alt="Marco Aurelio"  width="700px" height="auto"/>
            <Center>
            <Text>{t('marcoAurelio')}</Text>
            </Center>
          </Box>
          <Box>
            <Image src="../assets/epicteto.jpg" alt="Epicteto" width="700px" height="auto" />
            <Center>
            <Text>{t('epicteto')}</Text>
            </Center>
          </Box>
          <Box>
            <Image src="../assets/seneca.jpg" alt="Séneca"  width="700px" height="auto" />
            <Center>
            <Text>{t('seneca')}</Text>
            </Center>
          </Box>
        </SimpleGrid>
      
        </VStack>
      </VStack>
      <Footer />
      
    </VStack>
      
      </>

    
  );
};

export default HomePage;
