import { Tabs } from "@chakra-ui/react";
import { UserPlus, GlobeCode } from "lucide-react";
import CentralPageLayout from "../layouts/CentralPageLayout";
import EmployeeManager from "./EmployeeManager";
import Skills from "./Skills";
import WebsiteCV from "./WebsiteCV";

export default function Projects() {
  return (
    <CentralPageLayout>
      <Tabs.Root defaultValue="employeeManager">
        <Tabs.List>
          <Tabs.Trigger value="employeeManager">
            <UserPlus size={14} />
            Employee Manager
          </Tabs.Trigger>
          <Tabs.Trigger value="websiteCV">
            <GlobeCode size={14} />
            Website CV
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          value="employeeManager">
          <EmployeeManager />
        </Tabs.Content>
        <Tabs.Content
          value="websiteCV">
          <WebsiteCV />
        </Tabs.Content>
      </Tabs.Root>
    </CentralPageLayout>
  )
}
