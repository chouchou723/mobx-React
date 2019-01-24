import React from 'react';
import MobileHeader from '../../component/mobile_header';
import MobileFooter from '../../component/mobile_footer';
import MobileContent from '../../component/mobile_content';
//import vm from '../../mock'//单独从某个父级传入mock,在需要的地方传入mock,达到不同组件的传值改变值
{/* <MobileHeader vm={vm}/>
<MobileContent vm={vm}/> */}
export default class MobileApp extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader/>
                <MobileContent/>
                <MobileFooter/>
            </div>
        );
    }
}