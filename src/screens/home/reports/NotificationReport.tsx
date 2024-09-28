import { filter, notificationreports } from '../../../@type/notificationreport';
import { notificationlistReport } from '../../../axios/Services';
import { useToken } from '../../../uility/Hooks';
import { useState, useEffect } from 'react';
import { Table, Row, Col, Pagination, Input, Button, DatePicker, Form,Card, } from 'antd';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import moment from 'moment';
import {
  SearchOutlined,CloseCircleFilled
} from "@ant-design/icons";



function NotificationReport() {
  const token = useToken();
  const [notificationReports, setNotificationReports] = useState<notificationreports[]>([]);
  const [filterdata, setFilter] = useState<filter>();
  
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagesize,setPagsize]=useState<number>(10);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [filterforms,setfilterforms]=useState<boolean>(false)

  const validationSchema = Yup.object({
    Todate: Yup.string(),
    FromDate: Yup.string(),
  });

  const formik = useFormik<filter>({
    initialValues: {
      Todate: '',
      FromDate: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values: filter) => {
      console.log("hi")
      setFilter(values);
    },
  });

  useEffect(() => {
    if (token) {
      handlenotificationlist(currentPage,pagesize);
    }
  }, [token, currentPage,filterdata,pagesize]);

  const handlenotificationlist = (currentPage:number,pagesize:number) => {
    let formdata = new FormData();
    formdata.append("token", token || "");
    if(filterdata){
      formdata.append("fromDatetime",filterdata?.FromDate);
    }
    notificationlistReport(formdata, currentPage, pagesize).then((res) => {
      setNotificationReports(res?.data?.data?.items[0].data || []);
      setTotalItems(res.data.data.total_count);
    }).catch(()=>{
      console.log("error")
    });
  };

  const handlePageChange = (page: number ,pageSize:number) => {
    setCurrentPage(page);
    setPagsize(pageSize);
  };

  const columns = [
  
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      onCell: (_: notificationreports, index?: number) => {
        if (index === 0) {
          return {
           
            rowSpan: pagesize,
        
          };
        }
        if (index && index >= 0) {
          return {
            rowSpan: 0,
          };
        }
        return {};
      },
    },
    { title: 'S.No', dataIndex: 'sno', key: 'sno' },
    { title: 'Alert Type', dataIndex: 'alert_start_value', key: 'alert_start_value' },
    { title: 'On Time', dataIndex: 'on_time', key: 'on_time' },
    { title: 'Off Time', dataIndex: 'off_time', key: 'off_time' },
    { title: 'Duration (s)', dataIndex: 'duration', key: 'duration' },
    { title: 'Max Phase', dataIndex: 'max_phase', key: 'max_phase' },
    { title: 'Max Phase Name', dataIndex: 'max_phase_name', key: 'max_phase_name' },
  ];

  const dataSource = notificationReports.map((report, index) => ({
    sno: (currentPage - 1) * 10 + (index + 1),
    ...report,  
   
  }));

  const handleOk = () => {
    formik.handleSubmit();
  };
  const handlereset=()=>{
    formik.resetForm();
    setFilter({
      Todate: '',
      FromDate: ''
    });
  
  }
 console.log(filterdata)
 const handlefilterforms=()=>{
  setfilterforms(!filterforms);
    }

  return (
    <>
     <Row justify="space-between" align="middle" gutter={[16,16]}>
  <Col xs={12} md={12} sm={24}>
    <h2 className='text-start'>Notification Analysis</h2>
  </Col>
  <Col xs={12} md={12} sm={24} style={{ textAlign: 'right' }}>
  {filterforms ? <CloseCircleFilled onClick={handlefilterforms}/> :  <SearchOutlined onClick={handlefilterforms}/>}
  </Col>
</Row>

<Card>
  
{filterforms && (
  <Row  className='mt-2'>
    <Form layout="vertical" onFinish={handleOk}> 
      <Row gutter={[16, 16]}>
        
        <Col>
          <Form.Item label="FromDate:" className='text-start'>
            <DatePicker
              name="FromDate"
              showTime
              value={formik.values.FromDate ? moment(formik.values.FromDate) : null}
              onChange={(date, datestring) => formik.setFieldValue("FromDate", datestring)}
            />
          </Form.Item>
        </Col>

        <Col>
          <Form.Item label="ToDate:" className='text-start'>
            <DatePicker
              name="Todate"
              showTime
              value={formik.values.Todate ? moment(formik.values.Todate) : null}
              onChange={(date, datestring) => formik.setFieldValue("Todate", datestring)}
              disabledDate={(current) => {
                return (
                  current &&
                  current <
                    moment(formik.values.FromDate, "YYYY-MM-DD")
                );
              }}
            />
          </Form.Item>
        </Col>
        

          <Col  className='pt-4'>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>

          <Col className='pt-4'>
            <Form.Item>
              <Button onClick={handlereset}>
                Reset
              </Button>
            </Form.Item>
          </Col>
  
        
      </Row>
    </Form>
  </Row>
)}
  <div style={{ overflowX: 'auto' }} className='mt-2'>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          bordered
         
        />
  
  <Row className="me-5 float-end p-5">
            <Pagination
              current={currentPage}
              pageSize={pagesize}
              total={totalItems}
              onChange={handlePageChange}
          
            />
          </Row>
      </div>
  </Card>
       
 
    </>
  );
}

export default NotificationReport;
