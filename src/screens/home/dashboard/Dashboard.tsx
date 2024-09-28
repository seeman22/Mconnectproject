
import { Menu, Row, Col, Image, Layout, Input,Card,Space,Button} from "antd";

import meterimg from '../../../assests/speedmeterimg.png';

import lightbell from '../../../assests/WhatsApp Image 2024-09-24 at 15.34.29.jpeg';
import tableimg from '../../../assests/Table1.png';
import table2img from '../../../assests/Table2.png';

import Chart from 'react-apexcharts'
import { useState } from "react";
function Dashboard() {
  const [chartdatas, setChartdatas] = useState({
    options: {

    },
    series: [44, 55, 41, 17, 15],
    labels: ['A', 'B', 'C', 'D', 'E']},
  
  )

    const [barchartdatas,setBarchartdatas]=useState({options:{
      colors: ["#6BB5B0"],
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  })
  return (
    <>
    <Row gutter={[8,24]}>
      <Col lg={8}  xs={24} md={16}>
      <Row gutter={[8,8]}>
        <Card style={{width:"370px", boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
          <h6 className='text-start'>Devices Details</h6>
          <Row gutter={[24,8]} >
            <Col>
            <p>EB</p>
            <p>ON</p>
            </Col>
            <Col>
            <p>Sump</p>
            <p>ON</p>
            </Col>
            <Col>
            <p>Borewell</p>
            <p>ON</p>
            </Col>
            <Col>
            <p>Relay1</p>
            <p>ON</p>
            </Col>
            <Col>
            <p>Relay2</p>
            <p>ON</p>
            </Col>

          </Row>
         
        </Card>
        


        <Row>
        <Card style={{width:"370px", boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
      <h6>communication Devices</h6>
      <h6>(24-09-2024 09:57)</h6>
      <p>Device data not receiveed</p>
      <p>Read Eroor Time : Ohr :0mins</p>
       </Card>
        </Row>
        </Row>
       
   
      </Col>

      <Col span={8}  xs={24} md={8}>
      <Card style={{height:'340px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
        <h6 className='text-start'>Today Consumption</h6>
        <Image
        src={meterimg}
        />
      
     
      </Card>
      </Col>

      <Col span={8}  xs={24} md={8}>
      <Card style={{height:'340px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
        {/* <Image src={circlechart}/> */}
        <Chart options={chartdatas?.options} series={chartdatas?.series} type="donut" width="350" />
      </Card>
      </Col>
    </Row>



    <Row gutter={[8,16]} className="mt-2">
      <Col span={6} xs={24} sm={12} lg={6}>
      <Card style={{height:'220px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
        <h6 className='text-start'>
      Total consumption
        </h6>
   
      <Image
      src={lightbell} height={120}/>
           <h2>124834.72</h2>
      </Card>
      </Col>

      <Col span={6} xs={24} sm={12} lg={6}>
      <Row gutter={[8,8]}>
        <Col>
        <Card style={{width:'270px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
          <h6 className='text-start'>Total Watts:8.42(kw)</h6>
          <Space size="small">
                <Button shape="circle" color="danger" variant='solid'>R</Button>
            3.5
                <Button shape="circle" >Y</Button>
            1.25
                <Button shape="circle">B</Button>
            3.67
            </Space>

        </Card>
        </Col>
        <Col >
        <Card style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                <h6 className='tex-start'> Avg Amps : 13.07 (A)</h6>
                
                <Space size="small">
                <Button shape="circle" color="danger" variant='solid'>R</Button>
            16.93
                <Button shape="circle" color="danger">Y</Button>
            5.64
                <Button shape="circle" color="danger">B</Button>
            16.56
            </Space>
                
            </Card>
        </Col>
      </Row>
      </Col>

      <Col span={6} xs={24} sm={12} lg={6}>
      <Row gutter={[8,8]}>
        <Col>
        <Card style={{width:'270px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
          <h6 className='text-start'>Avg LN Watts:8.42(kw)</h6>
          <Space size="small">
                <Button shape="circle" color="danger" variant='solid'>R</Button>
            3.5
                <Button shape="circle">Y</Button>
            1.25
                <Button shape="circle">B</Button>
            3.67
            </Space>

        </Card>
        </Col>
        <Col>
        <Card style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                <h6 className='tex-start'> Avg Amps : 13.07 (A)</h6>
                
                <Space size="small">
                <Button shape="circle" color="danger" variant='solid'>R</Button>
            16.93
                <Button shape="circle" color="danger">Y</Button>
            5.64
                <Button shape="circle" color="danger">B</Button>
            16.56
            </Space>
                
            </Card>
        </Col>
      </Row>

      </Col>

      <Col span={6} xs={24} sm={12} lg={6}>
      <Row gutter={[8,8]}>
        <Col>
        <Card style={{width:'270px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
          <h6 className='text-start'>Avg LL volts:8.42(kw)</h6>
          <Space size="small">
                <Button shape="circle" color="danger" variant='solid'>R</Button>
            3.5
                <Button shape="circle">Y</Button>
            1.25
                <Button shape="circle">B</Button>
            3.67
            </Space>

        </Card>
        </Col>
        <Col>
        <Card style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                <h6 className='tex-start'> Avg Amps : 13.07 (A)</h6>
                
                <Space size="small">
                <Button shape="circle" color="danger" variant='solid'>R</Button>
            16.93
                <Button shape="circle" color="danger">Y</Button>
            5.64
                <Button shape="circle" color="danger">B</Button>
            16.56
            </Space>
                
            </Card>
        </Col>
      </Row>

      </Col>
    </Row>

    <Row className="mt-2" gutter={[8,8]}>

      <Col span={12}>
      <Card style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
        <h6 className='text-start'>consumption Report</h6>
        <Image src={tableimg}/>
      </Card>
      </Col>

      <Col span={12}> 
      <Card style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
        <h6 className='text-start'>ON OFF History</h6>
        <Image src={table2img}/>
      </Card>
      </Col>
    </Row>

    <Row className="mt-2" gutter={[8,8]}>
      <Col span={12} >

      <Card style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
        <h6 className='text-start'>Hourly peak Load</h6>
        <Chart
              options={barchartdatas?.options}
              series={barchartdatas?.series}
              type="bar"
              width="500"
            />
      </Card>
      </Col>

      <Col span={12}>

<Card style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
  <h6 className='text-start'>Daywise peak loads (watts)</h6>
  <Chart
              options={barchartdatas?.options}
              series={barchartdatas?.series}
              type="bar"
              width="500"
            />
</Card>
</Col>
    </Row>
    </>
  
  )
}

export default Dashboard