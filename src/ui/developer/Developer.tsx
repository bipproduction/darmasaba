import { Stack, Title } from "@mantine/core";
import { GetListDesa } from "./desa/GetListDesa";
import { GetListUser } from "./user/GetListUser";
import { MainDesa } from "./desa/MainDesa";

export function Developer() {
    return (
        <Stack gap={"md"} p={"md"}>
            <Title>Developer Data</Title>
            <MainDesa />
            <GetListUser />
        </Stack>
    )
}