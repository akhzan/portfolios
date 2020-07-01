import CanfazzWeb from '../assets/b.jpg'
import CanfazzDashboard from '../assets/c.jpg'
import Sam from '../assets/d.jpg'
import Porse from '../assets/e.jpg'
import PorseDetail from '../assets/porse.png'
import SamDetail from '../assets/sam.png'
import CanfazzWebDetail from '../assets/canfazzweb.png'
import CanfazzDashboardDetail from '../assets/canfazzdashboard.png'

const works = {
  'canfazz-web': {
    image: CanfazzWeb,
    imageDetail: CanfazzWebDetail,
    title: 'Canfazz Freelancer Web',
    description: 'Canfazz Freelancer Company Profile',
    tech: 'Next JS',
  },
  'canfazz-dashboard': {
    image: CanfazzDashboard,
    imageDetail: CanfazzDashboardDetail,
    title: 'Canfazz Dashboard',
    description:
      'A dashboard used for managing sales marketing and canfazz freelancer. It contains Reporting, CMS, Sales management, KPI management, etc',
    tech: 'React JS, Redux, Redux Observable, Cube JS',
  },
  sam: {
    image: Sam,
    imageDetail: SamDetail,
    imageClassname: '--half',
    title: 'SAM Advance',
    description:
      'A progressive web app - mobile web based application, used for automative sales transaction by Toyota Sales Operation (Auto2000) accross Indonesia.',
    tech:
      'C# .Net Web API, Oauth 2.0, Microsoft SQL Server, Angular JS, Progressive Web App',
  },
  porse: {
    image: Porse,
    imageDetail: PorseDetail,
    title: 'Porse Quiz',
    description:
      'A web based application, used for smart quiz at PORSE Astra. It uses realtime mechanism to show the answers of all quiz participants while participants use ipad to answer the questions.',
    tech: 'Vanilla JS, jQuery, Socket.io, Express JS, Mongoose, Mongo DB',
  },
}

export default works
