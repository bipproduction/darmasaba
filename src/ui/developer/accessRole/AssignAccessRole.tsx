'use client'
import { fetchApiClient } from "@/lib/api/fetchApiClient";
import { Button, Card, Flex, Group, MultiSelect, Select, Stack, Title } from "@mantine/core";
import { useState } from "react";

export function AssignAccessRole({ listAccessRole, listUserRole }: { listAccessRole: any[], listUserRole: any[] }) {
    const [accessId, setAccessId] = useState<any>("")
    const [listRole, setlistRole] = useState<any[]>([])

    async function onCreate() {
        const body = {
            accessId: accessId,
            listRole: listRole
        }

        const res = await fetchApiClient.developerAccessRoleAssign({ body: JSON.stringify(body) }).then((res) => res)
    }


    return <Card withBorder pos={"relative"} >
        <Stack>

            <Title order={4}>Assign Access Role</Title>
            <Select onChange={e => setAccessId(e)} maw={300} placeholder="Select access role" label="Access Role" data={listAccessRole.map((item: any) => ({ value: item.id, label: item.name }))} />
            <MultiSelect defaultValue={["2"]} onChange={e => setlistRole(e)} maw={300} withScrollArea multiple placeholder="Select user role" label="User Role" data={listUserRole.map((item: any) => ({ value: item.id, label: item.name }))} />
            <Group justify="right">
                <Button onClick={onCreate}>CREATE</Button>
            </Group>
        </Stack>
    </Card>
}