'use client'

import { Button, Flex, PasswordInput, Stack, Text, TextInput, Title } from "@mantine/core"

export function WithEmail() {
    return <Flex>
        <Stack maw={720} mx="auto" h={"100vh"} p={"md"} align="center" justify="center">
            <Stack miw={264} bg={"teal"} p={"lg"} h={500} style={{ borderRadius: 20 }} justify="center">
                <Title c={"white"}>Login</Title>
                <Stack>
                    <Text>Login With Email</Text>
                    <TextInput label="Email" placeholder="Email" />
                    <PasswordInput label="Password" placeholder="Password" />
                    <Button>Login</Button>
                </Stack>
            </Stack>
        </Stack>
    </Flex>
}