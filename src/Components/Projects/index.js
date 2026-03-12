import React, { useState } from 'react'
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider
} from './ProjectStyle'

import ProjectCard from '../Cards/ProjectCard'
import { projects } from '../../data/Constants'

const Projects = ({ openModal, setOpenModal }) => {

  const [toggle, setToggle] = useState('all')

  return (
    <Container id="projects">
      <Wrapper>

        <Title>Projects</Title>

        <Desc>
          A collection of projects focused on data analytics, software development,
          and learning-based implementations. These projects demonstrate my ability
          to analyze data, build dashboards, design algorithms, and develop
          scalable applications.
        </Desc>

        <ToggleButtonGroup>

          <ToggleButton
            active={toggle === 'all'}
            value="all"
            onClick={() => setToggle('all')}
          >
            ALL
          </ToggleButton>

          <Divider />

          <ToggleButton
            active={toggle === 'Data Analytics'}
            value="Data Analytics"
            onClick={() => setToggle('Data Analytics')}
          >
            DATA ANALYTICS
          </ToggleButton>

          <Divider />

          <ToggleButton
            active={toggle === 'Software'}
            value="Software"
            onClick={() => setToggle('Software')}
          >
            SOFTWARE
          </ToggleButton>

          <Divider />

          <ToggleButton
            active={toggle === 'Learning'}
            value="Learning"
            onClick={() => setToggle('Learning')}
          >
            LEARNING
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
                ))
          }

        </CardContainer>

      </Wrapper>
    </Container>
  )
}

export default Projects