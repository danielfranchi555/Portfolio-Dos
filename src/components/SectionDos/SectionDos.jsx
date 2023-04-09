import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
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
               <Card  w='330px' bg='#393e46' h='390px'
    maxW='400px'>
  <CardBody>
    <Image
      src={item.img}
      objectFit='cover'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      h='auto'
    />
    <Stack mt='3'   spacing='3'>
      <Heading size='md' color='white'>{item.title}</Heading>
      <Text color='white' >
        {item.description}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <a href={item.link} target="_blank" >
         <Button size='sm' variant='outline' border='solid 1px teal'  color='#29a19c'>
        Demo
      </Button>
      </a>
      <Button size='sm'   variant='outline' border='solid 1px teal'  color='#29a19c'>
        Github
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
         </WrapItem>
        </Zoom>
      
      ) )}
  </Wrap>
    </Stack>

  );
};

export default SectionDos;
