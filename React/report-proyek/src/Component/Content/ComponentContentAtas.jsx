import { Breadcrumb, Space, Typography } from 'antd';
const {Link} = Typography

const ComponentContentAtas = () => (
  <Breadcrumb>

    <Breadcrumb.Item >
    <p>
      <Space style={{marginLeft:"56px"}}>
      <div>
       <p  style={{fontFamily:"fantasy", fontSize:"25px"}}> Account Receivble </p>

      </div>
      </Space>
      <Space style={{marginLeft:"200px",}}>
        <div style={{ fontFamily:"fantasy",fontSize:"25px"}}> Account Payable </div>

      <Link target="_blank" href="/generaljournal" style={{ fontFamily:"fantasy", fontSize:"25px"}}></Link>
    
      </Space>
      <Space style={{marginLeft:"200px",}}>
        <div style={{ fontFamily:"fantasy",fontSize:"25px"}}> Cash Bank </div>
      
      <Link target="_blank" href="http://www.alipay.com/" style={{ fontFamily:"fantasy",fontSize:"25px"}}></Link>
        </Space>
        </p>
        <p>
      <Space style={{marginLeft:"56px"}}>
      <div>
       <p  style={{fontFamily:"fantasy", fontSize:"25px"}}> General Ledger </p>

      </div>
      </Space>
      <Space style={{marginLeft:"235px"}}>
        <div style={{ fontFamily:"fantasy",fontSize:"25px"}}> Honor Doctor </div>

      <Link target="_blank" href="/generaljournal" style={{ fontFamily:"fantasy", fontSize:"25px"}}></Link>
    
      </Space>
        </p>
  
  
      


    </Breadcrumb.Item>
  </Breadcrumb>
);

export default ComponentContentAtas;