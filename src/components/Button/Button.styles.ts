import styled from "styled-components";

export const Wrapper = styled.button`
  background: var(--darkGrey);
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: var(--white);
  font-size: var(--fontBig);
  margin: 20px auto;
  transition: 0.3s all;
  cursor: pointer;
  display: block;
  border: 0;

  :hover {
    opacity: 0.8;
  }
`;
