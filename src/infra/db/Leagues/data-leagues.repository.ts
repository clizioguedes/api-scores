import { LeagueRepositoryInterface } from "../../../domain/Leagues/leagues.repository";

import instance from "../../../services/api";
import { LEAGUES } from "../../../constants/endpoints";

export type LeagueProps = {
  campeonato_id: number;
  nome: string;
  slug: string;
  nome_popular: string;
  edicao_atual: {
    edicao_id: number;
    temporada: string;
    nome: string;
    nome_popular: string;
    slug: string;
  };
  fase_atual: {
    fase_id: number;
    nome: string;
    slug: string;
    tipo: string;
    _link: string;
  };
  rodada_atual?: string;
  status: string;
  tipo: string;
  logo: string;
  regiao: string;
  _link: string;
};

export class DataLeagueRepository implements LeagueRepositoryInterface {
  async findAll(): Promise<LeagueProps[]> {
    const leagues: LeagueProps[] = await instance
      .get(LEAGUES)
      .then((response) => response.data);

    return leagues;
  }
}
