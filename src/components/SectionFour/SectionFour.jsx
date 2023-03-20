import React from 'react'
import skills from '../../skills'
import Fade from 'react-reveal/Fade';
import './SectionFour.scss'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Grid, GridItem, Heading, Image, SimpleGrid, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'

const SectionFour = () => {
  return (
    <Box id='skills' style={{marginBottom:'50px'}}>
    <Center>
          <Text fontSize='50px'>Skills</Text>
    </Center>
    <Center m>
      <SimpleGrid w='700px' h='300px' columns={4}  spacing={2}>
  {skills.map((item)=>(
    <Box >
      <Center>
      <Card bg='white'  maxW='sm'>
     <Fade right >   
  <CardBody className='bg' borderRadius='fill'>
          <Image
      w='80px'
      src={item.img}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    
  </CardBody>
  </Fade>
</Card>
      </Center>
    </Box>
  ))}

</SimpleGrid>
    </Center>

    </Box>
 
 
   
  )
}

export default SectionFour