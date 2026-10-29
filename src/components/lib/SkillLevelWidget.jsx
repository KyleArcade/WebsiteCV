import { Flex, Spacer, Text, Badge } from "@chakra-ui/react";
import { skillLevelPipe } from "../../pipes/skillLevelPipe";

export default function SkillLevelWidget({ skill: skillName, level }) {
    return (
        <Flex p="10px" alignItems="center"
            border={3} bb="gray" shadow="md" rounded="md"
            w="100%">
            <Text>{skillName}</Text>
            <Spacer />
            <Badge variant="surface">
                {skillLevelPipe(level)}
            </Badge>
        </Flex>
    )
}