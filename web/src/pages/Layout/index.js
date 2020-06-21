import React from 'react';
import {
  Navbar,
  LogoContainer,
  NavButtons,
  Container,
  SideBar,
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

import {
  RiDashboardLine,
  RiSettings4Line,
  RiQuestionLine,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';

import bell from '../../assets/images/bell.svg';
import logout from '../../assets/images/logout.svg';
import profile from '../../assets/images/user.svg';

function Layout({ children, activeTab }) {
  const name = localStorage.getItem('name');
  const type = localStorage.getItem('type');

  return (
    <>
      <header className={Navbar}>
        <div className={LogoContainer}></div>
        <div className={NavButtons}>
          <button>
            <img src={bell} alt="notifications icon" />
          </button>
          <button>
            <img src={logout} alt="logout icon" />
          </button>
        </div>
      </header>
      <div className={Container}>
        <div className={SideBar}>
          <div className={ProfileSection}>
            <img src={profile} alt="Temporary for testing" />
            <p className={ProfileName}>{name}</p>
            <p className={TypeUser}>Paciente</p>
          </div>
          <div className={BorderLine}></div>
          <div className={Menus}>
            <Link
              to="/home"
              className={activeTab === 1 ? ActiveItemMenu : ItemMenu}
            >
              <RiDashboardLine className={MenuIcon} />
              <p>Dashboard</p>
            </Link>
            <Link
              to="/home"
              className={activeTab === 2 ? ActiveItemMenu : ItemMenu}
            >
              <RiQuestionLine className={MenuIcon} />
              <p>Algum menu</p>
            </Link>
            <Link
              to="/home"
              className={activeTab === 3 ? ActiveItemMenu : ItemMenu}
            >
              <RiQuestionLine className={MenuIcon} />
              <p>Algum menu</p>
            </Link>
            <Link
              to="/home"
              className={activeTab === 4 ? ActiveItemMenu : ItemMenu}
            >
              <RiQuestionLine className={MenuIcon} />
              <p>Algum menu</p>
            </Link>
            <Link
              to="/home"
              className={activeTab === 5 ? ActiveItemMenu : ItemMenu}
            >
              <RiQuestionLine className={MenuIcon} />
              <p>Algum menu</p>
            </Link>
            <Link
              to="/home/settings"
              className={activeTab === 6 ? ActiveItemMenu : ItemMenu}
            >
              <RiSettings4Line className={MenuIcon} />
              <p>Configurações</p>
            </Link>
          </div>
          <div className={BorderLine}></div>
          <div className={SupportSection}>
            <p className={SupportTitle}>Ajuda</p>
            <Link to="/home" className={SupportButton}>
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
