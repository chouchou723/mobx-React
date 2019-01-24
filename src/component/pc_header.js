import React from 'react';
import {Row,Col} from 'antd';
import Nav from './navi';
import LoginRegisterModal from './loginReg'
export default class PCHeader extends React.Component{
    state = {
        hasLogined: false,//表示是否登陆
            userName: '', //表示用户名
            userId: '',   //表示用户id
            current: 'top',//表示当前点击的导航
            modalVisable: false, //表示登录注册的模态框是否显示
    }
    componentWillMount = () => {
      if(localStorage.userId && localStorage.userId !== ''){
          this.setState({
            userId: localStorage.userId,
            userName: localStorage.userName, 
            hasLogined: true
          })
      }
    }
    MenuItemClick = (e) =>{
        //注册登录MenuItem点击后，设置current值，显示注册登录的模态框
        if (e.key === 'register') {
            //高亮显示当前点击的MenuItem
            this.setState({current: 'register'});
            //显示模态框
            this.setModalVisible(true);
        } else {
            this.setState({current: e.key});
        }
    }
    setModalVisible = (value) =>{
        this.setState({modalVisable: value});
    }
    logout = () =>{
        localStorage.userName = '';
        localStorage.userId = '';
        this.setState({hasLogined: false, userName: '', userId: ''});
    }
    login = (userLogin) =>{
        this.setState({userName: userLogin.userName, hasLogined: true, userId: userLogin.userId});
        localStorage.userName = userLogin.userName;
        localStorage.userId = userLogin.userId;
    }
    render(){
        const logo = require('../img/11a.jpg')
        return (
            <header>
                <Row>
                    <Col span={4}>
                        <a className='logo' href='/'>
                            <img src={logo} alt='logo' width='46' height="46"/ >
                            <span style={{'fontSize':'18px'}}>新闻头条</span>
                        </a>
                    </Col>
                    <Col span={16}>
                       <Nav hasLogined={this.state.hasLogined} logout={this.logout}
                            userName={this.state.userName} current={this.state.current}
                            menuItemClick={this.MenuItemClick}/>
                        <LoginRegisterModal setModalVisible={this.setModalVisible} login={this.login} 
                        visible={this.state.modalVisable}/>
                    </Col>
                    <Col span={4}></Col>
                </Row>
            </header>
        )
    }
    
}