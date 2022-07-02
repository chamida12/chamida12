import { Breadcrumb, Space, Typography } from 'antd';
const {Link} = Typography

const ComponentContentAtas = () => (
  <Breadcrumb>

    <Breadcrumb.Item >
    <div>
      <p>
        <Space style={{marginLeft:"56px"}}>
          <div>
            <p  style={{fontFamily:"fantasy", fontSize:"25px"}}> Account Receivble </p>
            <p></p>

          </div>
        </Space>
        <Space style={{marginLeft:"200px",}}>
          <div style={{ fontFamily:"fantasy",fontSize:"25px"}}> Account Payable </div>
        </Space>
        <Space style={{marginLeft:"200px",}}>
          <div>
            <p style={{ fontFamily:"fantasy",fontSize:"25px"}}> Cash Bank </p>
            <Link href='/input-petty-cash' > Petty Cash </Link>

          </div>
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
          </Space>
            </p>
    </div>
      


    </Breadcrumb.Item>
  </Breadcrumb>
);

export default ComponentContentAtas;