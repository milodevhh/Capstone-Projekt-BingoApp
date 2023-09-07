import { styled } from "styled-components";

export const StyledForm = styled.form`
  gap: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & label:last-of-type {
    margin-top: 1rem;
  }

  & input {
    padding: 0.8rem;
  }

  & select {
    padding: 1rem;
  }
`;
