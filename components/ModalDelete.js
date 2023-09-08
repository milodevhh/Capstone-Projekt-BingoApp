import styled from "styled-components";
import { StyledButton } from "./StyledButton";

export default function ModalDelete({ setModal, handleDelete, id }) {
  return (
    <Modal>
      <Container>
        <h2>Are you sure, Do you want to delete the card?</h2>
        <Wrapper>
          <StyledButton type="button" onClick={() => setModal(false)}>
            Cancel
          </StyledButton>
          <StyledButton type="button" onClick={() => handleDelete(id)}>
            Delete
          </StyledButton>
        </Wrapper>
      </Container>
    </Modal>
  );
}
const Modal = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  background: rgba(0, 0, 0, 0.85);
`;
const Container = styled.div`
  width: min(calc(100vw - 4rem), 600px);
  margin-inline: auto;
  padding: 1rem;
  border-radius: var(--border-radius);
  background: white;
  & h3 {
    max-width: 60%;
  }
  & p {
    margin-top: 1rem;
  }
`;
const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;
