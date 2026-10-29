import { Tabs } from "@chakra-ui/react";
import { CircleUserRound, Wrench, BookOpenCheck } from "lucide-react";
import CentralPageLayout from "../layouts/CentralPageLayout";
import Bio from "./Bio";
import Skills from "./Skills";
import Education from "./Education";

export default function Profile() {
  return (
    <CentralPageLayout>
      <Tabs.Root defaultValue="bio">
        <Tabs.List>
          <Tabs.Trigger value="bio">
            <CircleUserRound size={14} />
            Bio
          </Tabs.Trigger>
          <Tabs.Trigger value="skills">
            <Wrench size={14} />
            Skils
          </Tabs.Trigger>
          <Tabs.Trigger value="education">
            <BookOpenCheck size={14} />
            Education
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          value="bio">
          <Bio />
        </Tabs.Content>
        <Tabs.Content
          value="skills">
          <Skills />
        </Tabs.Content>
        <Tabs.Content
          value="education">
          <Education />
        </Tabs.Content>
      </Tabs.Root>
    </CentralPageLayout>
  )
}
