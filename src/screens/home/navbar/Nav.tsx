import React from "react";
import { useNavigate,Outlet } from "react-router-dom";
import { Menu, Row, Col, Image, Layout, Input ,Grid,Dropdown,Divider} from "antd";
import dashboardimg from '../../../assests/dashboard.png';
import bellimg from '../../../assests/bell.png';
import userimg from '../../../assests/profile-user.png';
import settingimg from '../../../assests/setting.png';
import Dashboard from "../dashboard/Dashboard";
import device from '../../../assests/yellowDevice-removebg-preview.png'
import yellownotepad from '../../../assests/yellowwarningnotepad-removebg-preview.png'
import yellowallacontacats from '../../../assests/yellowallcontacts-removebg-preview.png'
import blackpaper from '../../../assests/blackpaper-removebg-preview.png'
import yellowpaper from '../../../assests/yellowpaper-removebg-preview (1).png'
import yellowcolck from '../../../assests/yellowcolck-removebg-preview.png';
import yellowbell from '../../../assests/bell.png'
import yellowAlert from '../../../assests/warningyellow-removebg-preview.png'
import logout from '../../../assests/power-off.png'
import yellowpaperKings from '../../../assests/yellowpaperking-removebg-preview.png'
import { useState } from "react";
import { SearchOutlined } from '@ant-design/icons';
import HeaderContent from "./HeaderContent";
import mgurulogoimg from '../../../assests/Mgurulogo-removebg-preview.png';

const { useBreakpoint } = Grid;



const { Header, Sider,Content } = Layout;
interface itemProps {
  key: string;
  icon: string;
  label: string;
  onClick: () => void;
}

function Nav() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  

  const menuItems:any = [
    {
      icon: (
        <img src={mgurulogoimg} width="50px" height="30px" alt="Logout Icon" />
      ),
    },
    {
      icon: (
        <img src={dashboardimg} width="20px" height="20px" alt="Logout Icon" />
      ),
      label: "Dashboard",
      key: 'dashboard',
      onClick: () => navigate("/dashboard"),
    },
    {
   
      key: "Device",
      icon: (
        <img src={device} width="20px" height="20px" alt="Logout Icon" />
      ),
      label: "Device",
      onClick: () => navigate("/device"),

    },
    {
      icon: (
        <img src={yellowallacontacats} width="20px" height="20px" alt="Logout Icon" />
      ),
      label: "Users",
      key: "Users",
      onClick: () => navigate("/users"),
    },
    {
      icon: (
        <img src={blackpaper} width="20px" height="20px" alt="Logout Icon" />
      ),
      label: "Reports",
      key: "Reports",
      children: [
        {    label: <span><Image src={yellowpaper} width={20} />Reading Reports</span>,key: "setting:1" },
        {  label: <span><Image src={yellownotepad} width={20} />consumption Reports</span>, key: "setting:2" },
        {  label: <span><Image src={yellowcolck} width={20} />History Reports</span>, key: "setting:3" },
        {  label: <span><Image src={yellowbell} width={20} />Notification Reports</span>, key: "setting:4",onClick:()=>navigate('/notificationreport') },
        {  label: <span><Image src={yellowAlert} width={20} />Alert Reports</span>, key: "setting:5" },
        {  label: <span><Image src={yellowpaper} width={20} />Failure Reports</span>, key: "setting:6",onClick:()=>navigate('/Failurereport') },
      ],
    },
    {
      icon: (
        <img src={yellowpaperKings} width="20px" height="20px" alt="Logout Icon" />
      ),
      label: "subscription",
      key: "subscription",
      onClick: () => navigate("/subscription"),
    },
    {
      icon: (
        <img src={logout} width="20px" height="20px" alt="Logout Icon" />
      ),
      label: "Log Out",
      key: "Logout",
      onClick: () => { localStorage.removeItem("token") ;navigate("/login")},
    },
  ];

  return (
    <>
    <Layout style={{ minHeight: "100vh" }}>
      <Sider    
                    collapsible
                    collapsed={collapsed}
                    onCollapse={toggleCollapsed}
                    breakpoint="lg"
                    collapsedWidth={50}
                    width={200}>
        <Menu mode="inline" items={menuItems} style={{ height: "100%", borderRight: 0 }} />
      </Sider>
      <Layout className="mt-3 me-3 mb-2">
      <Header
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
        
          }}
        >
        <HeaderContent/>
         
        </Header>
        <Content style={{
        margin: "24px",
        padding: "24px",
        
        borderRadius: "10px",
     
 
      }}>

<div style={{ overflowX: "auto", whiteSpace: "nowrap" }}></div>      
        <Outlet />
        </Content>

      </Layout>
    </Layout>
    </>
    
  );
}

export default Nav;
