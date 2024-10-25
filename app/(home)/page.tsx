import { lusitana } from '@/app/ui/fonts';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Les API Rome et Romeo de France Travail
      </h1>

      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        Ici décrire les API de France Travail et les fonctionnalités disponibles
        sur l&#39;app.
      </div>
    </main>
  );
}
