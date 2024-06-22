'use client'
import { JsonTable } from "@/ui/component/JsonTable";
import { fetchApiClient } from "@/lib/api/fetchApiClient";
import { Stack } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";

export function TableUser({ listData }: { listData: any[] }) {
    const [listUser, setListUser] = useState<any[] | null>(listData)
    useShallowEffect(() => {
        fetchApiClient.developerUserList({}).then(r => r.json()).then((r) => setListUser(r))
    }, [])

    return (
        <Stack>
            {<JsonTable data={listUser} />}
        </Stack>
    )
}