import { Box, Flex, Heading, Card, Separator, SimpleGrid, VStack } from "@chakra-ui/react";
import { TechnicalSkills } from "../constants/TechnicalSkills";
import SkillLevelWidget from "../components/lib/SkillLevelWidget";

export default function Skills() {
  const skills = TechnicalSkills;

  return (
    <Box maxW="100%" p={30}>
      <Flex justifyContent="center"><Heading>Technical Skills</Heading></Flex>
      <Separator my={4} />
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={4}>
        {Array.isArray(skills) && skills.map(skill => (
          <Card.Root key={skill.title} p={4} borderWidth={1} borderRadius="md" boxShadow="md" size="sm">
            <Card.Title mt="2" mb={2}>{skill.title}</Card.Title>
            <Card.Body>
              <VStack gap={2} w="100%">
                {Array.isArray(skill.skills) && skill.skills.toSorted((a, b) => b.level - a.level).map(s => (
                  <SkillLevelWidget key={s.name} skill={s.name} level={s.level} />
                ))}
              </VStack>
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Box>
  )
}
