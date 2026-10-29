import { Stack, Accordion, Button, Text, Box, Separator, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ImageCarousel from "../components/lib/ImageCarousel";
import { Projects } from "../constants/Project";

const items = [
  {
    label: "Mountain Landscape",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    label: "Forest Path",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    label: "Ocean Waves",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    label: "Desert Dunes",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    label: "Sunset Lake",
    url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&q=80&w=2070",
  },
]

export default function WebsiteCV() {
  const projectContent = Projects.find((project) => project.title === "Website CV")

  return (
    <Box maxW="100%" p={30}>
      <Flex
        justify="center"
        marginBottom={5}>
        <Button
          bg={{ base: "primary", _dark: "white" }}
          onClick={() => window.open("https://github.com/KyleArcade/WebsiteCV")}>
          <FontAwesomeIcon icon={faGithub} size="lg" />
          <Text>Website CV</Text>
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
