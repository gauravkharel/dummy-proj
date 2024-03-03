import Category from "@/components/Category";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/Toaster";

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <section suppressHydrationWarning >
            <Navbar />
            <section className="flex flex-row">
                <Category />
                <section className='container max-w-7xl mx-auto h-full pt-12'>
                    {children}
                </section>
            </section>
            <Toaster />
        </section>
    );
}

export default Layout