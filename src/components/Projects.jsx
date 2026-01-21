import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      title: 'Omnidirectional Hydrophone Design',
      description: 'Designed an omnidirectional hydrophone from concept to manufacturing at Massa Products Corporation. Developed elastomer molding strategy, mechanical mounting brackets, and CNC/3D-printed assembly fixtures. Created COMSOL multiphysics models to evaluate acoustic output, mechanical stress, and electrical coupling.',
      tags: ['COMSOL', 'SolidWorks', 'CNC', '3D Printing', 'Acoustic Design'],
      link: '#',
      images: [], // Add image URLs here
      details: [
        'Designed elastomer molding strategy for acoustic elements',
        'Created mechanical mounting brackets and assembly fixtures',
        'Developed COMSOL models for acoustic output evaluation',
        'Validated mechanical stress and electrical coupling',
        'Managed full product lifecycle from concept to manufacturing'
      ],
      technologies: ['COMSOL Multiphysics', 'SolidWorks', 'CNC Machining', '3D Printing', 'FEA', 'Acoustic Simulation']
    },
    {
      title: 'Automated Material Sorting System',
      description: 'Led development of an automated material sorting system by designing custom test fixtures via 3D-printed prototyping and developing computer-vision software in Python. Reduced quality-control processing time by 80%.',
      tags: ['Python', 'Computer Vision', '3D Printing', 'Automation'],
      link: '#',
      images: [],
      details: [
        'Designed and prototyped custom test fixtures using 3D printing',
        'Developed computer vision algorithms in Python for material identification',
        'Reduced quality-control processing time by 80%',
        'Integrated automation workflow for production line'
      ],
      technologies: ['Python', 'OpenCV', 'Computer Vision', '3D Printing', 'Automation', 'Image Processing']
    },
    {
      title: '1U Cubesat – NU Aerospace',
      description: 'Optimized camera payload bracket design under mass constraints using SolidWorks FEA, validating structural performance. Fabricated and assembled flight-hardware components using CNC machining and 3D printing, producing GD&T drawings.',
      tags: ['SolidWorks', 'FEA', 'CNC', 'Aerospace', 'GD&T'],
      link: '#',
      images: [],
      details: [
        'Optimized bracket design under strict mass constraints',
        'Performed FEA analysis to validate structural performance',
        'Fabricated flight-hardware components using CNC and 3D printing',
        'Created detailed GD&T drawings for manufacturing',
        'Supported system-level assembly and testing'
      ],
      technologies: ['SolidWorks', 'FEA', 'CNC Machining', '3D Printing', 'GD&T', 'Aerospace Engineering']
    },
    {
      title: 'Underwater Test Pond Design',
      description: 'Programmed k-Wave acoustic propagation models in MATLAB to design and optimize an underwater test pond, selecting geometries that maximized controlled reverberation for reliable acoustic testing.',
      tags: ['MATLAB', 'k-Wave', 'Acoustic Modeling', 'Simulation'],
      link: '#',
      images: [],
      details: [
        'Developed k-Wave acoustic propagation models in MATLAB',
        'Optimized test pond geometry for controlled reverberation',
        'Validated acoustic testing environment design',
        'Ensured reliable and repeatable test conditions'
      ],
      technologies: ['MATLAB', 'k-Wave', 'Acoustic Modeling', 'Simulation', 'Signal Processing']
    },
    {
      title: 'Dual Deployment Rocket',
      description: 'Designed and built a dual-deployment rocket system, laser-cutting and 3D-printing structural components and soldering onboard avionics. Simulated flight dynamics in OpenRocket to optimize stability, apogee altitude, and deployment timing.',
      tags: ['Design', '3D Printing', 'OpenRocket', 'Avionics'],
      link: '#',
      images: [],
      details: [
        'Designed dual-deployment recovery system',
        'Fabricated structural components via laser cutting and 3D printing',
        'Assembled and soldered onboard avionics systems',
        'Simulated and optimized flight dynamics in OpenRocket',
        'Achieved optimal stability and deployment timing'
      ],
      technologies: ['OpenRocket', '3D Printing', 'Laser Cutting', 'Avionics', 'Flight Simulation']
    },
    {
      title: 'Brain Impact Analysis Research',
      description: 'Performed modal analysis in Ansys on MRI-based brain meshes to identify dominant vibration modes relevant to impact response. Developed Python-based visualization tools to generate interactive 3D vector fields for analyzing brain reactivity under simulated collision forces.',
      tags: ['ANSYS', 'Python', 'Modal Analysis', 'Research', 'Data Visualization'],
      link: '#',
      images: [],
      details: [
        'Conducted modal analysis on MRI-based brain meshes using Ansys',
        'Identified dominant vibration modes for impact response',
        'Developed Python visualization tools for 3D vector field analysis',
        'Analyzed brain reactivity under simulated collision forces',
        'Contributed to understanding of traumatic brain injury mechanics'
      ],
      technologies: ['ANSYS', 'Python', 'Modal Analysis', 'FEA', 'Data Visualization', 'Biomechanics']
    }
  ]

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <>
      <section id="projects" className="projects" ref={ref}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              <strong>Featured</strong> Projects
            </h2>
            <p className="section-subtitle">
              A collection of projects I've <em>built</em> and <strong>contributed</strong> to
            </p>
          </motion.div>

          <div className="projects-list">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-item"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                onClick={() => handleProjectClick(project)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-arrow">→</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}
