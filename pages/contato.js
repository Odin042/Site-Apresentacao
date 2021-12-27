import {Button,chakra, Box, Flex, useColorModeValue, Link} from '@chakra-ui/react'



const contato = () => {
    const linkedin = 


    return(
        
          <Flex
              bg={useColorModeValue("#F9FAFB", "gray.600")}
              p={190}
              w="full"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                bg={useColorModeValue("white", "gray.800")}
                mx={{ lg: 8 }}
                display={{ lg: "flex" }}
                maxW={{ lg: "5xl" }}
                shadow={{ lg: "lg" }}
                rounded={{ lg: "lg" }}
              >
                <Box w={{ lg: "180%" }}>
                  <Box
                    h={{ base: 64, lg: "full" }}
                    rounded={{ lg: "lg" }}
                    bgSize="cover"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
                    }}
                  ></Box>
                </Box>
        
                <Box py={140} px={180} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "220%" }}>
                  <chakra.h2
                    fontSize={{ base: "2xl", md: "3xl" }}
                    color={useColorModeValue("gray.800", "white")}
                    fontWeight="bold"
                  >
                    ENTRE EM CONTATO COMIGO :)
                  </chakra.h2>
                  <Button 
                    onClick={}
                    leftIcon={<'../images/linkedin.png'/>}
                    variant='solid'
                    size='lg' 
                    mr={'50px'}
                    boxShadow='dark-lg'
                    _hover={{ transform: 'scale(1.1)'}}
                      > 
                      Dark Mode
                   </Button>
                
                </Box>
              </Box>
            </Flex>
          );
        }

export default contato