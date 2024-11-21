'use client'
import { Box } from "@chakra-ui/react";
import Home from "./home";
import About from "./about";

export default function Page() {
  return (
    <Box bg="#FAFBFC">
      {/* < Header/> */}
      < Home/>
      < About/>
      {/* < Contact/> */}
    </Box>
  );
}
