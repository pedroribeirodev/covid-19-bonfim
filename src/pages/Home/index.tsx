import React, { useState, useEffect } from 'react';

import { CardNewsList } from './styles';

import Header from '../../components/Header';

interface News {
  id: string;
  author: string;
  title: string;
  description: string;
  urlToImage: string;
}

export default function Home() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    async function loadNewsApi() {
      const response = await fetch(
        'http://newsapi.org/v2/top-headlines?country=br&category=health&apiKey=d93ded19ee63433d89c7bb2998259ad9'
      );
      const data = await response.json();

      setNews(data.articles);
    }

    loadNewsApi();
  }, []);

  return (
    <>
      <Header title="Informações Bonfim" />
      <CardNewsList>
        {news.map((item) => (
          <li key={item.id}>
            <img src={item.urlToImage} alt={item.title} />
            <strong>{item.title}</strong>
            <path>{item.description}</path>
          </li>
        ))}
      </CardNewsList>
      <div>
        Esse site não é um meio de divulgação oficial da Prefeitura Municipal de
        Bonfim
      </div>
    </>
  );
}
