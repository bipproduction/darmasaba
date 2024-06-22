import { AuthProvider } from "@/ui/component/AuthProvider";
import { DashboardHome } from "@/ui/dashboard/DashboardHome";


export default function Page() {
    return <AuthProvider>
        <DashboardHome />
    </AuthProvider>
}
