import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-8">
        <h1 className="text-3xl font-semibold">Grespr Assessment</h1>
        <h2 className="text-2xl font-medium">Dummy Project</h2>
      <div className="flex gap-2 text-2xl text-green-500 font-medium">

        <Link href={'/product'}>Browse all products</Link>
          <Link href={'product/categories'}>Browse by categories</Link>
      </div>
    </main>
  );
}
