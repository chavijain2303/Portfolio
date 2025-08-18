import React, { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectStyle'
import ProjectCard from '../Cards/ProjectCard'
import { projects } from '../../data/Constants'

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects including web apps, dashboards, AI/ML systems, and database solutions. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {/* All */}
          <ToggleButton
            active={toggle === 'all'}
            value="all"
            onClick={() => setToggle('all')}
          >
            ALL
          </ToggleButton>
          <Divider />

          {/* Web Apps */}
          <ToggleButton
            active={toggle === 'web app'}
            value="web app"
            onClick={() => setToggle('web app')}
          >
            WEB APPS
          </ToggleButton>
          <Divider />

          {/* Full Stack */}
          <ToggleButton
            active={toggle === 'full stack'}
            value="full stack"
            onClick={() => setToggle('full stack')}
          >
            FULL STACK
          </ToggleButton>
          <Divider />

          {/* Dashboards */}
          <ToggleButton
            active={toggle === 'dashboard'}
            value="dashboard"
            onClick={() => setToggle('dashboard')}
          >
            DASHBOARDS
          </ToggleButton>
          <Divider />

          {/* Database */}
          <ToggleButton
            active={toggle === 'database'}
            value="database"
            onClick={() => setToggle('database')}
          >
            DATABASE
          </ToggleButton>
          <Divider />

          {/* AI/ML */}
          <ToggleButton
            active={toggle === 'AI/ML'}
            value="AI/ML"
            onClick={() => setToggle('AI/ML')}
          >
            AI / ML
          </ToggleButton>
          <Divider />

          {/* Machine Learning (if separate from AI/ML) */}
          <ToggleButton
            active={toggle === 'machine learning'}
            value="machine learning"
            onClick={() => setToggle('machine learning')}
          >
            MACHINE LEARNING
          </ToggleButton>
          <Divider />

          {/* Backend */}
          <ToggleButton
            active={toggle === 'backend'}
            value="backend"
            onClick={() => setToggle('backend')}
          >
            BACKEND
          </ToggleButton>
          <Divider />

          {/* Competitive Programming */}
          <ToggleButton
            active={toggle === 'competitive programming'}
            value="competitive programming"
            onClick={() => setToggle('competitive programming')}
          >
            COMPETITIVE PROGRAMMING
          </ToggleButton>
          <Divider />

          {/* Utility */}
          <ToggleButton
            active={toggle === 'utility'}
            value="utility"
            onClick={() => setToggle('utility')}
          >
            UTILITIES
          </ToggleButton>
          <Divider />

          {/* Algorithmic Problem-Solving */}
          <ToggleButton
            active={toggle === 'algorithmic problem-solving'}
            value="algorithmic problem-solving"
            onClick={() => setToggle('algorithmic problem-solving')}
          >
            ALGORITHMIC
          </ToggleButton>
        </ToggleButtonGroup>

        <CardContainer>
          {toggle === 'all'
            ? projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))
            : projects
                .filter((item) => item.category === toggle)
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                  />
                ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
