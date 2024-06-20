import { cookies } from 'next/headers'
export default function AuthPtovider({ children }: { children: React.ReactNode }) {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    if (!token) {
        return (
            <div>
                please login
            </div>
        )
    }


    return (
        <div>
            {children}
        </div>
    )
}