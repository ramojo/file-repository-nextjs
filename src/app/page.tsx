"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button"
import { SignInButton, SignedIn, SignedOut, SignOutButton, useOrganization, useUser } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";


export default function Home() {
  const organization  = useOrganization(); // If user has an organization use this
  const user = useUser() // If user doesn't have an organization and is using a personal account use this
  let orgId: string = null;
  if(organization.isLoaded && user.isLoaded) {
    orgId = organization.organization?.id ?? user.user?.id;
  };
  // const orgId = organization?.id ?? user.user?.id;
  const createFile = useMutation(api.files.createFile);
  const files = useQuery(
    api.files.getFiles,
    orgId ? { orgId } : 'skip',
  );

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

      {files?.map(file => {
        return <div key={file._id}>{file.name} - {file.orgId}</div>
      })}

      <Button
        onClick={() => {
          if (!orgId) return;
          createFile({
            name: "Uploaded file",
            orgId,
          });
        }}
      > 
        Upload file
      </Button>
       
      
    
    </main>
  );
}
