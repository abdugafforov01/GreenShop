import { Tabs } from 'antd';
import Login from '../shop-login';
import Register from '../shop-register';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `Login`,
    children: <Login/>,
  },
  {
    key: '2',
    label: `Register`,
    children: <Register/>,
  },
];
const Tab = () => <Tabs defaultActiveKey="1" centered items={items} onChange={onChange} />;
export default Tab;