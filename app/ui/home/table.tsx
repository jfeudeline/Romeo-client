import { getFichesMetier } from '@/app/lib/api-requests';

type FicheEmploi = {
  code: string;
  metier: {
    code: string;
    libelle: string;
  };
};

export default async function TableFiches() {
  const fiches = await getFichesMetier();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {fiches.map((fiche: FicheEmploi) => (
              <div
                key={fiche.code}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{fiche.metier.code}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {fiche.metier.libelle}
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
                  Code
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Libellé
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {fiches.map((fiche: FicheEmploi) => (
                <tr
                  key={fiche.code}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{fiche.metier.code}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {fiche.metier.libelle}
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
