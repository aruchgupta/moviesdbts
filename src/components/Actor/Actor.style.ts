import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 5px;
  text-align: center;
  color: var(--white);
  border-radius: 20px;

  h3 {
    margin-top: 10px;
  }

  p {
    margin: 5px 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
`;
