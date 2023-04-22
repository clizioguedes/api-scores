export const LEAGUES = "/competitions";
export const COUNTRIES = "/areas";
export const LEAGUE_BY_CODE = (code: string) => `/competitions/${code}`;
export const STANDING_LEAGUE_BY_ID = (code: string) =>
  `/competitions/${code}/standings`;
export const MATCHES_LEAGUE_BY_ID = (code: string) =>
  `/competitions/${code}/matches`;
