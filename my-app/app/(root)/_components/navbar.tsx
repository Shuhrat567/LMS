import React from 'react'
import Link from "next/link";
import {navLinks} from "@/constants";
import ModeToggle from "@/components/shared/mode-toggle";
import GlobalSearch from "@/app/(root)/_components/global-search";
import Image from "next/image";

function Navbar() {
    return (
        <div className={"h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background"}>
            <div className={" container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between"}>
                <Image src={"/main-img/Brand.png"} alt={"brand"} height={50} width={50} className={"me-[-180px]"}></Image>
                <Link href={"/"}>
                    <h1 className={"text-4xl font-creteRound"}>EduPress</h1>
                </Link>
                {/*	Nav links*/}
                <div className={'gap-2 hidden md:flex'}>
                    {navLinks.map(nav => (
                        <Link
                            href={nav.route}
                            key={nav.route}
                            className={"hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors"}
                        >
                            {nav.name}
                        </Link>
                    ))}
                </div>
                {/*	Search*/}
                <div className={"gap-1 flex items-center"}>
                    <div>Login / Register</div>
                    <div className={"gap-1 hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors flex items-center"}>
                        <GlobalSearch/>

                    </div>
                    <ModeToggle/>
                </div>

            </div>
        </div>
    )
}

export default Navbar