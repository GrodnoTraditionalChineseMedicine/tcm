import React, {Component} from 'react';
import {ArticleDetailWrapper} from "./style";
import {connect} from "react-redux";

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

const mapStateToProps = (state) => {
    return {
        article: state.get("article").get("article")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);