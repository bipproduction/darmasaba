import { fetchApiServer } from "@/lib/api/fetchApiServer";
import { Card, Stack, Title } from "@mantine/core";
import { TableUserRole } from "./TableUserRole";

export async function MainUserRole() {
    const listData = (await fetchApiServer.developerUserRoleList({})).data || []
    return <Card withBorder>
        <Stack>
            <Title>List UserRole</Title>
            <TableUserRole listData={listData} />
        </Stack>
    </Card>
}