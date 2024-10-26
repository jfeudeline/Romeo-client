import { fetchAppelations } from '@/app/lib/api-requests';

type ResAppellation = {
  libelleAppellation: string;
  codeAppellation: string;
  scorePrediction: number;
};

export default async function TableIntitulles({ query }: { query: string }) {
  if (query === '') return <h2>Cherchez un métier !</h2>;

  const appellations = await fetchAppelations(query);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {appellations[0].metiersRome.map((libelle: ResAppellation) => (
              <div
                key={libelle.codeAppellation}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{libelle.libelleAppellation}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {libelle.scorePrediction}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Intitullé
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Score
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {appellations[0].metiersRome.map((libelle: ResAppellation) => (
                <tr
                  key={libelle.codeAppellation}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{libelle.libelleAppellation}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {libelle.scorePrediction}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
