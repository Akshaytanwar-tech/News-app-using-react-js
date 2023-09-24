import React, { Component } from 'react'

export default class Newscard extends Component {
    render() {
        let { title, description, url, imageurl, author, time } = this.props;
        return (
            <div>
                <div className="card">
                    <img src={imageurl ? imageurl : "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Editor"} at {new Date(time).toUTCString()}</small></p>
                    </div>
                </div>
            </div>
        )
    }
}

