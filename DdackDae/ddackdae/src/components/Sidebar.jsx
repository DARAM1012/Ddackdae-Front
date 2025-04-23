import './Sidebar.css'
import logoImg from '../assets/logo2.png'
import { FaSearch, FaBookmark, FaUser } from 'react-icons/fa'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">
        <img src={logoImg} alt="로고" />
        </div>
        <div className="menu">
          <div className="icon">
            <FaSearch />
            <span>검색</span>
          </div>
          <div className="icon">
            <FaBookmark />
            <span>찜</span>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="icon">
          <FaUser />
          <span>로그인</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
