import React from 'react'
import bellimg from '../../../assests/bell.png';
import userimg from '../../../assests/profile-user.png';
import settingimg from '../../../assests/setting.png';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Grid, Input, Menu, Row,Form } from 'antd';
const { useBreakpoint } = Grid;
interface itemProps {
  key: string;
  icon: string;
  label: string;
  onClick: () => void;
}
function Header() {
  const screens = useBreakpoint();

  const headerMenuItems:any = [
    {
      key: 'notify',
      label: 'Notifications',
      icon: <img src={bellimg} width="20px" height="20px" alt="Notify Icon" />,
      onClick: () => console.log('Notifications clicked'),
    },
    {
      key: 'settings',
      label: 'Settings',
      icon: <img src={settingimg} width="20px" height="20px" alt="Settings Icon" />,
      onClick: () => console.log('Settings clicked'),
    },
    {
      key: 'user',
      label: 'Mae User',
      icon: <img src={userimg} width="20px" height="20px" alt="User Icon" />,
      onClick: () => console.log('User clicked'),
    },
  ];

  const inputFields = (
    <>
  

  <Form layout="vertical">
<Row style={{width:'100px'}}>
  <Col> <Input value="MAE136" className="w-50" /></Col>
  <Col>  <Input value="Elmaesure" className="w-50" /></Col>
</Row>
  </Form>
     
    </>
  );

  const headerMenu = (
    <Menu
      items={[
        ...headerMenuItems.map((item: itemProps) => ({
          key: item.key,
          label: item.label,
          icon: item.icon,
          onClick: item.onClick,
        })),
        {
          key: 'input-fields',
          label: 'Input Fields',
          children: [
            {
              key: 'field1',
              label: inputFields,
            },
          ],
        },
      ]}
    />
  );

  return (
    <div >
      <Row gutter={8}>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} sm={10} md={8} lg={6}>
              <h4 className="mt-2 text-start">Dashboard</h4>
            </Col>
            {(screens.lg || screens.md) && (
              
                <Col xs={24} sm={7} md={8} lg={9}>
                  <Input value="MAE136" className="w-100 " />
                </Col>
                
            )}
            {(screens.lg || screens.md) && (
              <Col xs={24} sm={7} md={8} lg={9}>
              <Input value="Elmaesure" className="w-100" />
            </Col>
          
            )}
          </Row>
          
        </Col>

       
        <Col xs={12} sm={12} md={12} lg={12} >
          {(screens.xs) ? (
            <Dropdown overlay={headerMenu} trigger={['click']}>
              <Button icon={<MenuOutlined />} type="primary" />
            </Dropdown>
          ) : (
            <Row justify="end" gutter={[16, 16]} align="middle">
              <Col>
                <img src={bellimg} width="30px" height="30px"  />
              </Col>
              <Col>
                <img src={settingimg} width="30px" height="30px" />
              </Col>
              <Col>Mae User</Col>
              <Col>
                <img src={userimg} width="30px" height="30px" />
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </div>
  )
}

export default Header
