import { fetchApiClient } from "@/lib/api/fetchApiClient"
import { fetchApiServer } from "@/lib/api/fetchApiServer"
import { Card, Flex, Stack, Title } from "@mantine/core"
import { TableAccessRole } from "./TableAccessRole"
import { CreateAccessRole } from "./CreateAcessRole"
import { AssignAccessRole } from "./AssignAccessRole"
import { UpdateAccessRole } from "./UpdateAccessRole"

export async function MainAccessRole() {
    const listData = (await fetchApiServer.developerAccessRoleList({})).data || []
    const listUserRole = (await fetchApiServer.developerUserRoleList({})).data || []
    return <Card withBorder>
        <Stack>
            <Title>List Access Role</Title>
            <Flex wrap={"wrap"} gap={"md"}>
                <CreateAccessRole />
                <AssignAccessRole listAccessRole={listData} listUserRole={listUserRole} />
                <UpdateAccessRole />
            </Flex>
            <TableAccessRole listData={listData} />
        </Stack>
    </Card>
}