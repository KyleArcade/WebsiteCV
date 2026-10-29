import { Stack, Accordion, Button, Text, Box, Separator, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ImageCarousel from "../components/lib/ImageCarousel";
import { Projects } from "../constants/Project";

export default function EmployeeManager() {
  const projectContent = Projects.find((project) => project.title === "Employee Manager")

  return (
    <Box maxW="100%" p={30}>
      <Flex
        justify="center"
        marginBottom={5}>
        <Button
          bg={{ base: "primary", _dark: "white" }}
          onClick={() => window.open("https://github.com/KyleArcade/EmployeeManager")}>
          <FontAwesomeIcon icon={faGithub} size="lg" />
          <Text>Employee Manager</Text>
        </Button>
      </Flex>
      <ImageCarousel images={projectContent.images} />
      <Separator my={4} />
      <Stack width="full" maxW="100%">
        <Accordion.Root collapsible defaultValue={[projectContent.sections[0].title]}>
          {Array.isArray(projectContent.sections) && projectContent.sections.map((content) => (
            <Accordion.Item key={content.title} value={content.title}>
              <Accordion.ItemTrigger
                borderLeftWidth="3px"
                borderLeftColor="transparent"
                _open={{
                  _light: { borderLeftColor: "secondary" },
                  _dark: { borderLeftColor: "white" },
                }}>
                <Text marginLeft={2}>{content.title}</Text>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody>
                  <Text textStyle="sm" marginBottom={5}>{content.content}</Text>
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Stack>
    </Box>
  )
}
