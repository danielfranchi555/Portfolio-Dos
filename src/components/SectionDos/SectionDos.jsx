import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Zoom from "react-reveal/Zoom";
import proyectos from '../../proyectos'
import "./SectionDos.scss";
import {motion} from 'framer-motion'
const SectionDos = () => {
  return (
    <Stack id="proyectos" bg='#222831'> 
    <Center>
      <Text fontSize='40px' color='white'>Proyectos</Text>
    </Center>
        <Wrap justify='center' h='auto' m='20px'>
      {proyectos.map((item)=>(
        <Zoom>
             <WrapItem mb='20px' >
               <Card   bg='#393e46' h='auto'
    maxW='290px'>
  <Stack p={2}>
    <Image
      src={item.img}
      objectFit='cover'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      h='auto'
    />
    <Stack mt='5'  h='150px'  spacing='3'>
      <Stack  h='130px'>
         <Heading  size='md' color='white'>{item.title}</Heading>
      <Text fontSize={14} color='white' >
        {item.description}
      </Text>
      </Stack>
     
      <Stack   w='100%'>
    <ButtonGroup spacing='2' >
      <a href={item.link} target="_blank" >
         <Button as={motion.div}           whileHover={{ scale: 1.1 }} size='sm' variant='outline' border='solid 1px teal'  color='#29a19c'>
        Demo
      </Button>
      </a>
      <Button cursor='pointer' size='sm' as={motion.div} whileHover={{ scale: 1.1 }}   variant='outline' border='solid 1px teal'  color='#29a19c'>
        Github
      </Button>
    </ButtonGroup>
  </Stack>
    </Stack>
  </Stack>
  <Divider />
 
</Card>
         </WrapItem>
        </Zoom>
      
      ) )}
  </Wrap>
    </Stack>

  );
};

export default SectionDos;
