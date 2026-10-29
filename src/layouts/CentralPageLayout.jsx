import { Flex, Grid, GridItem } from "@chakra-ui/react"

export default function CentralPageLayout({ children }) {
    return (
        <Flex flex="1" minW="0" minH="0" direction="column">
            <Grid
                templateColumns={{ base: "minmax(0, 1fr)", lg: "repeat(6, minmax(0, 1fr))" }}
                flex="1"
                width="100%"
            >
                <GridItem
                    display={{ base: "none", lg: "block" }}
                    colSpan={{ lg: 1 }}
                >
                </GridItem>
                <GridItem
                    as="main"
                    minW="0"
                    colSpan={{ base: 1, lg: 4 }}
                    bg={{ base: "white", _dark: "black" }}
                >
                    {children}
                </GridItem>
                <GridItem
                    display={{ base: "none", lg: "block" }}
                    colSpan={{ lg: 1 }}
                >
                </GridItem>
            </Grid>
        </Flex>
    )
}
