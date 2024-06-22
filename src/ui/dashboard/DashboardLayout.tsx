import { Flex, Stack } from "@mantine/core";
import { LogoutButton } from "../logout/LogoutButton";
import { cookies } from "next/headers"

export async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = cookies()
    const token = cookieStore.get('token')

    return <Stack>
        <LogoutButton />
        <Flex>
            <Stack visibleFrom="sm" bg={"blue"}>
                ini adalah samping kiri
            </Stack>
            <Stack>{children}</Stack>
        </Flex>
    </Stack>;
}