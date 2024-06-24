import { fetchApiServer } from "@/lib/api/fetchApiServer";
import { Card, Flex, Group, Paper, Stack, Title } from "@mantine/core";
import { TableUser } from "./TableUser";
import { CreateUser } from "./CreateUser";
import { UpdateUser } from "./UpdateUser";

export async function MainUser() {
    const listUser: any[] = (await fetchApiServer.developerUserList({})).data || []
    const listDesa: any[] = (await fetchApiServer.developerDesaList({})).data || []
    const listUserRole: any[] = (await fetchApiServer.developerUserRoleList({})).data || []
    const listJabatan: any[] = await (await fetchApiServer.developerJabatanList({})).data || []
    return (
        <Paper withBorder p={"md"}>
            <Stack>
                <Title >List User</Title>
                <Flex gap={"md"} wrap={"wrap"}>
                    <CreateUser desaList={listDesa} listUserRole={listUserRole} listJabatan={listJabatan} />
                    <UpdateUser listUser={listUser} />
                </Flex>
                <TableUser listData={listUser} />
            </Stack>
        </Paper>
    )
}