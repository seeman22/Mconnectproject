import { Menu, Row, Col, Image, Layout, Input, Card, Space, Button,Table } from "antd";
import meterimg from '../../../assests/speedmeterimg.png';
import lightbell from '../../../assests/WhatsApp Image 2024-09-24 at 15.34.29.jpeg';
import tableimg from '../../../assests/Table1.png';
import table2img from '../../../assests/Table2.png';
import Chart from 'react-apexcharts';
import { useState } from "react";
import '../../login/Login.module.css'; 
import { ApexOptions } from "apexcharts";
import { ColumnType } from "antd/es/table";


function TestDashboard() {

    const options = {
        colors: ["#2fa49f", "blue"],
        responsive: [
          {
            breakpoint: 1024,
            options: {
              chart: {
                width: "100%",
              },
            },
          },
          {
            breakpoint: 768,
            options: {
              chart: {
                width: "100%",
                height: "300px",
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                },
              },
              legend: {
                position: "bottom",
              },
            },
          },
          {
            breakpoint: 400,
            options: {
              chart: {
                width: "100%",
                height: "250px",
              },
              xaxis: {
                labels: {
                  show: true, 
                },
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };
    
      const series = [
        {
          title: "Hours",
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 75, 34, 56, 89],
        },
      ];
      

      const options1 = {
        colors: ["#FFDB58"],
        responsive: [
          {
            breakpoint: 1024,
            options: {
              chart: {
                width: "100%",
              },
            },
          },
          {
            breakpoint: 768,
            options: {
              chart: {
                width: "100%",
                height: "300px",
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                },
              },
              legend: {
                position: "bottom",
              },
            },
          },
          {
            breakpoint: 400,
            options: {
              chart: {
                width: "100%",
                height: "250px",
              },
              xaxis: {
                labels: {
                  show: true, 
                },
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };
    
      const serial = [
        {
          title: "Hours",
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 75, 34, 56, 89],
        },
      ];
      
    
      const powerHoursChartOptions: ApexOptions = {
        chart: {
          type: "donut",
        },
        colors: ["#2fa49f"],
        series: [99, 1], 
        fill:{
          type:"gradient"
        },
        labels: ["EB", "SUMP", "BOREWELL"], 
        legend: {
          position: "bottom",
          horizontalAlign: "center",
          floating: false,
        },
        responsive: [
          {
            breakpoint: 768,
            options: {
              chart: {
                width: "100%",
                height: "300px",
              },
              legend: {
                position: "bottom",
              },
            },
          },
          {
            breakpoint: 400,
            options: {
              chart: {
                width: "100%",
                height: "250px",
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };
      const ConsumptionChartOptions: ApexOptions = {
        series: [76],
        colors: ['#2fa49f'],
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: -2,
              fontSize: '22px'
            }
          }
        }
      },
      fill: {
        type: 'gradient',
      },
      
        responsive: [
          {
            breakpoint: 768,
            options: {
              chart: {
                width: "100%",
                height: "300px",
              },
              legend: {
                position: "bottom",
              },
            },
          },
          {
            breakpoint: 400,
            options: {
              chart: {
                width: "100%",
                height: "100%",
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };

      const columns = [
        {
          title: "S.No",
          dataIndex: "sno",
          key: "sno",
          width: 60,
      
        },
        {
          title: "Date",
          dataIndex: "date",
          key: "date",
          width: 120,
  
        },
        {
          title: "Start Time",
          dataIndex: "startTime",
          key: "startTime",
       
        },
        {
          title: "End Time",
          dataIndex: "endTime",
          key: "endTime",
       
        },
        {
          title: "Reading (kWh)",
          dataIndex: "reading",
          key: "reading",

        },]

        const data = [
          {
            key: "1",
            sno: "1",
            date: "2024-09-24",
            startTime: "00:00 AM",
            endTime: "--",
            reading: "12833.56"
           
          },
          {
            key: "2",
            sno: "2",
            date: "2024-09-23",
            startTime: "00:00 AM",
            endTime: "23:59 PM",
            reading: "12757.51",
        
          },
        ];
    
    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col lg={8} md={16} sm={24}>
                    <Card style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                        <h6 className="text-start">Devices Details</h6>
                        <Row gutter={[8, 8]}>
                        <Row gutter={[24,8]} >
            <Col>
            <h6 >EB</h6>
            <p  style={{color:'grey',fontWeight:'bold'}}>ON</p>
            </Col>
            <Col>
            <h6 >Sump</h6>
            <p  style={{color:'GrayText',fontWeight:'bold'}}>OFF</p>
            </Col>
            <Col>
            <h6  >Borewell</h6>
            <p  style={{color:'GrayText',fontWeight:'bold'}}>OFF</p>
            </Col>
            <Col>
            <h6 >Relay1</h6>
            <p  style={{color:'GrayText',fontWeight:'bold'}}>OFF</p>
            </Col>
            <Col>
            <h6  >Relay2</h6>
            <p  style={{color:'GrayText',fontWeight:'bold'}}>OFF</p>
            </Col>

          </Row>
                        </Row>
                    </Card>

                    <Card className="mt-1" style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                        <h6>Communication Devices</h6>
                        <p className="responsive-text" style={{color:'GrayText'}}>(24-09-2024 09:57)</p>
                        <p className="responsive-text" >Device data not received</p>
                        <p className="responsive-text"><span>Read Error Time:<span style={{fontWeight:'bold'}}> 0hr : 0mins</span></span></p>
                    </Card>
                </Col>

                <Col lg={8} md={16} sm={24}>
                    <Card style={{height:'340px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                    <h6 className="fw-bold text-start">Today consumption</h6>
                    <Chart
                options={ConsumptionChartOptions}
                series={ConsumptionChartOptions?.series}
                width="100%"
                type="radialBar"
                className="mt-5"
              />
                    </Card>
                </Col>

                <Col lg={8} md={16} sm={24}>
                    <Card style={{height:'340px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                    <p className="fw-bold text-start">Power Running hours</p>
            <Chart
              options={powerHoursChartOptions}
              series={powerHoursChartOptions?.series}
              type="donut"
              width="100%"
            />
                    </Card>
                </Col>
            </Row>

            <Row gutter={[16, 16]} className="mt-1">
            <Col xs={24} sm={12} lg={6} >
      <Card style={{height:'220px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',border:'3px solid rgb(107, 181, 176)'}}>
        <h6 className='text-start'>
      Total consumption
        </h6>
   
      <Image
      src={lightbell} height={120}/>
           <h2>124834.72</h2>
      </Card>
      </Col> 


      <Col lg={6} md={12} sm={24}>
      <Card style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',border:'3px solid rgb(107, 181, 176)'}}>
      <h6 className='text-start'>Total Watts:8.42(kw)</h6>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button shape="circle" color="danger" variant='solid' size="small">R</Button>
            3.5
                <Button shape="circle" size="small" className="yellowwarning">Y</Button>
            1.25
                <Button shape="circle" size="small" className="bluecolor">B</Button>
            3.67
            </div>

      </Card>

      <Card style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',border:'3px solid rgb(107, 181, 176)'}} className="mt-1">
      <h6 className='tex-start'> Avg Amps : 13.07 (A)</h6>
                
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button shape="circle" color="danger" variant='solid' size="small">R</Button>
            16.93
                <Button shape="circle" color="danger" size="small" className="yellowwarning">Y</Button>
            5.64
                <Button shape="circle" color="danger" size="small" className="bluecolor">B</Button>
            16.56
            </div>
                
      </Card>
      
      </Col> 


      <Col lg={6} md={12} sm={24} >
      <Card style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',border:'3px solid rgb(107, 181, 176)'}} >
      <h6 className='text-start'>Avg LN Watts:8.42(kw)</h6>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button shape="circle" color="danger" variant='solid' size="small">R</Button>
            3.5
                <Button shape="circle" size="small" className="yellowwarning">Y</Button>
            1.25
                <Button shape="circle" size="small" className="bluecolor">B</Button>
            3.67
            </div>
      </Card>

      <Card style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',border:'3px solid rgb(107, 181, 176)'}} className="mt-1">
      <h6 className='tex-start'> Avg Amps : 13.07 (A)</h6>
                
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button shape="circle" color="danger" variant='solid' size="small">R</Button>
            16.93
                <Button shape="circle" color="danger" size="small" className="yellowwarning">Y</Button>
            5.64
                <Button shape="circle" color="danger" size="small" className="bluecolor">B</Button>
            16.56
          </div>
                

      </Card>
      </Col>

      <Col lg={6} md={12} sm={24}>
  {/* First Card */}
  <Card style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',border:'3px solid rgb(107, 181, 176)'}}>
    <h6 className="text-start">Avg LL volts: 8.42 (kw)</h6>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Button shape="circle" color="danger" variant='solid' size="small">R</Button>
      <span>3.5</span>
      <Button shape="circle" size="small" className="yellowwarning">Y</Button>
      <span>1.25</span>
      <Button shape="circle" size="small" className="bluecolor" >B</Button>
      <span>3.67</span>
    </div>
  </Card>

  {/* Second Card */}
  <Card style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',border:'3px solid rgb(107, 181, 176)'}} className="mt-1">
    <h6 className="text-start">Avg Amps: 13.07 (A)</h6>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Button shape="circle" color="danger" size="small" variant='solid'>R</Button>
      <span>16.93</span>
      <Button shape="circle" size="small" className="yellowwarning">Y</Button>
      <span>5.64</span>
      <Button shape="circle" size="small" className="bluecolor">B</Button>
      <span>16.56</span>
    </div>
  </Card>
</Col>

</Row>

<Row gutter={[16, 16]} className="mt-2">

<Col lg={12} md={24} sm={24}>
<Card style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
        <h6 className='text-start'>consumption Report</h6>
        <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                bordered
                size="middle"
                className="table-responsive mx-auto"
              />
      </Card>
</Col>

<Col  lg={12} md={24} sm={24}>
<Card style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
        <h6 className='text-start'>ON OFF History</h6>
        <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                bordered
                size="middle"
                className="table-responsive mx-auto"
              />
      </Card>
</Col>
</Row>

<Row gutter={[16, 16]} className="mt-2">
    <Col lg={12} md={24} sm={24}>
    <Card style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
    <p className="fw-bold text-start">Hourly Energy Consumption</p>
    <Chart options={options} series={series} type="bar" width="100%" />
      </Card>
    </Col>

    <Col  lg={12} md={24} sm={24}>
    
<Card style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
<p className="fw-bold text-start">Day Energy Consumption</p>
<Chart options={options} series={series} type="line" width="100%" />
</Card>
    </Col>
</Row>





<Row gutter={[16, 16]} className="mt-2">
    <Col lg={12} md={24} sm={24}>
    <Card style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
    <p className="fw-bold text-start">Hourly Peek Load (watts)</p>
    <Chart options={options1} series={serial} type="bar" width="100%" />
      </Card>
    </Col>

    <Col  lg={12} md={24} sm={24}>
    
<Card style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
<p className="fw-bold text-start">DayWise peek Load (watts)</p>
<Chart options={options1} series={serial} type="line" width="100%" />
</Card>
    </Col>
</Row>
     
         
        </div>
    );
}

export default TestDashboard;
