
import { AuthProvider } from "@/ui/component/AuthProvider";
import { LandingPage } from "@/ui/landing/Landing";

export default async function Home() {
  return <AuthProvider redirectTo="/dashboard">
    <LandingPage />
  </AuthProvider>
}
