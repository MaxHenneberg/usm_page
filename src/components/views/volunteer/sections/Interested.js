import React from "react";
import {
  HStack,
  VStack,
  Box,
  Image,
  Button,
  Text,
} from "@chakra-ui/react";

import LineHayatLogo from "../../../../contrib/volunteer/logo-shadow.png";


function RoundedButton({ bgColor, text }) {
  return (
    <Button display="block" px="6" size="sm" rounded="full" bgColor={bgColor} fontFamily="printclearly" fontWeight="700" color="#5b4c43" boxShadow="md"
      _hover={{
        bgColor,
        boxShadow: "xl",
      }}
    >
      <Text fontWeight="900">
        {text}
      </Text>
    </Button>
  );
}

function InterestedSection() {
  return (
    <HStack px={["4", "24"]} py="6" bgColor={["#dfe9e4", "#d1e0e1cc"]} flexWrap={["wrap", "nowrap"]} justifyContent={["center", ""]}>
      <Box flexBasis={["100%", "50%"]}>
        <Image mx="auto" display="block" src={LineHayatLogo} h={["", "100%", "40%", "80%"]} maxHeight="24rem" />
      </Box>
      <Box flexBasis={["100%", "100%", "100%", "50%"]} className="crimson-font" fontWeight="700" textAlign="center" color="#5b4c43">
        <Text mb="4" fontSize="24px" className="berkshire-font">Interested?</Text>
        <Text mb="4" className="crimson-font">Get started with the application process!</Text>
        <VStack mb="8">
          <RoundedButton
            bgColor="#C7DBDC"
            text="Join Now" />
        </VStack>
        <Text mb="4" className="crimson-font">Need more Information?</Text>
        <VStack>
        <RoundedButton
          bgColor="#F6D1C8"
          text="Visit FAQ" />
        </VStack>
      </Box>
    </HStack>
  );
}

export default InterestedSection;