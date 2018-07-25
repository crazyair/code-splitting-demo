import React from "react";
import { render } from "react-dom";
// import "antd/dist/antd.css";
import Loadable from 'react-loadable';
import { Layout, Menu, Breadcrumb ,DatePicker} from 'antd';

import './index.less';
//这个如果不注释 样式就会存在
// const {Header, Content, Footer} = Layout;

class Load extends React.Component {
  render() {
      return <div>1</div>;
  }
}
const Demo = Loadable({
  loader: () => import('./component/demo'),
  loading: Load
});

const App = () => {
  return (
    <div>
    <DatePicker/>
      <Demo/>
    </div>
  );
};

render(<App />, document.getElementById("root"));
