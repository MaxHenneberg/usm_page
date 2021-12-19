import React from "react";

import {
  Stack,
  Box,
  Image,
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";

import ListeningVolunteer from "../../../../contrib/volunteer/listening-volunteer.png";
import Handshake from "../../../../contrib/volunteer/handshake.png";
import ProudGirl from "../../../../contrib/volunteer/proud-girl.png";

function ContentText({ text }) {
  return (
    <Box minWidth="200px" w="18%">
      <Text textAlign="center" fontWeight="700" className="crimson-font" color="#5B4C43">{text}</Text>
    </Box>
  );
}

function ContentImage({ imgSrc, text }) {
  return (
    <VStack mb={["36px", "36px", "36px", "0"]} justifyContent="center" minWidth="200px" w={["100%", "100%", "100%", "18%"]}>
      <Box>
        <Text display={["block", "block", "block", "none"]} mb="4" className="crimson-font" fontSize="18px" fontWeight="700" color="#5b4c43" textAlign="center">{text}</Text>
        <Image mx="auto" src={imgSrc} maxHeight="12rem" />
      </Box>
    </VStack>
  );
}

function RoleSection() {
  return (
    <Box mx="auto" mt="0" pt={["12", "12", "12", "8"]} bgColor={["#dfe9e4", "#dfe9e4", "#f3f3f3"]} fontSize="20px" boxShadow={["md", "md", "none"]} rounded={["2xl", "2xl", "none"]}>
      <Text display={["none", "none", "block", "block"]} mb="6" fontSize={["24px"]} className="berkshire-font" color="#5B4C43" textAlign="center">
        1.1 Roles of a Listening Volunteer
      </Text>
      <HStack display={["none", "none", "none", "flex"]} justifyContent="space-around" mb="4">
        <ContentText text="To listen to Sharers without judgement." />
        <ContentText text="To support Sharers at difficult times." />
        <ContentText text="To be able to receive training from available Mentors." />
      </HStack>
      <Stack px={["20px", "20px", "20px", "0"]} flexDirection={["column", "column", "column", "row"]} justifyContent={["center", "center", "center", "space-around"]}>
        <ContentImage imgSrc={ListeningVolunteer} text="To listen to Sharers without judgement." />
        <ContentImage imgSrc={Handshake} text="To support Sharers at difficult times." />
        <ContentImage imgSrc={ProudGirl} text="To be able to receive training from available Mentors." />
      </Stack>
    </Box>
  );
}

export default RoleSection;