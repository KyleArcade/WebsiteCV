import TagList from "../components/lib/TagList";
import ThemedImage from "../components/lib/ThemedImage";
import { Experiences } from "../constants/Experiences";
import CentralPageLayout from "../layouts/CentralPageLayout";
import { HStack, Stack, List, Box, Accordion, Heading, Text } from "@chakra-ui/react";

export default function Experience() {
  const experiences = Experiences.toSorted((a, b) => b.startDate - a.startDate);
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric'
  });

  return (
    <CentralPageLayout>
      <Box maxW="100%" p={30}>
        <Stack width="full" maxW="100%">
          <Accordion.Root collapsible defaultValue={[experiences[0].companyName]}>
            {Array.isArray(experiences) && experiences.map((experience) => (
              <Accordion.Item
                key={experience.companyName}
                value={experience.companyName}
              >
                <Accordion.ItemTrigger
                  borderLeftWidth="3px"
                  borderLeftColor="transparent"
                  _open={{
                    _light: { borderLeftColor: "secondary" },
                    _dark: { borderLeftColor: "white" },
                  }}>
                  <Stack direction="column" gap={1}>
                    <HStack gap={4}>
                      <ThemedImage
                        src={experience.logo}
                        darkSrc={experience.darkLogo}
                        alt={experience.companyName}
                        objectFit="cover"
                        width="80px"
                      />
                      <Text color={{ base: "gray.400", _dark: "gray.800" }}>
                        {dateFormatter.format(experience.startDate)} to {experience.isCurrent ? "Current" : dateFormatter.format(experience.endDate)}
                      </Text>
                    </HStack>
                    <HStack marginLeft={3}>
                      <TagList
                        list={experience.stackTags}
                        direction="row"
                        variant="surface" />
                    </HStack>
                  </Stack>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody >
                    <Text textStyle="sm" marginBottom={5}>{experience.content.breif}</Text>
                    <Heading size="sm">Achievements:</Heading>
                    <List.Root listStyleType="disc" ps="5">
                      {Array.isArray(experience?.content?.achievements) &&
                        experience.content.achievements.map((achievement, i) => (
                          <List.Item
                            key={experience.companyName + i}
                            _marker={{ color: "inherit" }}>
                            <Text textStyle="sm">{achievement}</Text>
                          </List.Item>
                        ))}
                    </List.Root>
                  </Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Stack>
      </Box>
    </CentralPageLayout>
  )
}
