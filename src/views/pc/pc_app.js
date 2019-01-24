import React from 'react';
import PCHeader from '../../component/pc_header'
import PCFooter from '../../component/pc_footer'
import {Switch,Route} from 'react-router-dom';
import PCNewsContainer from './PCNewsContainer'
import PCSocContainer from './PCSocContainer'

export default class PcApp extends React.Component{
    render(){
        return (
            <div>
                <PCHeader></PCHeader>
                <Switch>
                <Route path="/top" component={PCNewsContainer} />
                <Route path="/shehui" component={PCSocContainer} />
                </Switch>
                <PCFooter></PCFooter>
            </div>
        )
    }
}