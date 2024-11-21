"use client"
import NextLink from "next/link"
import { Link } from "@chakra-ui/next-js";
import { Box, Flex, Spacer } from "@chakra-ui/react";

// TODO: mobile behaviour, If at a certain div, light up the link to indicate where we are
export default function Header() {
    return (
        <Flex 
            minWidth="max-content" 
            gap="2" 
            bg="autumnGrey.100" 
            opacity="0.75" 
            position="sticky" 
            top="0" 
            className="divheader" 
            zIndex="5"
        >
            <Box p="6">
                <Link as={NextLink} href="#" p="4">🫠 Kurikaeshi</Link>
            </Box>
            <Spacer />
            <Box p="6">
                <Link as={NextLink} href="#home" p="4" >Home</Link>
                <Link as={NextLink} href="#about" p="4" >About</Link>
                <Link as={NextLink} href="#project" p="4">Projects</Link>
                {/* <Link as={NextLink} href="#blog" p="4">Blog</Link> */}
                {/* <Link as={NextLink} href="#contact" p="4">Contact</Link> */}
            </Box>
        </Flex>
    );
}
