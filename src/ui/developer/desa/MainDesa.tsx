import { Card, Paper, Stack } from "@mantine/core";
import { GetListDesa } from "./GetListDesa";
import { CreateDesa } from "./CreateDesa";

export function MainDesa() {
    return <Paper withBorder p={"md"}>
        <Stack>
            <CreateDesa />
            <GetListDesa />
        </Stack>
    </Paper>
}