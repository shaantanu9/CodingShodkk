import { Box, Flex, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement | any;
}

type FeatureArray = { featuresList: FeatureProps[] };

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        <Icon as={icon} w={8} h={8} color="red.500" />
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
  return null;
};

export default function SimpleThreeColumns({ featuresList }: FeatureArray) {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {featuresList.map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
