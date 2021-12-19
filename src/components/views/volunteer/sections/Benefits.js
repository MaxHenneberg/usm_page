import React from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";

import FriendImage from "../../../../contrib/volunteer/friend.png";
import CoinImage from "../../../../contrib/volunteer/coin.png";
import BrainImage from "../../../../contrib/volunteer/brain.png";

function Benefit({ title, imgSrc, children }) {
  return (
    <HStack mb={["6", "6", "0", "6"]} flexWrap={["wrap", "wrap", "wrap", "nowrap"]}>
      <VStack mb="4" flexBasis="100%" display={["flex", "flex", "flex", "none"]} px="8">
        <Image src={imgSrc} w={["", "", "40%"]} maxHeight="12rem" />
      </VStack>
      <Box mb={["10"]}>
        <Text mb="4" color="#5B4C43" fontSize="20px" fontWeight="700" className="crimson-font">{title}</Text>
        <Box color="#846859" fontFamily="printclearly" fontWeight="700" fontSize="20px">
          {children}
        </Box>
      </Box>
      <Box display={["none", "none", "none", "block"]} w="480px" px="8">
        <Image src={imgSrc} maxHeight="12rem" />
      </Box>
    </HStack>
  );
}

function BenefitsSection() {
  return (
    <Box px={["4", "4", "24", "24"]} py="6" bgColor={["#d1e0e1cc", "#f3f3f3"]} textAlign="left">
      <Text display={["none", "block"]} mb="4" textAlign={["center", "center", "center", "center"]} color="#5B4C43" className="berkshire-font" fontSize="24px">1.4 Listening Volunteer Benefits</Text>
      <Benefit
        title="1. Token of appreciation"
        imgSrc={CoinImage}>
        <Text mb="3">Listening Volunteers are provided with a certificate of appreciation for their volunteer spirit and generous volunteering work with LineHayat.</Text>
        <Text>This certificate would help our Listening Volunteers to have a valuable and tangible record of their good work.</Text>
      </Benefit>
      <Benefit
        title="2. Tangible interpersonal soft skill development"
        imgSrc={BrainImage}>
        <Text mb="3">Interpersonal soft skills are stepping stones to cultivate a good personality within the USM students.</Text>
        <Text mb="3">Some of the most important transferable interpersonal soft skills that are always needed are communication and listening skills.</Text>
        <Text mb="3">By default, our Listening Volunteers are provided a platform to learn and practice those skills in depth, as the skills are integral to function as our Listening Volunteer.</Text>
        <Text>This will then allow our Listening Volunteers to show a tangible display of those soft skills in their resume or CV, thus increasing the quality of it.</Text>
      </Benefit>
      <Benefit
        title="3. Finding a sense of community"
        imgSrc={FriendImage}>
        <Text mb="3">In order to strengthen an individual’s internal capacity, it is very important to have a support system; a sense of community.</Text>
        <Text mb="3">Our Listening Volunteers are always in good hands, surrounded by like-minded people who are happy to help the university students to increase their own capacity by providing peer support.</Text>
        <Text mb="3">Our Listening Volunteers are also given an invaluable chance to give back to their own community of students, during times of needs.</Text>
        <Text>Having like-minded people around and also having the ability to help others at once, is both a physical accomplishment and also a mental reward for our Listening Volunteers.</Text>
      </Benefit>
    </Box>
  );
}

export default BenefitsSection;