import React from "react";

import {
  Box,
  ChakraProvider,
  useMediaQuery,
} from "@chakra-ui/react";

import Hero from "./sections/Hero";
import Role from "./sections/Role";
import LookingFor from "./sections/LookingFor";
import Commitment from "./sections/Commitment";
import Benefits from "./sections/Benefits";
import TrainingSupport from "./sections/TrainingSupport";
import HowTo from "./sections/HowTo";
import Interested from "./sections/Interested";

import MobileAccordions from "./MobileAccordions";

function VolunteerView() {
  const [viewportIsDesktop] = useMediaQuery("(min-width: 768px)");

  return (
    <ChakraProvider>
      <Hero />
      {
        viewportIsDesktop ? (
          <>
            <Role />
            <LookingFor />
            <Commitment />
            <Benefits />
            <TrainingSupport />
            <HowTo />
            <Interested />
          </>
        ) : (
          <Box bgColor="#f3f3f3" pb="8">
            <MobileAccordions
              accordionSections={[
                {
                  title: "1.1 Roles of a Listening Volunteer",
                  bgColor: "#dfe9e4",
                  content: <Role />,
                },
                {
                  title: "1.2 Who are we looking for",
                  bgColor: "#d1e0e1cc",
                  content: <LookingFor />,
                },
                {
                  title: "1.3 Commitment expectations for our Listening Volunteers (Soft Launch)",
                  bgColor: "#dfe9e4",
                  content: <Commitment />,
                },
                {
                  title: "1.4 Listening Volunteer Benefits",
                  bgColor: "#d1e0e1cc",
                  content: <Benefits />,
                },
                {
                  title: "1.5 Training and support for the Listening Volunteers",
                  bgColor: "#dfe9e4",
                  content: <TrainingSupport />,
                },
                {
                  title: "1.6 How to become a Listening Volunteer?",
                  bgColor: "#d1e0e1cc",
                  content: <HowTo />,
                },
                {
                  title: "1.7 Join LineHayat as a Listening Volunteer",
                  bgColor: "#dfe9e4",
                  content: <Interested />
                }
              ]}
            />
          </Box>
        )
      }
    </ChakraProvider>
  )
}

export default VolunteerView;
