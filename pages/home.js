import {Flex,Box,Button,Image,Icon,chakra,Stack,IconButton,ButtonGroup,useColorModeValue,useColorMode} from '@chakra-ui/react'
import NavBar from '../components/navBar'
import theme from '../theme.js'
import React from 'react'
import footer from '../components/footer'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {DiJsBadge} from 'react-icons/di'
import {FaBookOpen} from 'react-icons/fa'
import {IoMdContact,IoDocumentAttachOutline} from 'react-icons/io' 
import {MoonIcon,AttachmentIcon} from '@chakra-ui/icons'

  
 

const home = () => {
  const {toggleColorMode} = useColorMode()
  


const bgButton = useColorModeValue('teal.400', 'gray.600')
const bg= useColorModeValue('white', 'gray.800')
const bgBox = useColorModeValue('teal.700' , 'gray.900')
const bgBox2 = useColorModeValue('teal.400' , 'gray.600')


return (
  <div>
    <Flex
<<<<<<< Updated upstream
      maxW="100vw"
      p={{ base: 100, md: 8 }}
=======
      p={{ base: 100, md: 3}}
>>>>>>> Stashed changes
      bg={bg}
      justifyContent="center"
      
      
      
    >
      <Box 
<<<<<<< Updated upstream
        maxW="100%"
        ml={{md:'-40%',lg: '-75%'}} 
        mt={{md:'-90%',lg: '-6%'}}
=======
        p={{base: '100px', md: '1px'}}
        w={{base: '100%', md: '30%'}}
        ml={{ md: '180px', lg: '-1810px'}}
        mr={{ md: '100px', lg: '16px'}}
        mt={{ md: '-100px', lg: '-47px'}}
        mb={{ md: '-100px', lg: '-800px'}}
>>>>>>> Stashed changes
        shadow="xl"
        boxShadow="2xl"
        rounded="lg"
        overflow={'hidden'}
        
        
        
          
      >
        <Image
          w="full"
          h={700}
          paddingTop={"-500px"}
          fit="cover"
          objectPosition="center"
          src={'../images/foto.jpeg'}
          alt="avatar"
        />
       
      
        <Flex alignItems="center" px={6} py={3} bg={bgBox}>
          <Icon as={DiJsBadge} h={6} w={6} color="white" />

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
          Desenvolvedor Front-End
          </chakra.h1>
        </Flex>

        <Box py={4} 
        px={6}
        bg={bgBox2}
        color='white'
         >
          
          
          <chakra.h1
            fontSize="xl"
            fontWeight="bold"
            
          >
            Guilherme Fernandes
          </chakra.h1>

          <chakra.p py={2} >
            JavaScript/React/VtexIO/NodeJS/NextJS.
          </chakra.p>

          <Flex
            alignItems="center"
            mt={4}
          >
            <Icon
              as={BsFillBriefcaseFill}
              h={6}
              w={6}
              mr={2}
            />

            <chakra.h1 px={2} fontSize="sm">
              Web Developer
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              Goiânia - GO
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            
          >
          </Flex>
        </Box>
      </Box>
    </Flex>
    <Flex
<<<<<<< Updated upstream
      p={100}
      w="auto"
      mb={{md:'-40%', lg:'-14%'}}
      mt={{md:'-40%', lg:'-14%'}}
      ml={{md:'40%', lg:'-11%'}}
=======
      p={120}
      w="full"
>>>>>>> Stashed changes
      bg={bg}
      justifyContent="center"
      
      
      
      
      
    >
      <Box 
<<<<<<< Updated upstream
        w={{ md:'70%',lg:'50%'}}
        ml={{ md: '180px', lg: '45%'}}
        mr={{ md: '100px', lg: '1%'}}
        mt={{ md: '-40px', lg: '-33%'}}
        mb={{ md: '100px', lg: '33%'}}
=======
        p={{base: '200px', md: '0px'}}
        w={{base: '120%', md: '46%'}}
        ml={{ md: '180px', lg: '690px'}}
        mr={{ md: '100px', lg: '5px'}}
        mt={{ md: '100px', lg: '-100px'}}
        mb={{ md: '100px', lg: '280px'}}
>>>>>>> Stashed changes
        shadow="xl"
        boxShadow="dark-lg"
        rounded="lg"
        overflow={'hidden'}
        _hover={{ transform: 'scale(1.1)' }}
        
        
        
        
          
      >
       
      
        <Flex alignItems="center" px={6} py={3} bg={bgBox}>
          <Icon as={FaBookOpen} h={6} w={6} color="white" />

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
          Portifólio
          </chakra.h1>
        </Flex>

        <Box py={4} 
        px={6}
        bg={bgBox2}
        color='white'
         >
          
          
          <chakra.h1
            fontSize="xl"
            fontWeight="bold"
            
          >
            Acesse meu portifólio
          </chakra.h1>

        </Box>
      </Box>
    </Flex>
    <Flex
      p={100}
      w='auto'
      mb={{md:'40%', lg:'60%'}}
      ml={{md:'40%', lg:'-6%'}}
      bg={bg}
      justifyContent="center"
      
      
      
      
    >
      <Box 
<<<<<<< Updated upstream
        w={{ md:'70%',lg:'53%'}}
        ml={{ md: '180px', lg: '42%'}}
        mr={{ md: '100px', lg: '1%'}}
        mt={{ md: '390px', lg: '-26%'}}
        mb={{ md: '800px', lg: '70%'}}
        shadow="xl"
        boxShadow="dark-lg"
        rounded="lg"
        overflow={'hidden'}
        _hover={{ transform: 'scale(1.1)' }}
=======
       p={{base: '200px', md: '0px'}}
       w={{base: '120%', md: '46%'}}
       ml={{ md: '180px', lg: '690px'}}
       mr={{ md: '100px', lg: '5px'}}
       mt={{ md: '100px', lg: '-280px'}}
       mb={{ md: '100px', lg: '280px'}}
       shadow="xl"
       boxShadow="dark-lg"
       rounded="lg"
       overflow={'hidden'}
       position='relative'
       _hover={{ transform: 'scale(1.1)' }}
>>>>>>> Stashed changes
        
        
        
        
          
      >
       
      
        <Flex alignItems="center" px={6} py={3} bg={bgBox}>
          <Icon as={IoMdContact} h={6} w={6} color="white" />

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
          Contato
          </chakra.h1>
        </Flex>

        <Box py={4} 
        px={6}
        bg={bgBox2}
        color='white'
         >
          
          
          <chakra.h1
            fontSize="xl"
            fontWeight="bold"
            
          >
            Entre em contato comigo
          </chakra.h1>

        </Box>
      </Box>
    </Flex>
    <Flex
    w={{ md:'70%',lg:'53%'}}
    ml={{ md: '180px', lg: '42%'}}
    mr={{ md: '100px', lg: '1%'}}
    mt={{ md: '100px', lg: '-126%'}}
    mb={{ md: '100px', lg: '0%'}}
    gap={20}>
    <Stack 
    direction='row' >
      <Button 
      href={'./files/GuilhermeFernandesSilva.pdf'}
      onClick={() => {window.open('./files/GuilhermeFernandesSilva.pdf')}}
      variant='solid'
      size='lg'
      color= 'white'
      ml={'40px'}
      value='download'
      boxShadow='dark-lg'
      _hover={{ transform: 'scale(1.1)'}}
      leftIcon={<AttachmentIcon />}
      bg={bgButton} > 
           Baixe meu currículo

      </Button>
      </Stack>
      <Stack
      direction='row' >
      <Button 
      onClick={toggleColorMode}
      leftIcon={<MoonIcon />}
      variant='solid'
      size='lg' 
      mr={'50px'}
      boxShadow='dark-lg'
      _hover={{ transform: 'scale(1.1)'}}
      > 
          Dark Mode
       </Button>
      </Stack>
      </Flex>
    </div>
    

    
    )
    
}

export default home