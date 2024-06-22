import { fetchApiServer } from "@/lib/api/fetchApiServer";
import { Stack, Title } from "@mantine/core";
import { TableListDesa } from "./TableListDesa";

export async function GetListDesa() {
    const listDesa = await fetchApiServer.developerDesaList({}).then(r => r.json())
    return <Stack>
        <Title>ListDesa</Title>
        <TableListDesa listData={listDesa} />
    </Stack>
}