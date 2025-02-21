import React, { useState } from 'react';
import { Container, Heading, FormControl, FormLabel, Input, Textarea, Button, useToast } from '@chakra-ui/react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_a5c5rzh', 'template_bhvy8rt', formData, 'UYWsjFJkDVqTS5jlI')
      .then((response) => {
        toast({
          title: 'Email sent.',
          description: "We've received your message.",
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top',
        });
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        toast({
          title: 'An error occurred.',
          description: "Unable to send your message. Please try again later.",
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top',
        });
      });
  };

  return (
    <Container maxW={'5xl'} py={12}>
      <Heading mb={10}>Contact Us</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" name="name" value={formData.name} onChange={handleChange} />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} />
        </FormControl>
        <FormControl id="message" mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea name="message" value={formData.message} onChange={handleChange} />
        </FormControl>
        <Button colorScheme="teal" type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default Contact;
