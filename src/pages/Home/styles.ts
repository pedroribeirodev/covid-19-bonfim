import styled from 'styled-components';

export const CardCovid = styled.div`
  display: flex;
  justify-content: center;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    background: rgba(113, 89, 193, 0.1);
    img {
      align-self: center;
      max-width: 250px;
    }
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
  }
`;

export const CardNewsList = styled.div`
  margin: 50px auto;
  max-width: 1020px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  a {
    text-decoration: none;
    color: #333;
    display: flex;
    flex-direction: column;
    background: rgba(113, 89, 193, 0.1);
    border-radius: 4px;
    padding: 20px;
  }
  li {
    img {
      align-self: center;
      max-width: 300px;
      display: block;
    }
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 10px;
      font-weight: bold;
      display: block;
    }
    > span {
      color: #575763;
      display: block;
      font-size: 12px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
  }
`;
