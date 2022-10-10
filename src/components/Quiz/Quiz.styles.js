
import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const FadeIn = styled.div`
  animation: ${fadeIn} .5s ease-in-out;
`;
export const Wrapper = styled.div`
  max-width: 600px;
  border-radius: 10px;
  padding: 20px;
  text-align: center;

  p {
    font-size: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    font-size: 0.8rem;
    width: 100%;
    height: 50px;
    margin: 5px 0;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    color: black;
  }

  button:focus + .icon {
    color: #c0392b;
  }
  .icon {
    font-size: 20px;
    background: ${({ userClicked }) =>
		userClicked
			? "linear-gradient(90deg, #FF5656, #C16868)"
			: "linear-gradient(90deg, #56ccff, #6eafb4)"};
  }
`;
