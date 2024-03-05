"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button"
import { SignInButton, SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedIn>
        <SignOutButton>
          <Button>Sign Out</Button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>


      <Button>Testing 123</Button>
       
      
    
    </main>
  );
}
