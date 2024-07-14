"use client";
import React, { act, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);
    return (
        <div 
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href="./">
                    <MenuItem setActive={setActive} active={active} item="Home">
                        {/* This button take you to home */}
                    </MenuItem>
                </Link>
                <Link href="#">
                    <MenuItem setActive={setActive} active={active} item="Our Courses">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href='/All courses'>All courses</HoveredLink>
                            <HoveredLink href='/Basic Music Theory'>Basic Music Theory</HoveredLink>
                            <HoveredLink href='/Advance Composition'>Advance Composition</HoveredLink>
                            <HoveredLink href='/Song Writing'>Song Writing</HoveredLink>
                            <HoveredLink href='/Music Production'>Music Production</HoveredLink>
                        </div>
                    </MenuItem>
                </Link>
                <Link href="/contact">
                    <MenuItem setActive={setActive} active={active} item="Contact Us">
                        {/* This button take you to home */}
                    </MenuItem>
                </Link>
                
            </Menu>
        </div>
    );
}

export default Navbar;