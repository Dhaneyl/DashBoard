import './list.scss'
import { Datatable, NavBar, SideBar } from '../../components'

export const List = () => {
  return (
    <div className='list'>
      <SideBar />
      <div className='listContainer'>
        <NavBar/>
        <Datatable/>
      </div>
    </div>
  )
}
