import React, { useEffect, useState } from 'react';
import { useToken } from '../../../uility/Hooks';
import { FailureReport } from '../../../axios/Services';
import { failuredatas } from '../../../@type/failurereport';
import { Table, Button,Pagination,Row,Col,Form,DatePicker,Card,Tooltip } from 'antd';
import { filter } from '../../../@type/notificationreport';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import moment from 'moment';
import {
  SearchOutlined,CloseCircleFilled
} from "@ant-design/icons";
import '../../login/Login.module.css'


function FailureReports() {
  const token = useToken();
  const [failurereportdatas, setFailurereportdatas] = useState<failuredatas[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [pagesize,setPagsize]=useState<number>(10);
  const [filterdata, setFilter] = useState<filter>();
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
      handlefailurelistreport(currentPage,pagesize);
    }
  }, [token,currentPage,filterdata,pagesize]);

  const handlefailurelistreport = (currentPage:number, pageSize:number) => {
    let formdata = new FormData();
    formdata.append('token', token || '');
    if(filterdata){
      formdata.append("fromDatetime",filterdata?.FromDate);
    }
    FailureReport(formdata, currentPage, pagesize).then((res) => {
      setFailurereportdatas(res?.data?.data?.items||"");
      setTotalItems(res.data.data.total_count);
    }).catch((res)=>{
      console.log("error");
    });
  };

  const renderContentWithShowMore = (text: string, index: number) => {
    const content = text.slice(0,50); 
    return (
      <>
 
        {content}
   
   {content.length>=50 && (
     <Tooltip title="show More">
     <p style={{color:'blue'}} className='text-end'> Show More</p>
       </Tooltip>  
   )}
        
       
         
     
      </>
    );
  };

  const columns = [
    { title: 'SNO', dataIndex: 'sno', key: 'sno' },
    { title: 'Datetime', dataIndex: 'datetime', key: 'datetime' },
    {
      title: 'API',
      dataIndex: 'api',
      key: 'api',
      render: (text: string, record: failuredatas, index: number) => renderContentWithShowMore(record.api, index)
    },
    {
      title: 'API Response',
      key: 'api_response',
      render: (text: string, record: failuredatas, index: number) => renderContentWithShowMore(record.api_response, index),
    },
    {
      title: 'Params',
      key: 'params',
      render: (text: string, record: failuredatas, index: number) => renderContentWithShowMore(record.params, index),
    },
    { title: 'Call Method', dataIndex: 'call_method', key: 'call_method' },
    { title: 'Response Time', dataIndex: 'response_time', key: 'response_time' },
  ];

  const dataSource = failurereportdatas?.map((ele: failuredatas, index) => ({
    sno: (currentPage - 1) * 10 + (index + 1),
    datetime: ele.datetime,
    api: ele.api,
    api_response: ele.api_response,
    params: ele.params,
    call_method: ele.call_method,
    response_time: ele.response_time,
    id: ele.id,
    response_status: ele.response_status,
    status: ele.status,
  }));
  const handleOk = () => {
    formik.handleSubmit();
  };

  const handlePageChange = (page: number ,pageSize:number) => {
    setCurrentPage(page);
    setPagsize(pageSize);
  };

  const handlereset=()=>{
    formik.resetForm();
    setFilter({
      Todate: '',
      FromDate: ''
    });
    
  }
  const handlefilterforms=()=>{
setfilterforms(!filterforms);
  }
  return (
    <>
 <Row justify="space-between" align="middle">
  <Col xs={12} md={12} sm={24}>
    <h2 className='text-start'>Failure Analysis</h2>
  </Col>
  <Col xs={12} md={12} sm={24} style={{ textAlign: 'right' }}>
  {filterforms ? <Tooltip title="Exit"><CloseCircleFilled onClick={handlefilterforms}/></Tooltip> : <Tooltip title="Filter"><SearchOutlined onClick={handlefilterforms}/></Tooltip> }

  </Col>
</Row>


<Card>
{filterforms && (
  <Row gutter={[24, 8]} className='mt-2'>
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


<div style={{ overflowX: 'auto' }} className='mt-3'>
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

export default FailureReports;
