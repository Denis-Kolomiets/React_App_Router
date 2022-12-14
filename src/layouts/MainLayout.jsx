import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'
const MainLayout = () => {
  return (
    <>
      <Menu />
      <Outlet /> {/*Для отображения страниц при клике по них */}
    </>
  )
}

export default MainLayout
