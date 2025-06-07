import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Thêm useNavigate
import { Layout, Menu, Button, Typography, Row, Col, Avatar, Card } from 'antd';
import './home.css';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

export default function HomeForm() {
  const navigate = useNavigate(); // ✅ Hook để điều hướng

  const handleLoginClick = () => {
    navigate('/login'); // ✅ Chuyển hướng tới trang login
  };

  return (
    <Layout className="home">
      {/* Header */}
      <Header className="home-header">
        <div className="home-logo">
          <img src="/images/logo1.jpg" alt="logo" />
          NOSMOKING.COMMMMMMMMMM
        </div>
        <div className="home-header-right">
          <Text style={{ color: '#fff' }}>Membership</Text>
          <Button type="primary" onClick={handleLoginClick}>LOGIN</Button> {/* ✅ Gắn sự kiện click */}
        </div>
      </Header>

      {/* Navigation Bar */}
      <div className="no-smoke-banner">
        <div className="scroll-text">
          <div className="scroll-track">
            {Array(30).fill('NO SMOKE').map((item, index) => (
              <span key={index} className="smoke-item">{item}</span>
            ))}
          </div>
        </div>
      </div>



      {/* Hero Section */}
      <Content className="home-content">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={8} className="home-hero-text">
            <div className="hero-text-layout">
              <Text className="line">SMOKE TO</Text>
              <Title level={1} className="die-text">DIE</Title>
              <Text className="line">NO SMOKE</Text>

              <div className="life-line">
                <Text className="for-text">FOR</Text>
                <Title level={1} className="life-text">LiFE</Title>
              </div>


              <Button type="primary" size="large" className="consult-button">Consult now</Button>
            </div>
          </Col>
          <Col xs={24} md={15}>
            <img src="/images/p1.png" alt="Be smart don't start" className="hero-image" />

          </Col>
        </Row>

        {/* Top Members */}
        <div className="top-members">
          <Title level={3}>TOP MEMBERS:</Title>
          <Row gutter={[24, 24]}>
            {Array(6).fill(0).map((_, idx) => (
              <Col xs={24} sm={12} md={8} key={idx}>
                <Card>
                  <Card.Meta
                    avatar={<Avatar size={64} src={`/avatar${(idx % 3) + 1}.png`} />}
                    title="Member Name"
                    description="Short member info here"
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>

      {/* Harmful Effects */}
<div className="harmful-section">
  <Title level={4} style={{ textAlign: 'center' }}>
    HARMFUL EFFECTS OF SMOKING
  </Title>
  <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
    
    {/* Văn bản */}
    <Col xs={24} md={12} lg={12}>
      <Card style={{ height: '100%', textAlign: 'justify', padding: 16 }}>
        <Text style={{ fontSize: '16px' }}>
          <strong>Smoking seriously harms nearly every organ in the body.</strong> It is a leading cause of diseases such as lung cancer, heart disease, stroke, chronic obstructive pulmonary disease (COPD), and type 2 diabetes. Smoking also weakens the immune system, causes inflammation, and increases the risk of eye, skin, and bone diseases.
          <br /><br />
          Exposure to secondhand smoke is equally dangerous, especially for children and pregnant women, and can lead to serious problems such as sudden infant death syndrome (SIDS) and respiratory diseases.
          <br /><br />
          <strong>Quitting smoking not only improves your overall health, but also significantly reduces your risk of serious smoking-related diseases.</strong>
        </Text>
      </Card>
    </Col>

    {/* Hình ảnh xếp dọc trong cùng 1 cột */}
    <Col xs={24} md={12} lg={12}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Card
          cover={<img alt="Teeth damage" src="/images/harmfulimg1.jpg" />}
        />
        <Card
          cover={<img alt="Lung damage" src="/images/harmfulimg2.jpg" />}
        />
      </div>
    </Col>

  </Row>
</div>

      </Content>

      {/* Footer */}
      <Footer className="home-footer">
        <Row gutter={[16, 16]}>
          {Array(3).fill(0).map((_, idx) => (
            <Col xs={24} sm={8} key={idx}>
              <Card style={{ height: 120 }} />
            </Col>
          ))}
        </Row>
      </Footer>
    </Layout>
  );
}
