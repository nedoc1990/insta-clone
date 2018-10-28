import React from "react";
import { connect } from "react-redux";
import Card from "../components/Card";
import {
  fetchFeeds,
  toggleLikeFeed,
  addComment
} from "../actions/feed-actions";

class FeedList extends React.Component {
  componentDidMount() {
    this.props.fetchFeeds();
  }

  handleFormSubmit = (feed, content) => {
    this.props.addComment(feed, content);
  };

  render() {
    const { feeds, toggleLike } = this.props;
    return feeds.map(feed => {
      return (
        <Card
          key={feed.id}
          {...feed}
          toggleLike={toggleLike}
          handleFormSubmit={this.handleFormSubmit}
        />
      );
    });
  }
}

const mapStateToProps = state => ({
  feeds: state.feeds.items,
  error: state.feeds.error,
  loading: state.feeds.loading
});

const mapDispatchToProps = dispatch => {
  return {
    fetchFeeds: () => dispatch(fetchFeeds()),
    toggleLike: id => dispatch(toggleLikeFeed(id)),
    addComment: (id, content) => dispatch(addComment(id, content))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedList);
