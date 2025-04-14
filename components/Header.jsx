// components/Header.js
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-[#1E3A8A] text-white py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <a className="flex items-center">
            <Image src="/logo-narrativ.PNG" alt="Narrativ Logo" width={40} height={40} />
            <span className="ml-2 text-2xl font-bold">Narrativ</span>
          </a>
        </Link>
        <div className="space-x-4">
          <Link href="/">
            <a className="hover:text-[#2DD4BF]">Accueil</a>
          </Link>
          <Link href="#signup">
            <a className="bg-[#2DD4BF] text-white px-4 py-2 rounded-lg hover:bg-bleu-nuit transition">
              S’inscrire
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}