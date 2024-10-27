import { lusitana } from '@/app/ui/fonts';
import TableFiches from '@/app/ui/home/table';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Les Métiers du ROME 4.0
      </h1>
      <TableFiches />
    </main>
  );
}
