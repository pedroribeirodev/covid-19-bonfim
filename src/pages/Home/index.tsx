import React, { useState, useEffect } from 'react';

import { CardNewsList, CardCovid } from './styles';

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
  state: string;
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
  /* 
  useEffect(() => {
    async function loadCovidInfo() {
      const response = await fetch(
        'https://brasil.io/api/dataset/covid19/caso/data?state=MG&city=Bonfim&is_last=true'
      );

      const data = await response.json();

      setCases(data.results);
    }

    loadCovidInfo();
  }, []); */

  return (
    <>
      <Header title="Informações Bonfim" />
      {/*       <CardCovid>
        <h3>Números Covid-19 Bonfim-MG</h3>
        {cases.map((item) => (
          <li>
            <span>
              Estado:
              {item.state}
            </span>
            <span>
              Cidade:
              {item.city}
            </span>
            <span>
              Casos confirmados:
              {item.confirmed}
            </span>
            <span>
              Data atualização:
              {item.date}
            </span>
          </li>
        ))}
      </CardCovid>
      <h2>Notícias do Covid-19</h2> */}
      <CardNewsList>
        {news.map((item) => (
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <li key={item.id}>
              <img src={item.urlToImage} alt={item.title} />
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </li>
          </a>
        ))}
      </CardNewsList>
      <div>
        Esse site não é um meio de divulgação oficial da Prefeitura Municipal de
        Bonfim
      </div>
    </>
  );
}
