import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, ButtonSpinner, Center, FormControl, FormHelperText, FormLabel, Input, Stack, Text } from '@chakra-ui/react'
import { useForm, ValidationError } from '@formspree/react';
import React from 'react'

const SectionFIve = () => {
  const [state, handleSubmit] = useForm("meqwzgal");
  if (state.succeeded) {
    return <Center>
      <Alert
      mt='100px'
    status='success'
    variant='subtle'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    height='130px'
    style={{borderRadius:'5px'}}
  >
    <AlertIcon boxSize='40px'  mr={0} />
    <AlertTitle mt={4} mb={1} fontSize='lg'>
            Gracias Por Contactarte conmigo!!
    </AlertTitle>
    <AlertDescription maxWidth='sm'>
    </AlertDescription>
  </Alert></Center> 
}

  
  return (
    <Box  style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#455d7a',width:'100%'}} >
       <Box>
          <Center>
            <h1 style={{fontSize:'40px',fontWeight:'600',color:'white',margin:'10px'}}> Contact me</h1>
          </Center>
          </Box>
        <form onSubmit={handleSubmit}  mt='3rem' 
         maxW={{ base: '50%', sm: '400px' }}
        >      
  <FormLabel >Name</FormLabel>
  <Input mb='10px' required variant='filled' placeholder='Name' name="Name" id="Name" type='text' />
  <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
  <FormLabel >Email </FormLabel>
  <Input mb='10px' required variant='filled' placeholder='Email' name="Email" id="email" type='email' />
  <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
  <FormLabel >Message</FormLabel>
  <Input mb='10px' required type="text" placeholder='Message' name="message" id="message"  variant='filled' h='150px' />
  <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
  <Button disabled={state.submitting} type='submit' mt='20px'  mb='10px' bg='#3a3939' color='white'> Submit </Button>
</form>
    </Box>
  
  )
}

export default SectionFIve