'use client'
import React from 'react'
import Link from "next/link";
import {navLinks} from "@/constants";
import ModeToggle from "@/components/shared/mode-toggle";
import GlobalSearch from "@/app/(root)/_components/global-search";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

function Navbar() {
    const pathName = usePathname()
    return (
        <div className={"h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background"}>
            <div className={" container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between"}>
                <Image src={"/main-img/Brand.png"} alt={"brand"} height={50} width={50} className={"lg:ms-[10px] lg:me-[-120px]"}></Image>
                <Link href={"/"}>
                    <h1 className={"text-4xl font-creteRound"}>EduPress</h1>
                </Link>
                {/*	Nav links*/}
                <div className={'gap-3 px-5 hidden md:flex font-bold'}>
                    {navLinks.map(nav => (
                        <Link
                            href={nav.route}
                            key={nav.route}
                            className={cn("hover:bg-blue-400/20 py-8 px-4 cursor-pointer rounded-sm transition-colors",
                                pathName === nav.route && 'text-orange-400'
                            )}
                        >
                            {nav.name}
                        </Link>
                    ))}
                </div>
                {/*	Search*/}
                <div className={"gap-1 flex items-center"}>
                    <div className="auth">
                        <>
                            <li className="mx-4 mt-5 inline-block">
                                <Link href="/login" className="text-black dark:text-white font-bold">
                                    Login
                                </Link>
                            </li>
                            <li className="mx-4 mb-[2rem] inline-block">
                                <Link href="/register" className="text-black dark:text-white font-bold">
                                    Register
                                </Link>
                            </li>
                        </>
                    </div>
                    <div
                        className={"gap-1 hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors flex items-center"}>
                        <GlobalSearch/>

                    </div>
                    <ModeToggle/>
                </div>

            </div>
        </div>
    )
}

export default Navbar