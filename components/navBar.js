import {Flex,Button,Box} from '@chakra-ui/react'

const navBar = () => {
    return (
       <Box shadow="lg" bg='whatsapp.300' p={5} align='left' gap={10} borderRadius={10}>
         <Button
         color='white'
         bg="transparent"
         p={5}
         mr={10}
        variant='ghost'
        _hover={{color:'black'}}>
            Home
        </Button>
        <Button
         color='white'
         bg='transparent'
         p={5}
         mr={10}
        variant='ghost'
        _hover={{color:'black'}}>
            Portifólio
        </Button>
        <Button
         color='white'
         bg='transparent'
         p={5}
        variant='ghost'
        _hover={{color:'black'}}
       
        >
            Contato
        </Button>




        </Box>
    )
}

export default navBar