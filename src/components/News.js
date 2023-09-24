import React, { Component } from 'react';
import Newscard from './Newscard';
import Loading from './Loading';

export default class News extends Component {
    articles = [];
    constructor() {
        super();

        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
        }
    }
    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.categories}&apiKey=c839cd7437254d42a3926e8bb80b5031&page=${this.state.page}&pageSize=20`;
        const data = await fetch(url);
        const fetchData = await data.json();
        this.setState({
            articles: fetchData.articles,
            totalResults: fetchData.totalResults
        })
    }
    previouspage = async () => {
        console.log("Previous clicked");
        this.setState({
            loading: true
        })
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.categories}&apiKey=c839cd7437254d42a3926e8bb80b5031&page=${this.state.page - 1}&pageSize=20`;
        const data = await fetch(url);
        const fetchData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: fetchData.articles,
            loading: false
        })

    }
    nextpage = async () => {

        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
        }
        else {
            console.log("Next clicked");
            this.setState({
                loading: true
            })
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.categories}&apiKey=c839cd7437254d42a3926e8bb80b5031&page=${this.state.page + 1}&pageSize=20`;

            const data = await fetch(url);
            const fetchData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: fetchData.articles,
                loading: false
            })


        }

    }

    render() {
        return (
            <div>
                <h1 className='my-4' style={{ textAlign: "center" }}>CricNews - Every News Here</h1>

                <div className="row m-5">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className='col-sm-4' key={element.url}>
                            <Newscard title={element.title} description={element.description} imageurl={element.urlToImage} url={element.url} author={element.author} time={element.publishedAt}  source={element.source.name}/>
                        </div>

                    })}
                    {this.state.loading && <Loading />}

                    <div className="d-flex justify-content-between  my-3">
                        <button type="button" disabled={this.state.page <= 1} className="btn btn-secondary btn-lg" onClick={this.previouspage}> &larr; Previous  </button>
                        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className="btn btn-secondary btn-lg" onClick={this.nextpage}>Next &rarr;</button>
                    </div>
                </div>

            </div>
        )
    }
}
