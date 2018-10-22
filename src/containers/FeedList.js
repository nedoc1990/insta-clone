import React from "react";
import { connect } from "react-redux";
import { fetchFeeds, toggleLikeFeed } from "../actions/feed-actions";

const Card = ({
  id,
  username,
  user_profile_pic,
  liked,
  likes,
  content,
  caption,
  comments,
  toggleLike
}) => (
  <div className="card mb-4 box-shadow">
    <div className="card-header bg-white text-title">
      <a href="#/" className="text-dark">
        <img
          className="rounded-circle post-profile-pic"
          src={user_profile_pic}
          alt="profile-pic"
        />
        <span className="pl-2">{username}</span>
      </a>
    </div>
    <img alt="1" src={content} data-holder-rendered="true" />
    <div className="card-body pb-2">
      <section className="mb-2">
        {liked ? (
          <i
            className="fas fa-2x fa-heart mr-3"
            aria-hidden="true"
            onClick={() => toggleLike(id)}
          />
        ) : (
          <i
            className="far fa-2x fa-heart mr-3"
            aria-hidden="true"
            onClick={() => toggleLike(id)}
          />
        )}

        <i className="far fa-2x fa-comment" aria-hidden="true" />
        <i className="far fa-2x fa-bookmark float-right" aria-hidden="true" />
      </section>
      <section className="mb-1">
        <a href="#/" className="text-dark text-title">
          {likes} Me gusta
        </a>
      </section>
      <section className="comments m0">
        <ul className="list-unstyled">
          <li>
            <a href="#/" className="text-dark text-title">
              {username}
            </a>
            <span>{caption}</span>
          </li>
          <li>
            <a href="#/" className="text-muted">
              Cargar más comentarios
            </a>
          </li>
          <li>
            <a href="#/" className="text-dark text-title">
              emmanatha
            </a>
            <span>Lorem ipsum dolor sit amet.</span>
          </li>
          <li>
            <a href="#/" className="text-dark text-title">
              marc.isern
            </a>
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </li>
          <li>
            <a
              className="text-muted m0 font-weight-light text-subtitle"
              href="#/"
            >
              <time
                dateTime="2018-06-09T20:32:28.000Z"
                title="9 de junio de 2018"
              >
                HACE 19 HORAS
              </time>
            </a>
          </li>
        </ul>
      </section>
      <section className="border-top pt-3 pb-0">
        <form action="#/">
          <textarea
            className="border-0 p0 no-outline"
            aria-label="Añade un comentario..."
            placeholder="Añade un comentario..."
            rows="1"
          />
        </form>
      </section>
    </div>{" "}
  </div>
);

class FeedList extends React.Component {
  componentDidMount() {
    this.props.fetchFeeds();
  }

  render() {
    const { feeds, toggleLike } = this.props;
    return feeds.map(feed => {
      return <Card key={feed.id} {...feed} toggleLike={toggleLike} />;
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
    toggleLike: id => dispatch(toggleLikeFeed(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedList);
