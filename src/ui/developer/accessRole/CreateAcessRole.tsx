'use client'
import { fetchApiClient } from "@/lib/api/fetchApiClient";
import { tos } from "@/lib/toast/toast";
import { Button, Card, Group, Stack, TextInput, Textarea, Title } from "@mantine/core";
import { useState } from "react";

export function CreateAccessRole() {
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")

    async function onCreate() {
        if (name === "" || desc === "") {
            return tos("Please fill all field")
        }

        const res = await fetchApiClient.developerAccessRoleCreate({
            body: JSON.stringify({
                name,
                desc
            })
        }).then(r => r.json())
        tos(res.message)

    }
    return <Card withBorder>
        <Stack>
            <Title order={4}>Create Access Role</Title>
            <Group>
                <Stack>
                    <TextInput onChange={e => setName(e.target.value)} label="Name" placeholder="Name" />
                    <Textarea onChange={e => setDesc(e.target.value)} label="Description" placeholder="Description" />
                    <Button onClick={onCreate}>CREATE</Button>
                </Stack>
            </Group>
        </Stack>
    </Card>
}