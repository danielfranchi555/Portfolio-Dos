import React from 'react'
import skills from '../../skills'
import Fade from 'react-reveal/Fade';
import './SectionFour.scss'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Grid, GridItem, Heading, Image, SimpleGrid, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'

const SectionFour = () => {
  return (
    <Box id='skills' >
    <Center>
          <Text fontSize='50px'>Skills</Text>
    </Center>
    <Center m>
      <SimpleGrid w='700px' h='300px' columns={4}  spacing={2}>
  {skills.map((item)=>(
    <Box >
      <Center>
       <Fade right > 
      <Card bg='white'  maxW='sm'>   
  <CardBody className='bg' borderRadius='fill'>
          <Image
      w='50px'
      src={item.img}
      maxW={{base:'30px',md:'50px'}}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
  
  </CardBody>

</Card>
</Fade>
      </Center>
    </Box>
  ))}

</SimpleGrid>
    </Center>

    </Box>
 
 
   
  )
}

export default SectionFour