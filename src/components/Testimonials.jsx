// src/components/Testimonials.jsx
import { Box, Container, Heading, Text, SimpleGrid, Avatar, Stack } from '@chakra-ui/react';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, Tech Company',
    content: 'The cybersecurity services provided by this company are top-notch. They helped us secure our systems and prevent potential threats.',
  },
  {
    name: 'Jane Smith',
    role: 'CTO, Fintech Firm',
    content: 'Professional and efficient, they provided us with excellent cybersecurity solutions tailored to our needs.',
  },
];

const Testimonials = () => (
  <Box py={20} bg="gray.50">
    <Container maxW="6xl">
      <Heading as="h2" size="xl" textAlign="center" mb={10}>
        Testimonials
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" bg="dark">
            <Stack spacing={4}>
              <Text>"{testimonial.content}"</Text>
              <Stack direction="row" spacing={4} align="center">
                <Avatar name={testimonial.name} />
                <Stack spacing={0}>
                  <Text fontWeight="bold">{testimonial.name}</Text>
                  <Text>{testimonial.role}</Text>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  </Box>
);

export default Testimonials;
