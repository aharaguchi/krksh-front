"use client"
import { Box, Flex, Text } from "@chakra-ui/react";

// Functionality such as sticking to the top of the page despite scrolling, or mobile behaviour
export default function About() {
    return (
        <Box minWidth="max-content" minHeight="100vh">
            <Flex
                className="aboutflexbox"
                alignItems="center"
                id="about"
            >
                <Box flex="1" w="50vw" pt="20" pl="20" pb="20">
                    <Box pb="5">
                        <Text as="b" fontSize="4xl" color="autumnBlue.600">Who </Text>
                        <Text as="b" fontSize="4xl">am I? </Text>
                        <Text fontSize="sm">I moved to Canada from a sleepy Japanese village called Nozawa Onsen when I was 7 years old. For 5 years I worked in the medical industry in an administration role, with a focus on: addictions, youth and infants, and women's reproductive health.  </Text>
                        <Text fontSize="sm">It's hard to verbalize what I like personally - I'm passionate about humans, and everything that makes us innately so: curiosity, determination, communication, collaboration, affection... so on and so forth.</Text>
                        <Text fontSize="sm">I believe that my interest in software stems from this passion; I just want to be a part of it all. I want to create, collaborate, and connect with other humans around the world. While doing this, I hope to also contribute to something bigger that can help others.</Text>
                    </Box>
                    <Box pb="5">
                        <Text as="b" fontSize="4xl" color="autumnBlue.600" mt="20">Why </Text>
                        <Text as="b" fontSize="4xl">Kurikaeshi? </Text>
                        <Text fontSize="sm">In my career so far as a software engineer, I've prioritized efficiency so that I could 'prove myself'. In exchange I sacrificed curiosity, learning, and ultimately: my passion. </Text>
                        <Text fontSize="sm">Did I even like working on software? Was I ever proud of the work I did? Does it just come down to me not being good or smart enough? Maybe it was time to stop deluding myself and finally call it quits.</Text>

                    </Box>
                    <Box>
                        <Text as="b" fontSize="4xl" color="autumnBlue.600">What </Text>
                        <Text as="b" fontSize="4xl">is this, then? </Text>
                        <Text fontSize="sm">5 months into my unemployment, as I spent my time either grinding LeetCode or anxiously thinking about my bleak future, a thought came to me:</Text>
                        <Text fontSize="sm">What if I tried again? What if I worked on something for myself? If I worked on something I truly wanted to without worrying about proving my worth, where could I go? Even if I do end up calling it quits, wouldn't I be able to do so with my head held high?</Text>
                        <Text fontSize="sm">Kurikaeshi is the manifestation of my personal journey to simply <i>learn</i>. From reading documentation, following the software development lifecycle, to recreating things I've done at work but never quite understood - I want to do it again, and do it right.</Text>

                    </Box>
                </Box>
                <Box flex="1">
                    asdasd
                </Box>
            </Flex>
        </Box>

    );
}
