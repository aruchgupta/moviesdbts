import styled from "styled-components";

export const Image = styled.img`
  border-radius: 20px;
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0.2;
    }
    to {
      opacity: 1;
    }
  }
`;
