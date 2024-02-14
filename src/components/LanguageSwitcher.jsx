import { HStack, Button, Image, Center } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
<Center>
    <HStack spacing="24px" >
        
      <Button onClick={() => i18n.changeLanguage('es')}>
        <Image src="../../public/espana.png" alt="Español" width="20px" />
      </Button>
      <Button onClick={() => i18n.changeLanguage('en')}>
        <Image src="../../public/usa.png" alt="English" width="20px" />
      </Button>
      <Button onClick={() => i18n.changeLanguage('fr')}>
        <Image src="../../public/francia.png" alt="Français" width="20px" />
      </Button>
   
    </HStack>
    </Center>
  );
};

export default LanguageSwitcher;
