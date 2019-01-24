import React from 'react';
import {Icon} from 'antd';
import {Link,withRouter}  from 'react-router-dom'
import LoginRegisterModal from './loginReg';
import {inject,observer} from 'mobx-react';

@inject((stores) => {
    return {
        movieStore: stores.store.movieStore
    }
})

@observer class MobileHeader extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         current: 'top',
    //         hasLogined: false,
    //         modalVisable: false,
    //         userName: '',
    //     };
    // }
    state = {
                current: 'top',
                hasLogined: false,
                modalVisable: false,
                userName: '',
            };
    footStyle = {
        display: 'flex',
    justifyContent: 'space-between',
    padding:' 0 3rem',
    alignItems: 'center'
    }
    setModalVisible = (value) =>{
        this.setState({modalVisable: value});
    }

    handleClick = () =>{
        this.setModalVisible(true);
    }

    //组件加载之前，判断其localstorage是否有值
    componentWillMount(){
        console.log(this.props)
        //表示存在id
        if (localStorage.userId&&localStorage.userId!=='') {
            this.setState({userId:localStorage.userId,userName:localStorage.userName,hasLogined:true});
        }
    };

    //点击登录按钮
    login = (userLogin) =>{
        this.setState({userName:userLogin.userName,hasLogined:true,userId:userLogin.userId});
        localStorage.userName=userLogin.userName;
        localStorage.userId=userLogin.userId;
        
    }

    logout = () =>{
        localStorage.userName = '';
        localStorage.userId = '';
        this.setState({hasLogined: false, userName: '', userId: ''});
    };
    changeName = (e) =>{
      const  {movieStore} = this.props;
      movieStore.setValue("movieList",'chou')
    }
    render() {
        const userShow = this.state.hasLogined ?
            <Icon type='inbox' onClick={this.logout}/> : <Icon type='setting' onClick={this.handleClick}/>;
        const logo = require('../img/11a.jpg')

        return (
            <div id="mobile">
                <header style={this.footStyle}>
                    <Link to='/'><img src={logo} alt="mobile_logo" width="46" height="46"/></Link>
                    <span style={{color:'#1890ff'}} onClick={this.changeName}>新闻头条</span>
                    {userShow}
                </header>
                <LoginRegisterModal setModalVisible={this.setModalVisible} login={this.login}
                                    visible={this.state.modalVisable}/>
            </div>
        );
    }
}
export default withRouter(MobileHeader);