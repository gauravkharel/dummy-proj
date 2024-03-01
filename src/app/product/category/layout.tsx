import Category from "@/components/Category";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/Toaster";

const Layout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <body suppressHydrationWarning >
            <Navbar />
            <Category />
            <section className='container max-w-7xl mx-auto h-full pt-12'>
                {children}
            </section>
            <Toaster />
        </body>
    );
}

export default Layout