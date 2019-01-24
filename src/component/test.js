import React, {Component} from 'react';
import {Spin} from 'antd';
import withLoading from './loadingCheck';
@withLoading(props => {
    return props.isLoading;
  })
class Test extends Component{
    state = {
        name:123
    }
    render(){
        let name = this.state.name
        return (
            <div>
                <div onClick={()=>this.props.clickFresh(name)}>点击刷新</div>
            </div>

        )
    }
  }
export default Test