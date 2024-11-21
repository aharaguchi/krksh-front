"use client"
import { Box, Button, Card, CardBody, Flex, FormControl, FormLabel, Input, Stack, Text, Textarea } from "@chakra-ui/react";

// Functionality such as sticking to the top of the page despite scrolling, or mobile behaviour
export default function Contact() {
    return (
        <Box minWidth="max-content" minHeight="100vh">
            <Flex
                className="aboutflexbox"
                alignItems="center"
                id="contact"
            >
                <Box flex="1" w="50vw" p="20">
                    <Card size="lg" variant="outline" p="2">
                        <CardBody>
                            <FormControl>
                            <Stack spacing="0.2" >
                                <FormLabel>Name</FormLabel>
                                <Input placeholder="Name" isRequired/>
                                <FormLabel>E-mail Address</FormLabel>
                                <Input type="email" placeholder="E-mail Address"/>
                                <FormLabel>Subject</FormLabel>
                                <Input placeholder="Subject"/>
                                <FormLabel>Message</FormLabel>
                                <Textarea placeholder="Message"/>
                                <Button mt={4} colorScheme="autumnBlue" type="submit">asda</Button>
                            </Stack>

                            </FormControl>
                            
                        </CardBody>
                    </Card>
                </Box>
                <Box flex="1" w="50vw" p="20">
                    <Text as="b" fontSize="5xl">Let's get in </Text>
                    <Text as="b" fontSize="5xl" color="autumnOrange.500">touch!</Text>
                    <Text>
                        If you have any interesting open source projects or you're part of a not-for-profit that needs some software engineers, I'd love to hear from you! Likewise, if you have any job opportunities I'm always searching for something that interests me. I guess you can use the form to say hi, too. I don't know if I'll reply to those, though.
                    </Text>

                </Box>
            </Flex>
        </Box>

    );
}
