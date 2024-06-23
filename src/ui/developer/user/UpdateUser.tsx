import { Button, Card, Select, Stack, Title } from "@mantine/core";

export function UpdateUser({ listUser }: { listUser: any[] }) {
    return <Card withBorder pos={"relative"} className="gray-light">
        <Stack>
            <Title order={4}>Update User</Title>
            <Select miw={200} label="User" placeholder="Select user" data={listUser.map((item: any) => ({ value: item.id, label: item.name }))} />
            <Button>UPDATE</Button>
        </Stack>
    </Card>
}