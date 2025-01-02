import React from 'react'
import styled from 'styled-components'
import { certificates } from '../../data/Constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const CertificatesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

const Certificate = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`

const CertificateTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`

const CertificateDesc = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 20px;
`

const CertificateLink = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
`

const Certificates = () => {
  return (
    <Container id="certificates">
      <Wrapper>
        <Title>Certificates</Title>
        <Desc>
          Here are some of the certificates I have earned, showcasing my skills and knowledge.
        </Desc>
        <CertificatesContainer>
          {certificates.map((certificate) => (
            <Certificate key={certificate.id}>
              <CertificateTitle>{certificate.title}</CertificateTitle>
              <CertificateDesc>{certificate.description}</CertificateDesc>
              <CertificateLink href={certificate.img} target="_blank">
                View Certificate
              </CertificateLink>
            </Certificate>
          ))}
        </CertificatesContainer>
      </Wrapper>
    </Container>
  )
}

export default Certificates
