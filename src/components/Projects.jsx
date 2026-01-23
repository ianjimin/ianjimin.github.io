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
      title: 'Automated Ceramic Sorting System',
      description: 'Developed a complete quality control automation system using Python, Tkinter, and OCR technology. Transformed the QC process from a 4-step, 7.5-10 hour workflow to a streamlined 2-step, 2-3 hour process, reducing processing time by 70-80% for batches of 500 ceramics.',
      tags: ['Python', 'OCR', 'Tkinter', 'SQLite', 'Automation'],
      link: '#',
      previewImage: '/images/projects/tr317-preview.jpg',
      images: [
        '/images/projects/tr317-sorting-1.jpg',
        '/images/projects/tr317-sorting-2.jpg'
      ],
      details: [
        'Built Tkinter-based GUI application with SQLite database for data management',
        'Implemented OCR system using Tesseract with custom preprocessing pipeline (CLAHE, adaptive thresholding, dilation)',
        'Created scanning module with live feed, preprocessing toggles, and progress tracking',
        'Eliminated need for pre-arranging ceramics by serial number before sorting',
        'Reduced total QC batch time from 7.5-10 hours to 2-3 hourss'
      ],
      technologies: ['Python', 'Tesseract OCR', 'Tkinter', 'SQLite3', 'OpenCV', 'Image Processing', 'Regex']
    },
    {
      title: '1U Cubesat – NU Aerospace',
      description: 'Optimized camera payload bracket design under mass constraints using SolidWorks FEA, validating structural performance. Fabricated and assembled flight-hardware components using CNC machining and 3D printing, producing GD&T drawings.',
      tags: ['SolidWorks', 'FEA', 'CNC', 'Aerospace', 'GD&T'],
      link: '#',
      previewImage: '/images/projects/cubesat-preview.jpg',
      images: [
        '/images/projects/cubesat-1.jpg',
        '/images/projects/cubesat-2.jpg',
        '/images/projects/cubesat-3.jpg'
      ],
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
      title: 'Pond Upgrade Acoustic Simulation',
      description: 'Modeled acoustic behavior of existing pond and multiple redesign concepts using k-Wave pseudo-spectral simulation. Analyzed reverberation data to select optimal 25-ft square wall design that balances acoustic performance with construction feasibility and testing space requirements.',
      tags: ['MATLAB', 'k-Wave', 'Acoustic Simulation', '3D Modeling'],
      link: '#',
      previewImage: '/images/projects/pond-preview.jpg',
      images: [
        '/images/projects/pond-simulation-1.jpg'
      ],
      details: [
        'Created 3D voxel-based geometries from engineering schematics using pixel counting and PCHIP interpolation',
        'Implemented both equation-based and CAD import (STL-to-voxel) geometry creation methods',
        'Modeled layered media (bedrock → mud → water → air) with concrete wall support structures',
        'Ran 3D elastic simulations (pstdElastic3D) with 20-40 million voxels, requiring 50-100GB RAM',
        'Simulated 50ms duration (35,000 timesteps) with 5kHz spherical pressure source',
        'Analyzed pressure time series using Hilbert transform, dB conversion, and linear fitting',
        'Compared multiple designs: Shannon\'s design, rounded (60ft & 80ft), and square (20ft & 25ft)',
        'Selected 25-ft square wall design for optimal reverberation reduction while preserving test space',
        'Validated design with hand calculations using cylindrical spreading model and reflection coefficients'
      ],
      technologies: ['MATLAB', 'k-Wave', '3D Voxel Modeling', 'Acoustic Simulation', 'Signal Processing', 'STL Processing', 'PCHIP Interpolation']
    },
    {
      title: 'Dual Deployment Rocket',
      description: 'Designed and built a dual-deployment rocket system, laser-cutting and 3D-printing structural components and soldering onboard avionics. Simulated flight dynamics in OpenRocket to optimize stability, apogee altitude, and deployment timing.',
      tags: ['Design', '3D Printing', 'OpenRocket', 'Avionics'],
      link: '#',
      previewImage: '/images/projects/rocket-preview.jpg',
      images: [
        '/images/projects/rocket-1.jpg',
        '/images/projects/rocket-2.jpg'
      ],
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
      title: 'Machine Learning Material Classifier',
      description: 'Developed machine learning models (Random Forest and CNN) to predict ceramic pack quality based on impedance data. Investigated crack formation using COMSOL stress analysis, providing data-driven fail criteria for quality control.',
      tags: ['Machine Learning', 'COMSOL', 'Python', 'Quality Control'],
      link: '#',
      previewImage: '/images/projects/tr232-preview.jpg',
      images: [
        '/images/projects/tr232-classifier-1.jpg',
      ],
      details: [
        'Trained Random Forest model using impedance features (peak locations, noise levels, peak sizes, patterns)',
        'Developed 1D CNN with multiple convolutional blocks (32→64→128 filters) for pattern recognition',
        'Achieved confident binary classification (good/bad) with specialized feature detection',
        'Modeled 10-pack geometry and forces in COMSOL to identify stress concentrations causing cracks',
        'Analyzed Von Mises stress and electric potential distributions',
        'Provided decisive, data-backed fail criteria for quality control processes',
        'Investigated cracking during 10-pack creation process (gluing, fixturing, baking)'
      ],
      technologies: ['Python', 'Scikit-learn', 'TensorFlow/Keras', 'COMSOL', 'Machine Learning', 'FEA', 'Impedance Analysis']
    },
    {
      title: 'Brain Impact Analysis Research',
      description: 'Performed modal analysis in Ansys on MRI-based brain meshes to identify dominant vibration modes relevant to impact response. Developed Python-based visualization tools to generate interactive 3D vector fields for analyzing brain reactivity under simulated collision forces.',
      tags: ['ANSYS', 'Python', 'Modal Analysis', 'Research', 'Data Visualization'],
      link: '#',
      previewImage: '/images/projects/brain-analysis-preview.jpg',
      images: [
        '/images/projects/brain-analysis-1.jpg',
        '/images/projects/brain-analysis-2.jpg'
      ],
      details: [
        'Conducted modal analysis on MRI-based brain meshes using Ansys',
        'Identified dominant vibration modes for impact response',
        'Developed Python visualization tools for 3D vector field analysis',
        'Analyzed brain reactivity under simulated collision forces',
        'Contributed to understanding of traumatic brain injury mechanics'
      ],
      technologies: ['ANSYS', 'Python', 'Modal Analysis', 'FEA', 'Data Visualization', 'Biomechanics']
    },
    {
      title: 'Phone Box For Screen Habits',
      description: 'This phone box reimagines screen time management by empowering users through a flexible and gamified approach. It features a 3D printed phone stand and an ultrasonic sensor to detect phone presence and usage. A timing algorithm tracks box usage duration, rewarding users with points, ranks, and streaks, which are displayed on an LCD screen. An LED powered bear indicator is also used to reinforce feedback cues. The design is intentionally simple and non-restrictive to promote distraction free and intentional habit creation.',
      tags: ['Product Design', 'Gamification', 'Screen Time Management', '3D Printing', 'CAD', 'Electronics', 'Prototyping', 'Laser Cutting', 'Habit Formation'],
      link: '#',
      previewImage: '/images/projects/phone-box-prototype-preview.jpg',
      images: [
        '/images/projects/phone-box-prototype.jpg',
        '/images/projects/phone-box-cad-render.jpg',
        '/images/projects/phone-box-technical-drawings.jpg'
      ],
      details: [
        'Reimagined screen time management through a flexible and gamified approach',
        'Features a 3D printed phone stand and an ultrasonic sensor to detect phone presence and usage',
        'Implemented a timing algorithm to track box usage duration, rewarding users with points, ranks, and streaks',
        'Utilized an LCD screen for displaying user progress (points, ranks, streaks)',
        'Incorporated an LED-powered bear indicator to reinforce feedback cues',
        'Designed with simplicity and non-restrictiveness to promote distraction-free habit creation',
        'Used Onshape CAD to design 3D printed phone stand and enclosure components for prototyping and design visualization',
        'Utilized Cura software to slice CAD models and prepare them for 3D printing',
        'Created enclosure using AutoCAD to design custom wooden shapes for laser cutting and box assembly',
        'Fabricated prototype with hand tools and integrated electrical components'
      ],
      technologies: ['Onshape CAD', 'Cura', 'AutoCAD', '3D Printing', 'Laser Cutting', 'Ultrasonic Sensor', 'LCD Screen', 'LEDs', 'Electronics', 'Prototyping']
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
              A collection of projects I've <em>built</em>
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
                  {project.previewImage && (
                    <div className="project-preview-image">
                      <img 
                        src={project.previewImage} 
                        alt={`${project.title} preview`}
                        className="project-preview-img"
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    </div>
                  )}
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
