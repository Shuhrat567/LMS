import {ChildProps} from "@/types";
import Navbar from "@/app/(root)/_components/navbar";
import Footer from "@/app/(root)/_components/footer";

function Layout({children}: ChildProps) {
    return (
        <main>
            <Navbar/>
            <div className={'max-w-full mx-auto'}>{children}</div>
            <Footer/>
        </main>)
}

export default Layout