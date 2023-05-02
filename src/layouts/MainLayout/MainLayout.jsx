import { Outlet, Link } from "react-router-dom"
import s from "./MainLayout.module.scss"

export const MainLayout = () => {
  return (
    <div className={ s.mainLayout }>
      <div className={ s.nav }>
        <Link to={`/home`}>Home</Link>
        <Link to={`/abuto`}>Abuto</Link>
      </div>
      <Outlet />
    </div>
  )
}