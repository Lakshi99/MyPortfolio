import React from 'react'

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div>
        {
          Projects.map((project, id) => {
           return <div key={id}>
            <img src= {project.imageSrc} alt={ `Image of `${project.title}`}          }
        
        
        </div>
        )
        }
      </div>
    </section>
  )
}

export default Projects
