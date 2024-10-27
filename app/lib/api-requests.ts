export async function getAccessToken() {
  const url = process.env.AUTH_API_ENDPOINT;
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;

  if (
    url === undefined ||
    client_id === undefined ||
    client_secret === undefined
  ) {
    return undefined;
  }

  const u = new URLSearchParams();
  u.append('client_id', client_id);
  u.append('client_secret', client_secret);
  u.append('scope', 'api_romeov2 api_rome-fiches-metiersv1 nomenclatureRome');
  u.append('grant_type', 'client_credentials');

  const response = await fetch(`${url}?realm=partenaire`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: u.toString(),
  });

  const res = await response.json();

  return res.access_token as string;
}

export async function fetchAppelations(libelle: string) {
  const url = `${process.env.FT_API_ENDPOINT}/romeo/v2/predictionMetiers`;

  const access_token = await getAccessToken();

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json; charset=utf-8, application/json',
    },
    body: JSON.stringify({
      appellations: [{ intitule: libelle, identifiant: '1', contexte: '' }],
      options: {
        nomAppelant: 'jfeudeline',
        nbResultats: 10,
        seuilScorePrediction: 0.1,
      },
    }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getFichesMetier() {
  const url = `${process.env.FT_API_ENDPOINT}/rome-fiches-metiers/v1/fiches-rome/fiche-metier`;

  const access_token = await getAccessToken();

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json',
    },
  };

  try {
    const response = await fetch(url, options);
    console.log(response);
    const data = await response.json();

    if (response.ok) return data;
    throw 'erreur';
  } catch (error) {
    console.error(error);
  }
}
