import { ArrowLeftCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-8">
      <h1 className="text-3xl font-semibold">Grespr Assessment</h1>
      <h2 className="text-2xl font-medium">Dummy Project</h2>
      <div className="flex flex-col gap-2 underline text-2xl text-gray-500 font-medium">
          <Link href={'/product'}>Browse all products </Link>
          <Link href={'/product/category'}>Browse by categories </Link>
      </div>
    </main>
  );
}
