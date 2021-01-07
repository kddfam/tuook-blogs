import { Component } from "react";
import './css/home.css';
import image from '../assets/image.jpg';
import axios from "axios";
import authorIcon from '../assets/icons/person-outline.svg';
import peopleIcon from '../assets/icons/people-outline.svg';
import calenderIcon from '../assets/icons/calendar-outline.svg';

class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            blogList: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9020/microservices/tb/safe/blogs')
        .then(res => {
            this.setState({blogList: res.data})
        })
        .catch(err => {
            console.log(err);
        })
    }

    openBlog = (id) => {
        this.props.history.push(`/blogs/${id}`);
    }

    openNews = (id) => {
        this.props.history.push(`/news/${id}`);
    }

    render() {
        const { blogList } = this.state;
        return(
            <div className="home-main-container">
                <div className="blog-section">
                    <div>
                        <div className="news-feed-title">
                            <h2>Freshly written blogs for you</h2>
                        </div>
                    </div>
                    <div>
                        {
                            blogList.map(blog => {
                                return <div className="home-sub-container" key={blog.blogId} onClick={() => { this.openBlog(blog.blogId) }}>
                                    <div className="blog-list">
                                        <img className="image" src={image} alt="blog_image" />
                                        <div className="blog-information">
                                            <div className="information">
                                                <h2 className="title">{blog.title}</h2>
                                                <h4 className="sub-title">{blog.subTitle}</h4>
                                                <h4 className="body">{blog.bodyMain}</h4>
                                            </div>
                                            <div>
                                                <div className="icon-info-pack">
                                                    <img className="icon" src={authorIcon} alt="icon-author"/>
                                                    <h5 className="info">{blog.authorName}</h5>
                                                </div>
                                                <div className="icon-info-pack">
                                                    <img className="icon" src={calenderIcon} alt="icon-calendar"/>
                                                    <h5 className="info">{blog.blogDate}</h5>
                                                </div>
                                                <div className="icon-info-pack">
                                                    <img className="icon" src={peopleIcon} alt="icon-people"/>
                                                    <h5 className="info">{blog.numberOfReaders}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="upcoming-section">
                    <div className="news-feed-title">
                        <h2>News Feed</h2>
                    </div>
                    <div>
                        {
                             blogList.map(blog => {
                                return <div className="home-sub-container" key={blog.blogId} onClick={() => { this.openNews(blog.blogId) }}>
                                    <div className="blog-list">
                                        {/* <img className="image-news" src={image} alt="blog_image"></img> */}
                                        <div className="blog-information">
                                            <div className="information">
                                                <h2 className="title">{blog.title}</h2>
                                                <h4 className="sub-title">{blog.subTitle}</h4>
                                                <h4 className="body">{blog.bodyMain}</h4>
                                            </div>
                                            <div>
                                                <div className="icon-info-pack">
                                                    <img className="icon" src={authorIcon} alt="icon-author"/>
                                                    <h5 className="info">{blog.authorName}</h5>
                                                </div>
                                                <div className="icon-info-pack">
                                                    <img className="icon" src={calenderIcon} alt="icon-calendar"/>
                                                    <h5 className="info">{blog.blogDate}</h5>
                                                </div>
                                                <div className="icon-info-pack">
                                                    <img className="icon" src={peopleIcon} alt="icon-people"/>
                                                    <h5 className="info">{blog.numberOfReaders}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

}
export default Home;