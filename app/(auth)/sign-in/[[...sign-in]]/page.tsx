import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white">
      <SignIn />
    </div>
  );
}
