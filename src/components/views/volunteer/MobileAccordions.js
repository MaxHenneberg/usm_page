import React from "react";

import {
  Box,
  Button,
  Collapse,
} from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronDownIcon } from "@chakra-ui/icons";

function useShowSections(titles) {
  const [shows, setShows] = React.useState(initShowSections(titles));

  return {
    toggleSection: (title) => {
      Object.keys(shows).forEach(key => {
        if (key === title) {
          shows[key] = !shows[key];
        } else {
          shows[key] = false;
        }
      });
      setShows({ ...shows });
    },
    isSectionVisible: (title) => shows[title],
  };
}

const initShowSections = (titles) => {
  const result = {};
  titles.forEach(title => result[title] = false);
  return result;
}

function MobileAccordions({ accordionSections }) {
  const { toggleSection, isSectionVisible } = useShowSections(accordionSections.map(s => s.title));

  return (
    <>
      {accordionSections.map(section => (
        <Box px="4" position="relative"  w="98%" mx="auto" bgColor="none" mb="6" rounded="2xl">
          <Box boxShadow="lg" borderRadius="24px" bgColor={section.bgColor}>
            <Button
              display="flex" width="100%" height="auto" mx="auto" px="6" py="3" className="berkshire-font" fontSize="18px" color="#5b4c43" bgColor={section.bgColor} rounded="3xl" whiteSpace="break-spaces" textAlign="left" lineHeight="32px"
              onClick={() => toggleSection(section.title)}
              styles={{
                "-webkit-tap-highlight-color": "transparent",
              }}
            >
              <Box flex={1} width="100%" height="auto">
                {section.title}
              </Box>
              {
                isSectionVisible(section.title) ? (
                  <ChevronDownIcon />
                ) : (
                  <ChevronLeftIcon />
                )
              }
            </Button>
            <Collapse style={{marginTop: "-12px", zIndex: 2}} in={isSectionVisible(section.title)} animateOpacity unmountOnExit>
              <Box mx="auto" mt="-1" rounded="2xl">
                {section.content}
              </Box>
            </Collapse>
          </Box>
        </Box>
      ))}
    </>
  );
}

export default MobileAccordions;