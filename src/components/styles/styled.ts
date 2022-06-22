import styled from 'styled-components'

export const MainContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  background: #004761;
  justify-content: space-evenly;

  @media (min-width: 650px) {
    height: 100%;
    min-height: 100vh;
    width: 100%;
  }
`

export const Button = styled.button`
  box-sizing: border-box;
  flex-shrink: 0;
  border-color: transparent;
  width: 160px;
  height: min-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  overflow: visible;
  border-radius: 24px;

  span {
    flex-shrink: 0;
    width: auto;
    height: auto;
    white-space: pre;
    font-weight: 700;
    font-family: 'Inter-Bold', 'Inter', sans-serif;
    color: #000000;
    font-size: 24px;
    line-height: 1.2;
  }
  &:active {
    background-color: lightgray;
  }
  @media (min-width: 650px) {
    &:hover {
      background-color: lightgray;
      cursor: pointer;
    }
  }
`

export const CountContainer = styled.div`
  flex-shrink: 0;
  width: 160px;
  height: 71px;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  font-weight: 700;
  font-family: 'Inter-Bold', 'Inter', sans-serif;
  color: #8cd6bd;
  font-size: 64px;
  line-height: 1.2;
  text-align: center;
  margin: 90px auto;
`
