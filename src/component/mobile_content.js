import React from 'react';
import img1 from '../img/11a.jpg';
import img2 from '../img/11a.jpg';
import img3 from '../img/11a.jpg';
import img4 from '../img/11a.jpg';
import {Tabs,Carousel} from 'antd';
import MobileNews from './mobile_news';
import {inject,observer} from 'mobx-react';
import Test from './test';

@inject((stores) => {
    return {
        movieStore: stores.store.movieStore
    }
})

@observer class MobileContent extends React.Component {
    state = {
        accountList:[],
        isLoading:false
    }
    componentWillMount = () => {
        console.log(this.props)

    }
    clickFresh = (num)=>{
        console.log(num)
        this.setState((prevState, props) => ({
            isLoading : !prevState.isLoading
          }));
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
        
        // }
        render() {
            const {movieStore} = this.props
            // console.log(movieStore)
      return(
          <div>
              <Tabs>
                  <Tabs.TabPane tab='头条' key='1'>
                      <div>
                          <Carousel autoplay>
                              <div><img  alt="img" height="400" src={img1}/></div>
                              <div><img  alt="img" height="400" src={img2}/></div>
                              <div><img  alt="img" height="400" src={img3}/></div>
                              <div><img  alt="img" height="400" src={img4}/></div>
                          </Carousel>
                      </div>
                        <div>{movieStore.movieList}</div>
                      <MobileNews count={50} type='top' ImageWidth='112px' width='400%'/>
                  </Tabs.TabPane>
    
                  <Tabs.TabPane tab='国内' key='3'>
                      <div>
                          <Carousel autoplay>
                              <div><img  alt="img" height="400" src={img1}/></div>
                              <div><img  alt="img" height="400" src={img2}/></div>
                              <div><img  alt="img" height="400" src={img3}/></div>
                              <div><img  alt="img" height="400" src={img4}/></div>
                          </Carousel>
                      </div>
                      <MobileNews  type='guonei' ImageWidth='112px' width='400%'/>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab='国际' key='4'>
                      <div>
                          <Carousel autoplay>
                              <div><img  alt="img" height="400" src={img1}/></div>
                              <div><img  alt="img" height="400" src={img2}/></div>
                              <div><img  alt="img" height="400" src={img3}/></div>
                              <div><img  alt="img" height="400" src={img4}/></div>
                          </Carousel>
                      </div>
                      <MobileNews  type='guoji' ImageWidth='112px' width='400%'/>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab='娱乐' key='5'>
                      <div>
                          <Carousel autoplay>
                              <div><img  alt="img" height="400" src={img1}/></div>
                              <div><img  alt="img" height="400" src={img2}/></div>
                              <div><img  alt="img" height="400" src={img3}/></div>
                              <div><img  alt="img" height="400" src={img4}/></div>
                          </Carousel>
                      </div>
                      <MobileNews  type='yule' ImageWidth='112px' width='400%'/>
                  </Tabs.TabPane>
    
                  <Tabs.TabPane tab='社会' key='6'>
                      <div>
                          <Carousel autoplay>
                              <div><img  alt="img" height="400" src={img1}/></div>
                              <div><img  alt="img" height="400" src={img2}/></div>
                              <div><img  alt="img" height="400" src={img3}/></div>
                              <div><img  alt="img" height="400" src={img4}/></div>
                          </Carousel>
                      </div>
                      <MobileNews  type='shehui' ImageWidth='112px' width='400%'/>
                  </Tabs.TabPane>
    
                  <Tabs.TabPane tab='体育' key='7'>
                      <div>
                          <Carousel autoplay>
                              <div><img  alt="img" height="400" src={img1}/></div>
                              <div><img  alt="img" height="400" src={img2}/></div>
                              <div><img  alt="img" height="400" src={img3}/></div>
                              <div><img  alt="img" height="400" src={img4}/></div>
                          </Carousel>
                      </div>
                      <MobileNews  type='tiyu' ImageWidth='112px' width='400%'/>
                  </Tabs.TabPane>
    
                  <Tabs.TabPane tab='科技' key='8'>
                      <div>
                          <Carousel autoplay>
                              <div><img  alt="img" height="400" src={img1}/></div>
                              <div><img  alt="img" height="400" src={img2}/></div>
                              <div><img  alt="img" height="400" src={img3}/></div>
                              <div><img  alt="img" height="400" src={img4}/></div>
                          </Carousel>
                      </div>
                      <MobileNews  type='keji' ImageWidth='112px' width='400%'/>
                  </Tabs.TabPane>
    
              </Tabs>
              <Test isLoading={this.state.isLoading} clickFresh={this.clickFresh}/>

          </div>
      );
    }
}
export default MobileContent