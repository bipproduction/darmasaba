'use client'
import { fetchApiClient } from "@/lib/api/fetchApiClient";
import { Button } from "@mantine/core";
import { useRouter } from 'next/navigation'
import { useState } from "react";

export function LogoutButton() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    async function onLogout() {
        setLoading(true)
        const res = await fetchApiClient.userLogout({}).then((res) => res)
        router.replace("/login")
        setLoading(false)

    }
    return <div>
        <Button size="compact-xs" loading={loading} onClick={onLogout}>Logout</Button>
    </div>

}