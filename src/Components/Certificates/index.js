import React from 'react'
import styled from 'styled-components'
import { certificates } from '../../data/Constants'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 80px 20px;
position: relative;
z-index: 1;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
max-width: 1200px;
gap: 20px;
`

export const Title = styled.div`
font-size: 44px;
font-weight: 700;
text-align: center;
color: ${({ theme }) => theme.text_primary};

@media (max-width: 768px) {
  font-size: 30px;
}
`

export const Desc = styled.div`
font-size: 18px;
text-align: center;
max-width: 650px;
line-height: 1.6;
color: ${({ theme }) => theme.text_secondary};

@media (max-width: 768px) {
  font-size: 15px;
}
`

const CertificatesContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 30px;
margin-top: 40px;

/* Keep 2 cards on tablets */
@media (max-width: 900px) {
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

/* 2 compact cards on mobile */
@media (max-width: 600px) {
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}
`

const Certificate = styled.div`
background: linear-gradient(
145deg,
rgba(20,20,40,0.9),
rgba(10,10,25,0.9)
);

border: 1px solid rgba(133,76,230,0.4);

box-shadow: 0px 10px 30px rgba(133,76,230,0.15);

border-radius: 16px;

padding: 28px 24px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

transition: all 0.35s ease;

min-height: 220px;

&:hover{
transform: translateY(-6px) scale(1.02);
box-shadow: 0px 20px 40px rgba(133,76,230,0.3);
border-color: #854ce6;
}

/* Compact mobile cards */
@media (max-width: 600px) {
  padding: 18px 14px;
  min-height: 180px;
}
`

const CertificateTitle = styled.h2`
font-size: 24px;
font-weight: 600;
color: ${({ theme }) => theme.text_primary};
margin-bottom: 12px;
text-align: center;

@media (max-width: 600px) {
  font-size: 16px;
}
`

const CertificateDesc = styled.p`
font-size: 14px;
color: ${({ theme }) => theme.text_secondary};
text-align: center;
line-height: 1.5;
margin-bottom: 16px;

@media (max-width: 600px) {
  font-size: 12px;
}
`

const CertificateLink = styled.a`
display: inline-block;

background: linear-gradient(135deg,#854CE6,#6C3FD4);

color: white;

padding: 8px 18px;

border-radius: 8px;

font-size: 14px;

font-weight: 600;

text-decoration: none;

transition: all 0.25s ease;

&:hover{
transform: translateY(-2px);
box-shadow: 0px 8px 20px rgba(133,76,230,0.5);
}

@media (max-width: 600px) {
  font-size: 12px;
  padding: 6px 14px;
}
`

const Certificates = () => {
  return (
    <Container id="certificates">

      <Wrapper>

        <Title>Certificates</Title>

        <Desc>
          Here are some of the certifications I earned during my academic journey, reflecting my skills in data analytics, programming, development, and business intelligence.
        </Desc>

        <CertificatesContainer>

          {certificates.map((certificate) => (

            <Certificate key={certificate.id}>

              <CertificateTitle>
                {certificate.title}
              </CertificateTitle>

              <CertificateDesc>
                {certificate.description}
              </CertificateDesc>

              <CertificateLink
                href={certificate.img}
                target="_blank"
                rel="noopener noreferrer"
              >
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