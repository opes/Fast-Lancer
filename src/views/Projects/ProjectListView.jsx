import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectItem from '../../components/ProjectItem/ProjectItem.jsx'
import Title from '../../components/Title/Title.jsx'
import { getProjects } from '../../services/projects.js'
import styles from './ProjectListView.module.css'

export default function ProjectListView() {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects().then(setProjects).finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <Title pageTitle='projects' pageHeader='Projects' />
      <main>
        <section className={styles.content}>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            projects.map((project) => (
              <Link key={project.id} to={`/projects/${project.id}`}>
                <ProjectItem key={project.id} project={project} />
              </Link>
            ))
          )}
        </section>
      </main>
    </div>
  )
}
