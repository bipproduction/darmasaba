import { Stack, Title } from "@mantine/core";
import { GetListDesa } from "./desa/GetListDesa";
import { MainUser } from "./user/MainUser";
import { MainDesa } from "./desa/MainDesa";
import { MainJabatan } from "./jabatan/MainJabatan";
import { MainUserRole } from "./userRole/MainUserRole";
import { MainAccessRole } from "./accessRole/MainAccessRole";

export function Developer() {
    return (
        <Stack gap={"md"} p={"md"}>
            <Title>Developer Data</Title>
            <MainDesa />
            <MainUser />
            <MainJabatan />
            <MainUserRole />
            <MainAccessRole />
        </Stack>
    )
}