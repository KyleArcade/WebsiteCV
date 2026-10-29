import { Flex, Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/lib/Navbar"

export default function RootLayout() {
  return (
    <Box bgColor={{ base: "tertiary", _dark: "gray.800" }}>
      <Flex minH="100dvh" direction="column">
        <Navbar />
        <Flex as="main" flex="1" minW="0" minH="0">
          <Outlet />
        </Flex>
      </Flex>
    </Box>
  )
}
