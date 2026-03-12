import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "../Cards/ExperienceCard";
import { experiences } from "../../data/Constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 40px 0px 80px 0px;

  @media (max-width: 960px) {
    padding: 20px 10px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  padding: 60px 0;
  gap: 12px;

  @media (max-width: 960px) {
    padding: 40px 10px;
  }
`;

const Title = styled.div`
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

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    margin-top: 10px;
    font-size: 15px;
    padding: 0 10px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const StyledTimeline = styled(Timeline)`
  padding: 0;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const StyledTimelineItem = styled(TimelineItem)`
  &:before {
    flex: 0;
    padding: 0;
  }
`;

const StyledTimelineContent = styled(TimelineContent)`
  padding: 12px 16px;

  @media (max-width: 768px) {
    padding: 8px 0px;
    width: 100%;
  }
`;

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>

        <Desc>
          My work experience as a software engineer and working on different
          companies and projects.
        </Desc>

        <TimelineSection>
          <StyledTimeline>
            {experiences.map((experience, index) => (
              <StyledTimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== experiences.length - 1 && (
                    <TimelineConnector style={{ background: "#854CE6" }} />
                  )}
                </TimelineSeparator>

                <StyledTimelineContent>
                  <ExperienceCard experience={experience} />
                </StyledTimelineContent>
              </StyledTimelineItem>
            ))}
          </StyledTimeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Experience;