import { lusitana } from '@/app/ui/fonts';
import TableFiches from '@/app/ui/home/table';
import { getFichesMetier } from '../lib/api-requests';


interface FicheMetier {
 code: string,
 metier: {
  code:string,
  libelle:string,
 }
}

export default async function Home() {

  const fichesMetier = await getFichesMetier();

  const fiches = fichesMetier.map((fiche: FicheMetier) => {
    return {
      code: fiche.metier.code,
      libelle: fiche.metier.libelle,
    }

  })
  
  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Les Métiers du ROME 4.0
      </h1>
      <h2 className={`${lusitana.className} mb-4 text-l md:text-2xl`}>
        Les fiches métier
      </h2>
      <TableFiches fichesMetier={fiches} />
    </main>
  );
}
