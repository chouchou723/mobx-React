import React, {Component} from 'react';
import {Spin} from 'antd';
const a = {
    marginTop : '6px'
}
export default function (loadingCheck) {
  return function (WrappedComponent) {
    return class extends WrappedComponent {
        
      componentWillUpdate(nextProps, nextState) {
        console.log('withLoading将会更新',nextProps.isLoading);
      }
      render() {
        var style= {
            marginTop : '5px'
        }
        if (loadingCheck(this.props)) {
          return (
              <div>
<Spin tip="加载中" size="large">
            {super.render()}
          </Spin>
            <div onClick={this.props.clickFresh} style={{marginTop:'20px'}}>停止刷新</div>      
            <div onClick={this.props.clickFresh} style={style}>无敌刷新</div>      
            <div onClick={this.props.clickFresh} style={a}>无敌刷新2</div>      
              </div>
          )    
        } else {
          return super.render();
        }
      }
    }
  }
}