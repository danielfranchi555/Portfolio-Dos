import { Center, FormControl, FormHelperText, FormLabel, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const SectionFIve = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'100px'}} >
       <box >
          <Center>
            <h1 style={{fontSize:'40px'}}> Contact me</h1>
          </Center>
          </box>
        <FormControl mt='3rem' 
         maxW={{ base: '50%', sm: '400px' }}
        >      
  <FormLabel >Name</FormLabel>
  <Input variant='filled' placeholder='Name' type='email' />
  <FormLabel >Email </FormLabel>
  <Input variant='filled' placeholder='Email' type='email' />
  <FormLabel >Message</FormLabel>
  <Input type="message" placeholder='Message' variant='filled' h='150px' />
</FormControl>
    </div>
  
  )
}

export default SectionFIve