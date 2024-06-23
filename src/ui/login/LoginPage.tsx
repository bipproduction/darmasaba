'use client'
import { tos } from "@/lib/toast/toast";
import { ActionIcon, Button, Center, Container, Flex, Group, Loader, NumberInput, PinInput, Stack, Text, TextInput, Title } from "@mantine/core";
import _ from "lodash";
import { useState } from "react";
import appConfig from "../../../app.config";
import { fetchApiClient } from "@/lib/api/fetchApiClient";
import { useLocalStorage } from "@mantine/hooks";
import { MdArrowBackIos } from "react-icons/md";
import { useRouter } from 'next/navigation'


export function LoginPage() {
    const [isPin, setIsInput] = useLocalStorage({ key: "isPin", defaultValue: false })
    const [phoneNumber, setPhoneNumber] = useLocalStorage({ key: "phoneNumber", defaultValue: "" })
    const [code, setCode] = useLocalStorage({ key: "code", defaultValue: "" })

    return (
        <Flex>
            <Stack maw={720} mx="auto" h={"100vh"} p={"md"} align="center" justify="center">
                <Stack miw={264} bg={"blue"} p={"lg"} h={500} style={{ borderRadius: 20 }} justify="center">
                    <Title c={"white"}>Login</Title>
                    {!isPin ? <PhoneInput isPin={isPin} setPin={setIsInput} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} code={code} setCode={setCode} /> :
                        <InputPin isPin={isPin} setPin={setIsInput} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} code={code} setCode={setCode} />}
                </Stack>
            </Stack>
        </Flex>
    )
}

function InputPin({
    isPin,
    setPin,
    phoneNumber,
    setPhoneNumber,
    code,
    setCode
}: {
    isPin: boolean
    setPin: any,
    phoneNumber: string,
    setPhoneNumber: any,
    code: string,
    setCode: any
}) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    async function onPinComplete(value: string) {

        if (value.length === 4) {
            setLoading(true)
            const body = {
                phoneNumber: "62" + phoneNumber,
                code: value
            }

            try {
                const res = await fetchApiClient.otpCompare({ body: JSON.stringify(body) }).then((res) => res)
                const data = await res.json()
                tos(data.message)
                setPin(false)
                setLoading(false)
                router.push("/")
                router.refresh()
            } catch (error) {
                console.log(error)
                tos("nomor telepon atau kode otp tidak cocok")
                setLoading(false)
                return
            }

        }
    }
    return (
        <Stack>
            <Center>
                {loading && <Loader />}
            </Center>
            <Center>
                <PinInput onChange={(value: string) => onPinComplete(value)} />
            </Center>
            <Group>
                <ActionIcon onClick={() => setPin(false)}>
                    <MdArrowBackIos />
                </ActionIcon>
                <Text>Kirim Ulang</Text>
            </Group>
        </Stack>
    )
}

function PhoneInput({
    isPin,
    setPin,
    phoneNumber,
    setPhoneNumber,
    code,
    setCode
}: {
    isPin: boolean
    setPin: any,
    phoneNumber: string,
    setPhoneNumber: any,
    code: string,
    setCode: any
}) {

    const [loading, setLoading] = useState(false)

    async function onSendnumber() {
        setLoading(true)
        if (_.isEmpty(phoneNumber)) {
            return tos("nomor telepon tidak boleh kosong")
        }

        if (phoneNumber.length < 10) {
            return tos("nomor telepon minimal 10 angka")
        }

        const res = await fetchApiClient.otpSend({ body: JSON.stringify({ phoneNumber: "62" + phoneNumber }) })
        if (!res.ok) {
            setLoading(false)
            return tos(await res.text())
        }

        const data = await res.json()
        setCode(data.code)
        tos("kirim otp ke nomor " + phoneNumber)

        setPin(true)
        setLoading(false)
    }

    return (
        <Stack>
            <TextInput onChange={(e) => setPhoneNumber(e.target.value)} leftSection={<Text>+62</Text>} type="number" />
            <Button loading={loading} onClick={onSendnumber} variant="filled" color="lime">KIRIM</Button>
        </Stack>
    )
}

