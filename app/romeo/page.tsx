import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Chercher un libellé ROME
      </h1>

      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <Search placeholder="chercher un libellé..." />
      </div>
    </main>
  );
}
