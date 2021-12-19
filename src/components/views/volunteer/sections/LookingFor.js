import React from "react";
import {
  Box,
  HStack,
  Text,
  Image,
  VStack,
} from "@chakra-ui/react";

import Meditation from "../../../../contrib/volunteer/meditation.png";

function Quality({ title, description }) {
  return (
    <Box mb="4" fontSize="20px">
      <Text color="#5B4C43" className="crimson-font" fontWeight="700">{title}</Text>
      <Text color="#846859" fontFamily="printclearly" fontWeight="700">{description}</Text>
    </Box>
  );
}

function LookingForSection() {
  return (
    <Box p="6" bgColor="#d1e0e1cc" textAlign="left">
      <Text display={["none", "none", "block", "block"]} textAlign={["left", "left", "center", "center"]} mb="4" color="#5B4C43" fontSize="24px" className="berkshire-font">1.2 Whom are we looking for?</Text>
      <VStack display={["flex", "flex", "flex", "none"]} my={["", "", "16", ""]}>
        <Image src={Meditation} maxHeight="12rem" />
      </VStack>
      <HStack justifyContent="space-between" spacing="12" px={["", "", "24", ""]}>
        <Box>
          <Quality
            title="Empathetic"
            description="You are comfortable with your own feelings and able to understand another person’s feelings in a situation from their point of view rather than your own. An empathetic person would be able to recognise a person’s struggle without minimising it. The Sharer's well-being is always the priority." />
          <Quality
            title="Patient and Open-Minded"
            description="You are willing to listen patiently and understand another person’s point of view which may be different from yours, in a very respectful manner." />
          <Quality
            title="Respectful and Mindful"
            description="You know how to respect and be mindful of Sharers who have different beliefs and come from different backgrounds." />
          <Quality
            title="Good communication skills"
            description="You have a good command of your language and you are able to communicate fluently with the Sharers of LineHayat." />
          <Quality
            title="Honest"
            description="You are honest with the type of support we can or cannot offer. You understand your own limits in taking on a call which might be beyond your abilities, and that is alright. Remember the point of volunteering is to help to the best of your abilities, and we all have limitations. Sometimes, saying no is the best way we can help the other person, including the Sharers." />
          <Quality
            title="Confidentiality"
            description="You are able to maintain confidentiality of the conversation with the Sharers. Issues other than those involving risks of suicide or harming themselves/others will not be discussed with another party." />
        </Box>
        <Box display={["none", "none", "none", "block"]}>
          <Image src={Meditation} />
        </Box>
      </HStack>
    </Box>
  );
}

export default LookingForSection;