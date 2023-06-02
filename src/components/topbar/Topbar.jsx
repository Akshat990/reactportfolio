import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"Topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Akshat.</a>
          <div className="itemContainer">
          <PersonIcon/>
          <span>+44 924 12 74</span>
          </div>
        <div className="itemContainer">
          <MailIcon/>
          <span>raghuvanshiakshatsingh@gmail.com</span>
        </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
      </div>
      
  )
}
