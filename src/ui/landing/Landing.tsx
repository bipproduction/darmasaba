'use client'

import { Box, Button, Center, Divider, Flex, Image, Stack, Text, Title } from "@mantine/core"
import Link from "next/link"

export function LandingPage() {

    return (
        <Flex>
            <Stack maw={720} mx="auto" h={"100vh"} p={"md"} align="center" justify="center">
                <Center>
                    <Title c={"blue"}>System Desa Mandiri</Title>
                </Center>
                <Box p={"lg"}>
                    <Image maw={500} src={"/assets/img/mobile.webp"} alt="" />
                </Box>
                <Center>
                    <Image maw={100} src={"https://www.techgrapple.com/wp-content/uploads/2016/06/Google-Play-and-App-Store.jpg"} alt="" />
                </Center>
                <Box hiddenFrom="xs">
                    <LoginUntukMelanjutkan />
                </Box>
            </Stack>
            <Divider h={"100vh"} orientation="vertical" />
            <Stack justify="center" h={"100vh"} visibleFrom="sm" mx={"auto"} p={"md"} >
                <LoginUntukMelanjutkan />
            </Stack>

        </Flex>
    )
}

function LoginUntukMelanjutkan() {
    return (
        <Stack w={200} align="center" justify="center" mx={"auto"}>
            <Text style={{
                textAlign: "center"
            }}>silahkan login untuk melanjutkan</Text>
            <Link href={"/login"}><Button size="compact-xs">Login</Button></Link>
        </Stack>
    )
}