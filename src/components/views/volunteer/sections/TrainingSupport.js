import React from "react";
import {
  Box,
  Text,
} from "@chakra-ui/react";

function Description({ title, description }) {
  return (
    <Box mb="6" fontSize="20px" fontWeight="700" px={["0", "0", "12"]} textAlign={["left", "left", "center"]}>
      <Text mb="1" color="#5B4C43" className="crimson-font">{title}</Text>
      <Text color="#846859" fontFamily="printclearly">{description}</Text>
    </Box>
  );
}

function TrainingSupportSection() {
  return (
    <Box px={["4", "4", "24"]} py="6" textAlign="center" bgColor={["#dfe9e4", "#dfe9e4", "#d1e2e3"]} rounded={["2xl", "2xl", "none"]}>
      <Text display={["none", "none", "block"]} mb="4" fontSize="24px" className="berkshire-font" textAlign={["left", "left", "center"]} color="#5B4C43">1.5 Training and support for the Listening Volunteers</Text>
      <Description
        title="Training"
        description="You’ll be provided with high quality and adequate training to prepare you for the role. The training will be held in three consecutive weekends, making it 6 sessions in total. It would take one month of training before you can listen to the Sharers." />
      <Description
        title="Mentoring"
        description={
          <>
            <Text>Once you've completed the training, you'll be assigned to a Mentor -</Text>
            <Text>an experienced Listening Volunteer who will be supporting you during the first month of your shifts.</Text>
          </>
        }
      />
      <Description
        title="Support"
        description="You’ll never be alone at LineHayat. We are a group of supportive committees and volunteers who are always here to support you." />
    </Box>
  );
}

export default TrainingSupportSection;