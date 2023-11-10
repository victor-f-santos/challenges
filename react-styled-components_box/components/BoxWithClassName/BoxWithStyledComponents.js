import styled from "styled-components";

export default function BoxWithStyledComponents({ $isBlack }) {
  const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    /* background-color: ${({ $isBlack }) =>
      $isBlack === "danger"
        ? "var(--secondary-color)"
        : "var(--primary-color)"}; */
    margin: 2rem;
  `;
  return <StyledBox $isBlack></StyledBox>;
}
