import { Flex, Badge } from '@chakra-ui/react';

export default function TagList({ list, direction = "row", ...rest }) {
    return (
        <Flex direction={direction} wrap="wrap">
            {list.map((item, index) => (
                <Badge
                    key={index}
                    {...rest}>
                    {item}
                </Badge>
            ))}
        </Flex>
    );
}
