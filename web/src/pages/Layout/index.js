import React, { useState } from 'react';
import {
  Navbar,
  LogoContainer,
  NavButtons,
  Container,
  SideBar,
  SideBarCollapse,
  ProfileSection,
  ProfileName,
  TypeUser,
  BorderLine,
  Menus,
  ItemMenu,
  ActiveItemMenu,
  MenuIcon,
  SupportSection,
  SupportTitle,
  SupportButton,
  Content,
} from './styles.module.scss';
import { RiQuestionLine } from 'react-icons/ri';
import { Link, useHistory } from 'react-router-dom';
import bell from '../../Assets/images/bell.svg';
import logout from '../../Assets/images/logout.svg';
import profile from '../../Assets/images/user.svg';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

function Layout({
  children,
  activeTab,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  name1,
  name2,
  name3,
  name4,
  name5,
  name6,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
}) {
  const name = localStorage.getItem('name');
  let type = '';
  if (localStorage.getItem('type') === 'patient') {
    type = 'Paciente';
  } else if (localStorage.getItem('type') === 'professor') {
    type = 'Professor';
  } else if (localStorage.getItem('type') === 'preceptor') {
    type = 'Preceptor';
  } else {
    type = 'Administrador';
  }
  const history = useHistory();
  const [collapse, setCollapse] = useState(false);
  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <>
      <header className={Navbar}>
        <button onClick={() => setCollapse(!collapse)}>
          {collapse === false && <AiOutlineMenuFold size={25} color="#fff" />}
          {collapse && <AiOutlineMenuUnfold size={25} color="#fff" />}
        </button>
        <div className={LogoContainer}></div>
        <div className={NavButtons}>
          <button>
            <img src={bell} alt="notifications icon" />
          </button>
          <button onClick={handleLogout}>
            <img src={logout} alt="logout icon" />
          </button>
        </div>
      </header>
      <div className={Container}>
        <div className={collapse ? SideBarCollapse : SideBar}>
          <div className={ProfileSection}>
            <img src={profile} alt="Temporary for testing" />
            <p className={ProfileName}>{name}</p>
            <p className={TypeUser}>{type}</p>
          </div>
          <div className={BorderLine}></div>
          <div className={Menus}>
            <Link
              to={link1}
              className={activeTab === 1 ? ActiveItemMenu : ItemMenu}
            >
              <div className={MenuIcon}>
                {/* <RiDashboardLine className={MenuIcon} /> */}
                {icon1}
              </div>
              <p>{name1}</p>
            </Link>
            <Link
              to={link2}
              className={activeTab === 2 ? ActiveItemMenu : ItemMenu}
            >
              <div className={MenuIcon}>
                {/* <RiHandHeartLine className={MenuIcon} /> */}
                {icon2}
              </div>
              <p>{name2}</p>
            </Link>
            <Link
              to={link3}
              className={activeTab === 3 ? ActiveItemMenu : ItemMenu}
            >
              <div className={MenuIcon}>
                {/* <RiQuestionLine className={MenuIcon} /> */}
                {icon3}
              </div>
              <p>{name3}</p>
            </Link>
            <Link
              to={link4}
              className={activeTab === 4 ? ActiveItemMenu : ItemMenu}
            >
              <div className={MenuIcon}>
                {/* <RiQuestionLine className={MenuIcon} /> */}
                {icon4}
              </div>
              <p>{name4}</p>
            </Link>
            <Link
              to={link5}
              className={activeTab === 5 ? ActiveItemMenu : ItemMenu}
            >
              <div className={MenuIcon}>
                {/* <RiQuestionLine className={MenuIcon} /> */}
                {icon5}
              </div>
              <p>{name5}</p>
            </Link>
            <Link
              to={link6}
              className={activeTab === 6 ? ActiveItemMenu : ItemMenu}
            >
              <div className={MenuIcon}>
                {/* <RiSettings4Line className={MenuIcon} /> */}
                {icon6}
              </div>
              <p>{name6}</p>
            </Link>
          </div>
          <div className={BorderLine}></div>
          <div className={SupportSection}>
            <p className={SupportTitle}>Ajuda</p>
            <Link to="/" className={SupportButton}>
              <RiQuestionLine />
              <p>Suporte</p>
            </Link>
          </div>
        </div>
        <div className={Content}>{children}</div>
      </div>
    </>
  );
}

export default Layout;
