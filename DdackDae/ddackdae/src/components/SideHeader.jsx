import logoImg from '@/assets/logo.png'
import '@/components/SideHeader.css'

function SideHeader() {
  return (
  <div className='logo'>
    <img src={logoImg} alt="logo" />
  </div>
  );
}

export default SideHeader;
