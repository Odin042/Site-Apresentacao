import {Flex,Box,Button,Image,Icon,chakra,Stack,IconButton,ButtonGroup} from '@chakra-ui/react'
import NavBar from '../components/navBar'
import React from 'react'
import footer from '../components/footer'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {DiJsBadge} from 'react-icons/di'
import {FaBookOpen} from 'react-icons/fa'
import {IoMdContact,IoDocumentAttachOutline} from 'react-icons/io' 



const home = () => {
    return (
  <div>
    <Flex
      p={100}
      w="auto"
      bg='white'
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
       
      
        <Flex alignItems="center" px={6} py={3} bg='teal.700'>
          <Icon as={DiJsBadge} h={6} w={6} color="white" />

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
          Desenvolvedor Front-End
          </chakra.h1>
        </Flex>

        <Box py={4} 
        px={6}
        bg='teal.400'
        color='white'
        _hover={{color:'gray.600'}} >
          
          
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
      bg='white'
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
       
      
        <Flex alignItems="center" px={6} py={3} bg='teal.700'>
          <Icon as={FaBookOpen} h={6} w={6} color="white" />

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
          Portifólio
          </chakra.h1>
        </Flex>

        <Box py={4} 
        px={6}
        bg='teal.400'
        color='white'
        _hover={{color:'gray.600'}} >
          
          
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
      bg='white'
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
       
      
        <Flex alignItems="center" px={6} py={3} bg='teal.700'>
          <Icon as={IoMdContact} h={6} w={6} color="white" />

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
          Contato
          </chakra.h1>
        </Flex>

        <Box py={4} 
        px={6}
        bg='teal.400'
        color='white'
        _hover={{color:'gray.600'}} >
          
          
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
      color='white' 
      value='download'
      boxShadow='dark-lg'
      _hover={{ transform: 'scale(1.1)'}}
      as={IoDocumentAttachOutline}
      ml={1130} 
      mt={-300}
      bg={'whatsapp.500'} > 
           Baixe meu currículo

      </Button>

      


    </Stack>
    </div>
    

    
    )
    
}

export default home