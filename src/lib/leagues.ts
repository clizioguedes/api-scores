import { LeagueProps } from "../domain/Leagues/leagues.entity";

export type LeaguePropsRepository = {
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
  rodada_atual?: {
    nome: string;
    slug: string;
    rodada: number;
    status: string;
  };
  status: string;
  tipo: string;
  logo: string;
  regiao: string;
  _link: string;
};

export function getLeagues(data: LeaguePropsRepository[]): LeagueProps[] {
  return data.map((item: LeaguePropsRepository) => ({
    ...getLeague(item),
  }));
}

export function getLeague(data: LeaguePropsRepository): LeagueProps {
  return {
    leagueId: data.campeonato_id,
    name: data.nome,
    slug: data.slug,
    popularName: data.nome_popular,
    currentEdition: {
      editionId: data.edicao_atual.edicao_id,
      season: data.edicao_atual.temporada,
      name: data.edicao_atual.nome,
      popularName: data.edicao_atual.nome_popular,
      slug: data.edicao_atual.slug,
    },
    currentFase: {
      faseId: data.fase_atual.fase_id,
      name: data.fase_atual.nome,
      slug: data.fase_atual.slug,
      type: data.fase_atual.tipo,
      _link: data.fase_atual._link,
    },
    currentRound: {
      name: data.rodada_atual?.nome,
      slug: data.rodada_atual?.slug,
      round: data.rodada_atual?.rodada,
      status: data.rodada_atual?.status,
    },
    status: data.status,
    type: data.tipo,
    logo: data.logo,
    country: data.regiao,
    _link: data._link,
  };
}
