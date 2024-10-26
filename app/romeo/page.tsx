import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { Suspense } from 'react';
import Table from '@/app/ui/romeo/table';

export default async function Romeo(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Chercher un libellé ROME
      </h1>
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <Search placeholder="chercher un libellé..." />
      </div>

      <Suspense key={query} fallback={<div>Loading...</div>}>
        Resultat de la recherche sur : {query}
        <Table query={query} />
      </Suspense>
    </main>
  );
}
