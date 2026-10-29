import { Grid, GridItem, SimpleGrid, Card, Heading, Text, Box, Image, Flex, Separator, HStack, Stack, Button } from "@chakra-ui/react";
import { ExternalLink } from "lucide-react";
import { Certifications } from "../constants/Certifications";
import ThemedImage from "../components/lib/ThemedImage";

export default function Education() {
  const certifications = Certifications.toSorted((a, b) => b.completionDate - a.completionDate);
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric'
  });

  return (
    <Box maxW="100%" p={30}>
      <Flex justifyContent="center"><Heading>University</Heading></Flex>
      <Separator my={4} />
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        <GridItem colSpan={{ base: 0, md: 1 }}>
          <Image
            objectFit="cover"
            maxW="100%"
            rounded="md"
            src="/src/assets/Graduation.jpg"
            alt="Kyle"
            display={{ base: "none", md: "block" }}
          />
        </GridItem>
        <GridItem colSpan={{ base: 6, md: 5 }}>
          <Box>
            <Heading>University of Lincoln</Heading>
            <HStack gap={4}>
              <Heading size="sm">Bsc (Hons) Computer Science</Heading>
              <Heading size="sm">2:2</Heading>
            </HStack>
            <Text textStyle="sm">
              During my time at the University of Lincoln, I pursued a degree in Computer Science, where I gained a solid foundation in programming, algorithms, and software development principles. The curriculum provided me with hands-on experience in various programming languages and frameworks, allowing me to develop practical skills that are essential for a career in technology. I also had the opportunity to work on collaborative projects, enhancing my teamwork and communication abilities. Overall, my education at the University of Lincoln has equipped me with the knowledge and skills necessary to excel in the field of software development.
            </Text>
          </Box>
        </GridItem>
      </Grid>
      <Separator my={4} />
      <Flex justifyContent="center"><Heading>Certifications</Heading></Flex>
      <Separator my={4} />
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={4}>
        {Array.isArray(certifications) && certifications.map(cert => (
          <Card.Root key={cert.title} p={2} borderWidth={1} borderRadius="md" boxShadow="md" size="sm">
            <Card.Body>
              <HStack mb="6" gap="3">
                <ThemedImage
                  src={cert.iconSrc}
                  darkSrc={cert.darkIconSrc}
                  alt={`${cert.issuer} logo`}
                  objectFit="cover"
                  maxW="30%"
                  rounded="md" />
                <Stack gap="0">
                  <Text fontWeight="semibold" textStyle="sm">
                    {cert.title}
                  </Text>
                  <Text color="fg.muted" textStyle="sm">
                    {cert.issuer} - {dateFormatter.format(cert.completionDate)}
                  </Text>
                </Stack>
              </HStack>
            </Card.Body>
            <Card.Footer>
              <Button size="xs"
                bg={{ base: "primary", _dark: "white" }}
                onClick={() => window.open(cert.credentialSrc)}>
                <ExternalLink />
                View Credential
              </Button>
            </Card.Footer>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Box>
  )
}
