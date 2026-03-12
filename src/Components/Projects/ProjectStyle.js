import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );

  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;
  max-width: 1350px;

  padding: 10px 20px 100px 20px;

  gap: 12px;
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 30px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 650px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 15px;
  }
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;

  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.primary + 20};
  `}

  &:hover {
    background: ${({ theme }) => theme.primary + 8};
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;

export const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

/* FIXED PROJECT GRID */

export const CardContainer = styled.div`
  width: 100%;
  margin-top: 30px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 28px;

  /* Tablet */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile (2 compact cards) */
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;