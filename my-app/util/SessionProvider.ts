'use client'

import {SessionProvider} from "next-auth/react";

// @ts-ignore
const AuthProvider = ({children}) => {
    // @ts-ignore
    return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider