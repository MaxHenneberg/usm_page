import React from "react";
import {
  Box,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";

import Form from "../../../../contrib/volunteer/form.png";
import PhoneVolunteer from "../../../../contrib/volunteer/phone-volunteer.png";
import Phone from "../../../../contrib/volunteer/phone.png";
import BlackArrowRight from "../../../../contrib/volunteer/black-arrow-right.svg";

function Description({ text, imgSrc }) {
  return (
    <VStack w={["100%", "100%", "25%"]} mb="16" justifyContent="center">
      <Text mb={["1", "1", "4"]} fontSize={["16px", "16px", "16px", "20px"]} fontWeight="700" className="crimson-font" color="#5b4c43">{text}</Text>
      <Image src={imgSrc} maxHeight="12rem" />
    </VStack>
  );
}

function SequenceArrow() {
  return <Image display={["none", "none", "inline"]} h="24px" src={BlackArrowRight} />;
}

function HowToSection() {
  return (
    <Box px={["4", "4", "24"]} py="6" maxW="100vw" textAlign="center" color="#5b4c43" bgColor="#d1e0e1cc">
      <Text display={["none", "none", "block"]} mb="6" fontSize="24px" color="#5b4c43" fontWeight="700" className="berkshire-font">1.6 How to Become a Listening Volunteer</Text>
      <Box display={["block", "block", "flex"]} w="100%" justifyContent="space-around" spacing="0" alignItems="center">
        <Description
          text="Express your interest by submitting an online Listening Volunteer application form."
          imgSrc={Form} />
        <SequenceArrow />
        <Description
          text="Our committee will contact you soon to set up a phone interview."
          imgSrc={PhoneVolunteer} />
        <SequenceArrow />
        <Description
          text="Once selected, you will start your training."
          imgSrc={Phone} />
      </Box>
    </Box>
  );
}

export default HowToSection;