import { fetchApiServer } from "@/lib/api/fetchApiServer";
import { Card, Paper, Stack, Title } from "@mantine/core";
import { TableJabatan } from "./TableJabatan";

export async function MainJabatan() {
    const listData = (await fetchApiServer.developerJabatanList({})).data
    return <Paper withBorder p={"md"}>
        <Stack>
            <Title>List Jabatan</Title>
            <TableJabatan listData={listData} />
        </Stack>
    </Paper>
}