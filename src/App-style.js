import styled from "styled-components";
export const Wrapper = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(to right bottom, #00f260, #0575e6);
  background-attachment: fixed;
  display: grid;
  grid-template: 1fr / 0.25fr 1fr;
  padding: 1.5em 10em;
  grid-gap: 1rem;

  @media only screen and (max-width: 550px) {
    grid-template: 1fr 1fr/1fr;
    grid-template-areas:
      "Sidediv"
      "Main";
    grid-gap: 1rem;
    padding: 1.5em 3em;
  }
`;
export const Sidediv = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 25px 15px;
  box-shadow: 0 0 10px black;
  text-align: center;
`;
export const Main = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 25px 15px;
  box-shadow: 0 0 10px black;
`;
