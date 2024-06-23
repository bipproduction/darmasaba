'use client'
import { Button, Card, Group, Select, Stack, TextInput, Title } from "@mantine/core";
import { useState } from "react";

export function CreateUser({ desaList, listUserRole, listJabatan }: { desaList: any[], listUserRole: any[], listJabatan: any[] }) {
    const [name, setName] = useState("")

    function onCreate() {

    }
    return <Card withBorder maw={"50%"} className="gray-light">
        <Stack>
            <Title order={4}>Create User</Title>
            <Group>
                <TextInput miw={200} label="Name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <Select miw={200} label="Desa" placeholder="Select desa" data={desaList.map((item: any) => ({ value: item.id, label: item.name }))} />
                <Select miw={200} label="User Role" placeholder="Select user role" data={listUserRole.map((item: any) => ({ value: item.id, label: item.name }))} />
                <Select miw={200} label="Jabatan" placeholder="Select jabatan" data={listJabatan.map((item: any) => ({ value: item.id, label: item.name }))} />
                <TextInput miw={200} label="Email" placeholder="Email" />
                <TextInput miw={200} label="Password" placeholder="Password" />
                <TextInput miw={200} leftSection={<span>+62</span>} label="Phone" placeholder="phone" />
            </Group>
            <Group justify="right">
                <Button onClick={onCreate}>CREATE</Button>
            </Group>
        </Stack>
    </Card>
}