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
      p={100}
      w="auto"
      bg={bg}
      justifyContent="center"
      
      
      
    >
      <Box 
        w="50%"
        h="300%"
        mt={-100}
        mb={-600}
        ml={-1050}
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
            <Icon as={MdEmail} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              guilherme.sylva92@gmail.com
            </chakra.h1>
          </Flex>
        </Box>
      </Box>
    </Flex>
    <Flex
      p={100}
      w="auto"
      bg={bg}
      justifyContent="center"
      
      
      
      
    >
      <Box 
        w="50%"
        h="10%"
        mt={-400}
        mb={-100}
        ml={800}
        shadow="xl"
        boxShadow="dark-lg"
        rounded="lg"
        overflow={'hidden'}
        position='relative'
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
      w="auto"
      bg={bg}
      justifyContent="center"
      
      
      
      
    >
      <Box 
        w="50%"
        h="10%"
        mt={-400}
        mb={-100}
        ml={800}
        shadow="xl"
        boxShadow="dark-lg"
        rounded="lg"
        overflow={'hidden'}
        position='relative'
        _hover={{ transform: 'scale(1.1)' }}
        
        
        
        
          
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
    <Stack 
    direction='row' 
    spacing={10} >
      <Button 
      href={'./files/GuilhermeFernandesSilva.pdf'}
      onClick={() => {window.open('./files/GuilhermeFernandesSilva.pdf')}}
      variant='solid'
      size='lg'
      color= 'white'
      value='download'
      boxShadow='dark-lg'
      _hover={{ transform: 'scale(1.1)'}}
      leftIcon={<AttachmentIcon />}
      ml={1130} 
      mt={-300}
      bg={bgButton} > 
           Baixe meu currículo

      </Button>
      </Stack>
      <Stack
      direction='row' 
      spacing={10}>
      <Button 
      onClick={toggleColorMode}
      leftIcon={<MoonIcon />}
      variant='solid'
      size='lg' 
      boxShadow='dark-lg'
      _hover={{ transform: 'scale(1.1)'}}
      ml={1420} 
      mt={-300}
      > 
          Dark Mode
       </Button>
      </Stack>
    </div>
    

    
    )
    
}

export default home