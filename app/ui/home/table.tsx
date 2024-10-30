'use client';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { useState } from 'react';

interface FicheMetier {
  code: string;
  libelle: string;
}

export function TableFichesDT({
  fichesMetier,
}: {
  fichesMetier: FicheMetier[];
}) {
  console.log(fichesMetier);

  const [rowData] = useState(fichesMetier);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs]: any[] = useState([{ field: 'code' }, { field: 'libelle' }]);

  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} pagination={true} />
    </div>
  );
}

export default function TableFiches({
  fichesMetier,
}: {
  fichesMetier: FicheMetier[];
}) {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {fichesMetier.map((fiche: FicheMetier) => (
              <div
                key={fiche.code}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{fiche.code}</p>
                    </div>
                    <p className="text-sm text-gray-500">{fiche.libelle}</p>
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
              {fichesMetier.map((fiche: FicheMetier) => (
                <tr
                  key={fiche.code}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{fiche.code}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {fiche.libelle}
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
