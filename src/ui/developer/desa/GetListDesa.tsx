import { fetchApiServer } from "@/lib/api/fetchApiServer";
import { Stack, Title } from "@mantine/core";
import { TableListDesa } from "./TableListDesa";

export const dynamic= "force-dynamic"
export const revalidate = 0
export async function GetListDesa() {
    const listDesa = (await fetchApiServer.developerDesaList({})).data
    return <Stack>
        <Title>ListDesa</Title>
        <TableListDesa listData={listDesa} />
    </Stack>
}