import { fetchApiServer } from "@/lib/api/fetchApiServer";
import { Stack, Title } from "@mantine/core";
import { TableUser } from "./TableUser";

export async function GetListUser() {
    const listUser: any[] = await fetchApiServer.developerUserList({}).then(r => r.json())
    return (
        <Stack>
            <Title>List User</Title>
            <TableUser listData={listUser} />
        </Stack>
    )
}