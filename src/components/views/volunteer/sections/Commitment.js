import React from "react";
import {
  Box,
  Text,
} from "@chakra-ui/react";

function CommitmentText({ text }) {
  return (
    <Text textAlign={["left", "center"]} px={["", "", "24", ""]} mb="4" fontFamily="printclearly" fontWeight="700" fontSize="20px" color="#846859">
      {text}
    </Text>
  );
}

function CommitmentSection() {
  return (
    <Box textAlign="center" px={["4", "0"]} py="6" bgColor={["#dfe9e4", "#d1e2e3"]}>
      <Text display={["none", "none", "block", "block"]} mb="4" className="berkshire-font" fontSize="24px" fontWeight="700" color="#5B4C43">
        1.3 Commitment expectations for our Listening Volunteers (Soft Launch)
      </Text>
      <CommitmentText text="LineHayat will operate from 10pm to 2am every weekend, excluding public holidays." />
      <CommitmentText text="The Listening Volunteers must be able to commit to a minimum of one shift per week. One shift is 2 hours." />
      <CommitmentText text="Long-term commitment of each Listening Volunteer will depend on their availability." />
      <CommitmentText text="Listening Volunteers must be able to participate in all the training provided by LineHayat, unless otherwise agreed." />
    </Box>
  );
}

export default CommitmentSection;