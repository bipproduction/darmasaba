import { Divider, Stack, Title } from "@mantine/core";
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function Layout({ children }: { children: React.ReactNode }) {

    return (<Stack>
        <Title>Developer Layout</Title>
        <Divider />
        {children}
    </Stack>)
}
