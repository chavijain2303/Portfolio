import styled from 'styled-components';

export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: 1.5rem;
`;

export const SocialMediaIcon = styled.a`
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  font-size: 20px;

  color: ${({ theme }) => theme.text_primary};

  background: rgba(255,255,255,0.05);

  border: 1px solid rgba(255,255,255,0.08);

  transition: all 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    background: rgba(133,76,230,0.15);
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0px 8px 18px rgba(133,76,230,0.35);
  }
`;