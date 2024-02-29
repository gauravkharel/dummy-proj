import Link from 'next/link'

interface NavbarProps {
  
}

const Navbar = ({ }) => {
    return (
      <div className="fixed top-0 inset-x-0 h-fit bg-white border-b border-zinc-300 z-[10] py-2">
        <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
          <Link href={'/'}>Grepsr</Link>
          <Link href={'/product'}>Browse all products</Link>
          <Link href={'product/categories'}>Browse by categories</Link>
          <Link href={'/login'}>Sign In</Link>
        </div>
      </div>
    )
  }
  
  export default Navbar