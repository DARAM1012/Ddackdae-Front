import './Sidebar.css'
import logoImg from '../assets/logo2.png'
import { FaSearch, FaBookmark, FaUser } from 'react-icons/fa'
import { useState } from 'react'
import LoginModal from '../components/loginview/LoginModal'
import SignupModal from '../components/signupview/SignupModal'

function Sidebar() {
  const [showModal, setShowModal] = useState(false)
  const [showSignModal, setSignModal] = useState(false)

  const loginview = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const Singview = () => {
    setSignModal(true)
  }

  const closeSingModal = () => {
    setSignModal(false)
  }

  return (
    <>
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

        <div className="bottom" onClick={loginview}>
          <div className="icon">
            <FaUser />
            <span>로그인</span>
          </div>
        </div>
      </div>

      {/* 로그인 모달 */}
      {showModal && (
        <LoginModal
          onClose={closeModal}
          onSignupClick={() => {
            console.log("회원가입 클릭됨")  // 확인용 로그
            closeModal()
            Singview()
          }}
        />
      )}

      {/* 회원가입 모달 */}
      {showSignModal && (
        <SignupModal onClose={closeSingModal} />
      )}

    </>
  )
}

export default Sidebar
