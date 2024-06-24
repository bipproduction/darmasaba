'use client'
import { fetchApiClient } from "@/lib/api/fetchApiClient";
import { tos } from "@/lib/toast/toast";
import { Button, Card, Group, Stack, TextInput, Title } from "@mantine/core";
import { useState } from "react";

export function CreateDesa() {
    const [desaName, setDesaName] = useState("")
    async function onCreate() {

        const body = {
            name: desaName
        }
        const res = await fetchApiClient.developerDesaCreate({ body: JSON.stringify(body) })
        tos(res.data.message)

    }
    return <Card withBorder className="gray-light">
        <Stack p={"md"} >
            <Title order={4}> Create Desa</Title>
            <Group>
                <Stack>
                    <TextInput label="Desa Name" placeholder="Desa Name" onChange={(e) => setDesaName(e.target.value)} />
                    <Button onClick={onCreate}>CREATE</Button>
                </Stack>
            </Group>
        </Stack>
    </Card>
}