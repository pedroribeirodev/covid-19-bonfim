import styled from 'styled-components';

export const CardCovid = styled.div`
  display: flex;
  justify-content: center;
  li {
    display: flex;
    justify-content: space-around;
    max-width: 1020px;
    width: 100%;
    @media screen and (max-width: 720px) {
      flex-direction: column;
      width: 200px;
      text-align: center;
    }
    > span {
      border-radius: 4px;
      padding: 20px;
      background: rgba(113, 89, 193, 0.1);
      font-size: 14px;
      font-weight: bold;
      margin: 5px 0 20px;
      color: #333;
    }
  }
`;

export const CardNewsList = styled.div`
  margin: 50px auto;
  max-width: 1020px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
      width: 100%;
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

export const Title = styled.h3`
  text-align: center;
  font-weight: bold;
  margin: 10px 0;
`;

export const Alert = styled.h5`
  text-align: center;
`;
