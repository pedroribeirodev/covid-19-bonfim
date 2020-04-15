import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { CardNewsList, CardCovid, Title, Alert } from './styles';

import Header from '../../components/Header';

interface News {
  id: string;
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

interface Cases {
  city: string;
  confirmed: number;
  date: Date;
  deaths: number;
}

export default function Home() {
  const [news, setNews] = useState<News[]>([]);
  const [cases, setCases] = useState<Cases[]>([]);

  useEffect(() => {
    async function loadNewsApi() {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=br&category=health&apiKey=d93ded19ee63433d89c7bb2998259ad9'
      );
      const data = await response.json();

      setNews(data.articles);
    }

    loadNewsApi();
  }, []);

  useEffect(() => {
    async function loadCovidInfo() {
      const response = await fetch(
        'https://brasil.io/api/dataset/covid19/caso/data?state=MG&city=Bonfim&is_last=true'
      );

      const data = await response.json();

      setCases(data.results);
    }

    loadCovidInfo();
  }, []);

  return (
    <>
      <Header title="Informações Bonfim" />
      <Title>
        Informações baseadas no boletim epidemiológico da Secretaria do Estado
        de Minas Gerais
      </Title>
      <CardCovid>
        {cases.map((item) => (
          <li>
            <span>
              Cidade:
              {item.city}
            </span>
            <span>
              Casos confirmados:
              {item.confirmed}
            </span>
            <span>
              Número de óbitos:
              {item.deaths}
            </span>
            <span>
              Data atualização:
              {item.date}
            </span>
          </li>
        ))}
      </CardCovid>
      <Title>Notícias atualizadas sobre o Covid-19 no Brasil</Title>
      <CardNewsList>
        {news.map((item) => (
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <li key={item.id}>
              <img src={item.urlToImage} alt={item.title} />
              <strong>{item.title}</strong>
              <span>{item.description}</span>
              <span>
                <b>Ler mais...</b>
              </span>
            </li>
          </a>
        ))}
      </CardNewsList>
      <Alert>
        ** Esse site não é um meio de divulgação oficial da Prefeitura Municipal
        de Bonfim
      </Alert>
    </>
  );
}
