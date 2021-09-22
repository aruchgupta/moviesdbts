import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  background: var(--darkGrey);
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  height: 55px;
  width: 100%;
  background: var(--medGrey);
  border-radius: 40px;
  color: var(--white);
  margin: 0 auto;

  img {
    position: absolute;
    left: 15px;
    top: 50%;
    width: 30px;
    transform: translateY(-50%);
  }

  input[type="text"] {
    font-size: var(--fontBig);
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);
  }
`;
