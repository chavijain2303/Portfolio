import React from "react";
import styled from "styled-components";
import { skills } from "../../data/Constants";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 20px;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 650px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 8px;
  line-height: 28px;

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 90%;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    max-width: 95%;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  margin-top: 40px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    gap: 18px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  @media (max-width: 380px) {
    grid-template-columns: 1fr;
  }
`;

const Skill = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid #854ce6;
  border-radius: 16px;

  padding: 20px;
  min-height: 220px;

  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 480px) {
    padding: 16px;
    min-height: 200px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 16px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 14px;
  color: ${({ theme }) => theme.text_primary};

  border: 1px solid ${({ theme }) => theme.text_primary + 50};
  border-radius: 10px;

  padding: 8px 12px;

  @media (max-width: 600px) {
    font-size: 13px;
    padding: 6px 10px;
  }
`;

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>

        <Desc>
          Here are the key technologies and tools I’ve been working with to
          build data-driven solutions over the past two years.
        </Desc>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={index}>
              <SkillTitle>{skill.title}</SkillTitle>

              <SkillList>
                {skill.skills.map((item, i) => (
                  <SkillItem key={i}>
                    <SkillImage src={item.image} alt={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;