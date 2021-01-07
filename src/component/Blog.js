import React, {Component} from 'react';
import axios from 'axios';

class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blog: {}
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:9020/microservices/tb/safe/blogs/`+this.props.match.params.blogId)
        .then(res => {
            this.setState({blog: res.data});
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        const { blog } = this.state;
        return(
            <div>
                <h1>{blog.title}</h1>
            </div>
        );
    }

}

export default Blog;