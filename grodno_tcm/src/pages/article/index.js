import React, {Component} from 'react';
import {ArticleDetailWrapper} from "./style";

class ArticleDetail extends Component {
    componentDidMount() {
        console.log("Article",this.props.match.params.id);
    }
    render() {
        return (
            <ArticleDetailWrapper>
                ArticleDetail
            </ArticleDetailWrapper>
        )
    }
}

export default ArticleDetail;