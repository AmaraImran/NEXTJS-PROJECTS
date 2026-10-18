import Navbar from "@/components/Navbar";
import AuthForm from "@/components/AuthForm";

export default function SignupPage() {
  return (
    <div className="bg-[#F7F4EF] min-h-screen">
      <Navbar dark />
      <div className="flex justify-center px-6 py-12">
        <AuthForm mode="signup" />
      </div>
    </div>
  );
}