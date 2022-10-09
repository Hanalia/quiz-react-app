import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 600px;
  border-radius: 10px;
  padding: 20px;
  text-align: center;

  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
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

//    background: ${({ userClicked }) =>
//userClicked
//? "linear-gradient(90deg, #FF5656, #C16868)"
//: "linear-gradient(90deg, #56ccff, #6eafb4)"};
