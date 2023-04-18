import React from 'react'
import Tooltip from '@mui/material/Tooltip'
import GitHubIcon from '@mui/icons-material/GitHub'
import IconButton from '@mui/material/IconButton'
import officeNotes from "../../assets/officeNotes.png"
import render from "../../assets/render-render.png"
import bookmyshow from "../../assets/bookmyshow.png"
import gutenberg from "../../assets/gutenberg.png"
import movieApp from "../../assets/movie-app.png"

const ProjectsSection = () => {
  const tooltipStyle = { fontSize: '1.8rem' }
  return (
    <>
      <div className='container' id='projects'>
        {/* <h2 className='section-heading'>Full Stack Projects</h2> */}
        <h2 className='section-heading'>Projects</h2>

        <div className='projects-container'>
          <div className='project project-1'>
            <div className='project-img-box flex-center-all'>
              <img
                src={officeNotes}
                alt='office notes'
                className='project-img'
              />
              <p className='project-title'>Office Notes (Full Stack)</p>
            </div>
            <div className='project-details-box flex-center-all'>
              <p className='project-title'>Links</p>
              <div className='project-links'>
                <a
                  href='https://github.com/Vaishak-JN/officeNotes-FE'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={<h1 style={tooltipStyle}>Source Code Frontend</h1>}>
                    <IconButton>
                      <GitHubIcon className='project-link-icon frontend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>
                <a
                  href='https://github.com/Vaishak-JN/officeNotes-BE'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Source Code Backend
                      </h1>
                    }>
                    <IconButton>
                      <GitHubIcon className='project-link-icon backend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://officenotes-fe.onrender.com'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Frontend Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src={render}
                        className='project-link-icon'
                        alt='render icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://officenotes-api.onrender.com'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Backend Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src={render}
                        className='project-link-icon'
                        alt='render icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>


          <div className='project project-1'>
            <div className='project-img-box flex-center-all'>
              <img
                src={bookmyshow}
                alt='bookmyshow'
                className='project-img'
              />
              <p className='project-title'>Bookmyshow Clone</p>
            </div>
            <div className='project-details-box flex-center-all'>
              <p className='project-title'>Links</p>
              <div className='project-links'>
                <a
                  href='https://github.com/Vaishak-JN/bookmyshow-frontend'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={<h1 style={tooltipStyle}>Source Code Frontend</h1>}>
                    <IconButton>
                      <GitHubIcon className='project-link-icon frontend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>
                <a
                  href='https://github.com/Vaishak-JN/bookmyshow-backend'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Source Code Backend
                      </h1>
                    }>
                    <IconButton>
                      <GitHubIcon className='project-link-icon backend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://bookmyshow-frontend-ipj7.onrender.com'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Frontend Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src={render}
                        className='project-link-icon'
                        alt='render icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://bookmyshow-backend-nti9.onrender.com'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Backend Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src={render}
                        className='project-link-icon'
                        alt='render icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>


          <div className='project project-1'>
            <div className='project-img-box flex-center-all'>
              <img
                src={gutenberg}
                alt='gutenberg project'
                className='project-img'
              />
              <p className='project-title'>Gutenberg Project</p>
            </div>
            <div className='project-details-box flex-center-all'>
              <p className='project-title'>Links</p>
              <div className='project-links'>
                <a
                  href='https://github.com/Vaishak-JN/gutenberg-project'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={<h1 style={tooltipStyle}>Source Code Frontend</h1>}>
                    <IconButton>
                      <GitHubIcon className='project-link-icon frontend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://gutenberg-project.onrender.com/'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Frontend Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src={render}
                        className='project-link-icon'
                        alt='render icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>

              </div>
            </div>
          </div>


          <div className='project project-1'>
            <div className='project-img-box flex-center-all'>
              <img
                src={movieApp}
                alt='react movie app'
                className='project-img'
              />
              <p className='project-title'>React Movie App (Full Stack)</p>
            </div>
            <div className='project-details-box flex-center-all'>
              <p className='project-title'>Links</p>
              <div className='project-links'>
                <a
                  href='https://github.com/Vaishak-JN/react-movie-app'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={<h1 style={tooltipStyle}>Source Code Frontend</h1>}>
                    <IconButton>
                      <GitHubIcon className='project-link-icon frontend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>
                <a
                  href='https://github.com/Vaishak-JN/Node_movies'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Source Code Backend
                      </h1>
                    }>
                    <IconButton>
                      <GitHubIcon className='project-link-icon backend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://v-movie-app.onrender.com'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Frontend Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src={render}
                        className='project-link-icon'
                        alt='render icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://v-movie-app-backend.onrender.com'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Backend Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src={render}
                        className='project-link-icon'
                        alt='render icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>

          <a style={{ textDecoration: "none" }} href="https://github.com/Vaishak-JN?tab=repositories"><h1 className=''>more on github...</h1></a>
        </div>
      </div>
      {/* <div className='container' id='projects'>
        <h2 className='section-heading'>Mini Projects</h2>

        <div className='projects-container'>
          <div className='project project-4'>
            <div className='project-img-box flex-center-all'>
              <img
                src='img/calc_800x400.png'
                className='project-img'
                alt='Calculator Home Screen'
              />
              <p className='project-title'>Calculator</p>
            </div>
            <div className='project-details-box flex-center-all'>
              <p className='project-title'>Links</p>
              <div className='project-links'>
                <a
                  href='https://github.com/mshyam25/Calculator.git'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip title={<h1 style={tooltipStyle}>Source Code</h1>}>
                    <IconButton>
                      <GitHubIcon className='project-link-icon frontend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://cal-c-tech.netlify.app'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Netlify Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src='img/projects/netlify-icon.svg'
                        className='project-link-icon'
                        alt='Netlify icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>
          <div className='project project-5'>
            <div className='project-img-box flex-center-all'>
              <img
                src='img/thirukural_800x400.png'
                className='project-img'
                alt='Thirukural Generator Home Screen'
              />
              <p className='project-title'>Thirukural Finder</p>
            </div>

            <div className='project-details-box flex-center-all'>
              <p className='project-title'>Links</p>
              <div className='project-links'>
                <a
                  href='https://github.com/mshyam25/Thirukural.git'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip title={<h1 style={tooltipStyle}>Source Code</h1>}>
                    <IconButton>
                      <GitHubIcon className='project-link-icon frontend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://thiruk.netlify.app'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Netlify Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src='img/projects/netlify-icon.svg'
                        className='project-link-icon'
                        alt='Netlify icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>
          <div className='project project-6'>
            <div className='project-img-box flex-center-all'>
              <img
                src='img/high_800x400.png'
                alt='Highlights App Home Screenshot'
                className='project-img'
              />
              <p className='project-title'>Football Highlights Viewer</p>
            </div>
            <div className='project-details-box flex-center-all'>
              <p className='project-title'>Links</p>
              <div className='project-links'>
                <a
                  href='https://github.com/mshyam25/FootballVideos.git'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip title={<h1 style={tooltipStyle}>Source Code</h1>}>
                    <IconButton>
                      <GitHubIcon className='project-link-icon frontend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://footballforum.netlify.app'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Netlify Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src='img/projects/netlify-icon.svg'
                        className='project-link-icon'
                        alt='Netlify icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default ProjectsSection
