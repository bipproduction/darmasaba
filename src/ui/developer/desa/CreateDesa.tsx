'use client'
import { Button, Group, Stack, TextInput, Title } from "@mantine/core";
import { useState } from "react";

export function CreateDesa() {
    const [desaName, setDesaName] = useState("")

    function onCreate() {
        console.log(desaName)
    }
    return <Stack p={"md"} style={{border: "1px solid black"}}>
        <Title>Create Desa</Title>
        <Group>
            <Stack>
                <TextInput label="Desa Name" placeholder="Desa Name" onChange={(e) => setDesaName(e.target.value)} />
                <Button onClick={onCreate}>CREATE</Button>
            </Stack>
        </Group>
    </Stack>
}