import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" text-red-500">
      <Button> Click</Button>
      Hello Miro App
      <div>
        <UserButton />
      </div>
    </div>
  );
}
