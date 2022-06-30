import { Tabs } from 'antd';
import ComponentContentAtas from './ComponentContentAtas';
const { TabPane } = Tabs;

const ContentAtas = () => (
  <div className="card-container" style={{marginLeft:"20px"}}>
    <Tabs type="card" style={{height: "100vh",width: "1125px",tabSize:"50px"}}>
      <TabPane tab="Report Acounting" key="1"  >
          <ComponentContentAtas/>
      </TabPane>
      
    </Tabs>
  </div>
);

export default ContentAtas;