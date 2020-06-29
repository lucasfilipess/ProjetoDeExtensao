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
  ColapseBtn,
} from './styles.module.scss';

import {
  RiDashboardLine,
  RiSettings4Line,
  RiQuestionLine,
  RiHandHeartLine,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';

import bell from '../../assets/images/bell.svg';
import logout from '../../assets/images/logout.svg';
import profile from '../../assets/images/user.svg';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

function Layout({ children, activeTab, tab1, tab2, tab3, tab4, tab5, tab6 }) {
  const name = localStorage.getItem('name');
  const type = localStorage.getItem('type');
  const [collapse, setCollapse] = useState(true);

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
          <button>
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
              to={tab1}
              className={activeTab === 1 ? ActiveItemMenu : ItemMenu}
            >
              <RiDashboardLine className={MenuIcon} />
              <p>Dashboard</p>
            </Link>
            <Link
              // to="/home/service-area"
              to={tab2}
              className={activeTab === 2 ? ActiveItemMenu : ItemMenu}
            >
              <RiHandHeartLine className={MenuIcon} />
              <p>Atendimento</p>
            </Link>
            <Link
              to={tab3}
              className={activeTab === 3 ? ActiveItemMenu : ItemMenu}
            >
              <RiQuestionLine className={MenuIcon} />
              <p>Algum menu</p>
            </Link>
            <Link
              to={tab4}
              className={activeTab === 4 ? ActiveItemMenu : ItemMenu}
            >
              <RiQuestionLine className={MenuIcon} />
              <p>Algum menu</p>
            </Link>
            <Link
              to={tab5}
              className={activeTab === 5 ? ActiveItemMenu : ItemMenu}
            >
              <RiQuestionLine className={MenuIcon} />
              <p>Algum menu</p>
            </Link>
            <Link
              // to="/home/settings"
              to={tab6}
              className={activeTab === 6 ? ActiveItemMenu : ItemMenu}
            >
              <RiSettings4Line className={MenuIcon} />
              <p>Configurações</p>
            </Link>
          </div>
          <div className={BorderLine}></div>
          <div className={SupportSection}>
            <p className={SupportTitle}>Ajuda</p>
            <Link to={tab1} className={SupportButton}>
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
