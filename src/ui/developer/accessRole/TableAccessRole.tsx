'use client'

import { JsonTable } from "@/ui/component/JsonTable"
import { Stack } from "@mantine/core"

export function TableAccessRole({listData}: {listData: any[]}) {
    return <Stack>
        <JsonTable data={listData} />
    </Stack>
}