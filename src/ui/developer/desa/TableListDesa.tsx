'use client'

import { JsonTable } from "@/ui/component/JsonTable"
import { Stack } from "@mantine/core"
import { useShallowEffect } from "@mantine/hooks"
import { useState } from "react"

export function TableListDesa({ listData }: { listData: any[] }) {
    const [listDesa, setlistDesa] = useState(listData)

    return (
        <Stack>
            <JsonTable data={listDesa} />
        </Stack>
    )
}