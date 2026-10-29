import { Grid, GridItem, Heading, Text, Box, Image, Flex, Separator, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Bio() {
  return (
    <Box maxW="100%" p={30}>
      <Flex justifyContent="center"><Heading>Full-Stack .NET Developer</Heading></Flex>
      <Separator my={4} />
      <Grid templateColumns="repeat(3, 1fr)" gap="2">
        <GridItem colSpan={{ base: 0, md: 1 }}>
          <Image
            objectFit="cover"
            maxW="100%"
            rounded="md"
            src="/src/assets/LandingImage.jpg"
            alt="Kyle"
            display={{ base: "none", md: "block" }}
          />
        </GridItem>
        <GridItem colSpan={{ base: 3, md: 2 }}>
          <Box>
            <Text>
              I have extensive experience designing, building, and deploying scalable web and mobile applications. Adept at leveraging the .NET ecosystem (Core/Framework, ASP.NET, MAUI) alongside modern front-end technologies like TypeScript and Bootstrap to deliver high-performance user experiences. Proven track record in architectural design using Microservices, REST APIs, and RabbitMQ, backed by strong DevOps practices including Azure DevOps CI/CD pipelines. A collaborative team player who thrives in Agile/Scrum environments, passionate about solving complex problems and mentoring new starters to drive team success.
            </Text>
          </Box>
        </GridItem>
      </Grid>
      <Separator my={4} />
      <Flex justifyContent="center" direction={{ base: "column", md: "row" }} gap={4}>
        <Button
          bg={{ base: "primary", _dark: "white" }}
          onClick={() => window.open("https://maps.app.goo.gl/WDP5HbxQu2wd1VHR8")}>
          <FontAwesomeIcon icon={faLocationDot} size="md" />
          <Text>Bedford, UK</Text>
        </Button>
        <Button
          bg={{ base: "primary", _dark: "white" }}
          onClick={() => window.open("https://github.com/KyleArcade")}>
          <FontAwesomeIcon icon={faGithub} size="md" />
          <Text>Check out my GitHub</Text>
        </Button>
        <Button
          bg={{ base: "primary", _dark: "white" }}
          onClick={() => window.open("https://www.linkedin.com/in/kylepjgalbraith")}>
          <FontAwesomeIcon icon={faLinkedin} size="md" />
          <Text>Check out my LinkedIn</Text>
        </Button>
      </Flex>
    </Box>
  )
}
