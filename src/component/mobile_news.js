import React from 'react';

import MobileNewsComponent from './mobile_news_component'
// import LoadMore from './LoadMore'

export default class MobileNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    componentDidMount() {
        let fetchOption = {method: 'GET'};
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.state.count, fetchOption)
            .then(response => response.json())
            .then(json => this.setState({news: json}));
    }

    render() {
        const news = this.state.news;

        const newsList = news.length ?
           <MobileNewsComponent news={news} ImageWidth={this.props.ImageWidth}/>
            : '正在加载';

        return (
            <div className='mobile_news'>
                {newsList}
            </div>
        );
    }
}