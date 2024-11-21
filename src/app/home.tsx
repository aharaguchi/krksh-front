"use client"
import NextLink from "next/link"
import { Link } from "@chakra-ui/next-js";
import { Box, Center, Flex, Text, Stack, Divider, Card, CardBody, Button, HStack, IconButton } from "@chakra-ui/react";
import { DownloadIcon, EmailIcon, ViewIcon } from "@chakra-ui/icons";
import { GithubIcon } from "@/components/UI/icons/github";
import { LinkedinIcon } from "@/components/UI/icons/linkedin";
import homeBackground from "../components/UI/backgrounds/subtle-prism.svg?url";
import Header from "@/components/header";

// TODO: Functionality for mobile behaviour; downloadable resume
export default function Home() {
    return (
        <Box 
            minWidth="max-content" 
            minHeight="100vh"
            bgImage={`url(${homeBackground})`}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
        >
            <Header />
            <Flex
                className="homeflexbox"
                alignItems="center"
                id="home"
            >
                <Box flex="1" w="100%" pt="20" pl="20" pb="20">
                    <Text as="b" fontSize="6xl">Hello, my name is </Text>
                    <Text as="b" fontSize="6xl" color="autumnOrange.500">Akemi. </Text>
                    <Text fontSize="2xl">I'm a Full-Stack Developer.</Text>
                    <HStack pt="5" pb="5">
                        <Link as={NextLink} href="#about">
                            <Button size="md" leftIcon={<ViewIcon />} bg="black" color="white" >About Me</Button>
                        </Link>
                        <Button size="md" leftIcon={<DownloadIcon />} colorScheme="autumnOrange">Resume</Button>
                    </HStack>
                    <HStack gap="5" >
                        <Link as={NextLink} href="#contact">
                            <IconButton aria-label="Contact Me" icon={< EmailIcon />} isRound={true} bg="autumnBlue.600" color="autumnGrey.100"></IconButton>
                        </Link>
                        <IconButton aria-label="Github" icon={< GithubIcon />} isRound={true} bg="autumnBlue.600" color="autumnGrey.100" ></IconButton>
                        <IconButton aria-label="LinkedIn" icon={< LinkedinIcon />} isRound={true} bg="autumnBlue.600" color="autumnGrey.100"></IconButton>
                    </HStack>
                </Box>
                <Center flex="1" w="100%" pr="40">
                    <Card size="lg" variant="outline" p="2">
                        <CardBody>
                            <Stack spacing="0.2" >
                                <Text as="b" fontSize="5xl">繰り・返し</Text>
                                <Text> [kuɾiˈkaeɕi]   <b><i>noun</i></b></Text>
                                <Divider borderColor="black" />
                                <Text>1. Repetition; the act of doing or saying something again. </Text>
                                <Text>2. Reiteration; the action of doing something, typically for emphasis or clarity. </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </Center>
            </Flex>
        </Box>

    );
}
