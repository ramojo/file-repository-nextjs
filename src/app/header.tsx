import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export function Header() {
    return <div className="border-b py-4 bg-blue-50">
        <link rel="icon" href="/images/favicon/favicon.ico" sizes="any" />
        <div className="items-center container mx-auto justify-between flex">
            {/* justify-between centres items vertically within a flex box item-center centres items horizontally within a flex box */}
            <div>



                NextJS File Repository for Patrice
            </div>
            <div className="flex gap-2">
                <OrganizationSwitcher />
                <UserButton />
            </div>
        </div>
    </div>
}
