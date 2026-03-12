import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: none;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
`;

const Card = styled.div`
  width: 330px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 12px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;

  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 40px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.05);
  }

  &:hover ${Button} {
    display: block;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 360px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-radius: 10px;
  background: ${({ theme }) => theme.white};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 4px 10px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Date = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const Description = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary + 99};

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  margin-top: 6px;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

const Avatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>

      <ImageContainer>
        <Image src={project.image} alt={project.title} />
      </ImageContainer>

      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>

      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>

      <Members>
        {project.member?.map((member, index) => (
          <Avatar key={index} src={member.img} alt="member" />
        ))}
      </Members>

      {/* <Button>View Project</Button> */}

    </Card>
  );
};

export default ProjectCards;