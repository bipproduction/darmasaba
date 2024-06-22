import { fetchApiServer } from "@/lib/api/fetchApiServer";
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { LandingPage } from "../landing/Landing";
export async function AuthProvider({ children, redirectTo }: { children: React.ReactNode, redirectTo?: string }) {
    const cookieStore = cookies()
    const token = cookieStore.get('token')

    const user = await fetch(fetchApiServer.paths().userGetToken, {
        headers: {
            'Authorization': `Bearer ${token?.value || ""}`
        }
    })

    if (user.ok && user.status === 200 && redirectTo) {
        return redirect(redirectTo)
    }

    if (!token || !token.value) {
        return <LandingPage />
    }

    return (
        <div>{children}</div>
    );
}