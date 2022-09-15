import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: calc(100vh - 116px);
  background-color: #45a173;
  border-radius: 300px;
  max-width: 1400px;
  min-width: 1200px;
  min-height: 720px;
  margin: 0 auto;
  border: 50px solid #0000003d;
`;

export const Button = styled.button`
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 65px);
  background: #4f4f4f;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  color: #FFFFFF;
  padding: 12px 16px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #747474;
  }
`;