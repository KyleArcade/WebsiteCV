import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Menu, Portal, Avatar, Text } from "@chakra-ui/react";

export default function AvatarDropdown() {
    return (
        <Menu.Root>
            <Menu.Trigger rounded="full" focusRing="outside">
                <Avatar.Root>
                    <Avatar.Image src="/src/assets/KyleAvatar.png" />
                    <Avatar.Fallback delayms={600}>
                        KG
                    </Avatar.Fallback>
                </Avatar.Root>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item value="location"
                            onClick={() => window.open("https://maps.app.goo.gl/WDP5HbxQu2wd1VHR8")}>
                            <FontAwesomeIcon icon={faLocationDot} size="sm" />
                            <Text>Bedford, UK</Text>
                        </Menu.Item>
                        <Menu.Item value="git"
                            onClick={() => window.open("https://github.com/KyleArcade")}>
                            <FontAwesomeIcon icon={faGithub} size="sm" />
                            <Text>Check out my GitHub</Text>
                        </Menu.Item>
                        <Menu.Item value="linkedin"
                            onClick={() => window.open("https://www.linkedin.com/in/kylepjgalbraith")}>
                            <FontAwesomeIcon icon={faLinkedin} size="sm" />
                            <Text>Check out my LinkedIn</Text>
                        </Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}