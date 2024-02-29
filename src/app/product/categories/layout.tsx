import Category from "@/components/Category";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/Toaster";

const Layout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <body >
            <Navbar />
            <div className="flex">
                <Category />
                <div className='container max-w-7xl mx-auto h-full pt-12'>
                    {children}
                </div>
            </div>
            <Toaster />
        </body>
    );
}

export default Layout