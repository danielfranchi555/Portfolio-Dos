import { Alert, AlertDescription,Textarea , AlertIcon, AlertTitle, Box, Button, ButtonSpinner, Center, FormControl, FormHelperText, FormLabel, Input, Stack, Text, useToast } from '@chakra-ui/react'
import { useForm, ValidationError } from '@formspree/react';
import React from 'react'

const SectionFIve = () => {
  const [state, handleSubmit] = useForm("meqwzgal");
  const toast = useToast()

  if (state.succeeded) {
    return (
      toast({
      title: `Gracias por comunicarte conmigo`,
      status: 'info',
      isClosable: true,
    })
    )
 

   
}

  
  return (
    <Box id='formulario'  style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#222831',width:'100%'}} >
       <Box>
          <Center>
            <h1 style={{fontSize:'40px',fontWeight:'600',color:'white',margin:'10px'}}> Contactame</h1>
          </Center>
          </Box>
        <form onSubmit={handleSubmit}  mt='3rem' 
         maxW={{ base: '50%', sm: '400px' }}
        >      
  <FormLabel color='white' fontWeight='700' >Name</FormLabel>
  <Input mb='10px' required variant='outline'  placeholder='Name' color='white'  name="Name" id="Name" type='text' />
  <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
  <FormLabel color='white' fontWeight='700' >Email </FormLabel>
  <Input mb='10px' required variant='outline' placeholder='Email' name="Email" color='white'  id="email" type='email' />
  <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
  <FormLabel color='white' fontWeight='700'>Message</FormLabel>
  <Textarea  id="message" name="message"  color='white' placeholder='Mensaje' />
  <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
  <Button disabled={state.submitting} type='submit' mt='20px'  mb='10px' color='teal' variant='outline'> Submit </Button>
</form>
    </Box>
  
  )
}

export default SectionFIve