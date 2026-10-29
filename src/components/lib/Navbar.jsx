import { Folder, SquarePen, User } from "lucide-react";
import { Tabs, Flex, Text } from "@chakra-ui/react";
import { ColorModeButton } from "../ui/color-mode"
import { useNavigate } from "react-router-dom"
import AvatarDropdown from "./AvatarDropdown";

export default function Navbar() {
    const navigate = useNavigate()
    return (
        <Flex as="nav" p="10px" alignItems="center" justify="space-between"
            bg={{ base: "primary", _dark: "black" }}>
            <AvatarDropdown />
            <Tabs.Root defaultValue="profile" variant="plain">
                <Tabs.List>
                    <Tabs.Trigger value="profile" onClick={() => navigate("/")}
                        color="gray.200"
                        _selected={{
                            color: "white",
                        }}>
                        <User size={18} />
                        <Text
                            display={{ base: "none", md: "block" }}>
                            Profile
                        </Text>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="skills" onClick={() => navigate("/experience")}
                        color="gray.200"
                        _selected={{
                            color: "white",
                        }}>
                        <SquarePen size={18} />
                        <Text display={{ base: "none", md: "block" }}>
                            Experience
                        </Text>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="education" onClick={() => navigate("/projects")}
                        color="gray.200"
                        _selected={{
                            color: "white",
                        }}>
                        <Folder size={18} />
                        <Text
                            display={{ base: "none", md: "block" }}>
                            Projects
                        </Text>
                    </Tabs.Trigger>
                </Tabs.List>
            </Tabs.Root>
            <ColorModeButton />
        </Flex>
    )
}