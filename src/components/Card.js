import React from "react";
import { Link } from "react-router-dom";
import Comment from "../components/Comment";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ""
    };
  }

  handleComment = evt => {
    this.setState({
      comment: evt.target.value
    });
  };

  handleFormSubmit = () => {
    if (this.state.comment === "") {
      return;
    }
    this.props.handleFormSubmit(this.props.id, this.state.comment);

    this.setState({
      comment: ""
    });
  };

  render() {
    const {
      id,
      username,
      user_profile_pic,
      liked,
      likes,
      content,
      caption,
      comments,
      toggleLike
    } = this.props;

    return (
      <div className="card mb-4 box-shadow">
        <div className="card-header bg-white text-title">
          <Link className="text-dark" to={`/${username}/`}>
            <img
              className="rounded-circle post-profile-pic"
              src={user_profile_pic}
              alt="profile-pic"
            />
            <span className="pl-2">{username}</span>
          </Link>
        </div>
        <img
          alt="1"
          src={content}
          data-holder-rendered="true"
          onDoubleClick={() => toggleLike(id)}
        />
        <div className="card-body pb-2">
          <section className="mb-2">
            {liked ? (
              <i
                className="fas fa-2x fa-heart mr-3"
                style={{ color: "#EB4B59" }}
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
            <i
              className="far fa-2x fa-bookmark float-right"
              aria-hidden="true"
            />
          </section>
          <section className="mb-1">
            <a href="#/" className="text-dark text-title">
              {likes} Me gusta
            </a>
          </section>
          <section className="comments m0">
            <ul className="list-unstyled mb-2">
              <li>
                <a href="#/" className="text-dark text-title">
                  {username}
                </a>
                <span className="pl-2">{caption}</span>
              </li>
              <li className="pt-1">
                <a href="#/" className="text-muted">
                  Cargar más comentarios
                </a>
              </li>
              {comments.map(comment => (
                <Comment key={comment.id} {...comment} />
              ))}
              <li>
                <a
                  className="text-muted m0 font-weight-light text-history-subtitle"
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
            <form
              //   ref={el => (this.myFormRef = el)}
              onSubmit={this.handleFormSubmit}
            >
              <input
                placeholder="Añade un comentario..."
                className="border-0 p0 pb-2 no-outline stretch"
                type="text"
                value={this.state.comment}
                onChange={this.handleComment}
              />
              {/* <textarea
                className="border-0 p0 no-outline stretch"
                aria-label="Añade un comentario..."
                placeholder="Añade un comentario..."
                rows="1"
                value={this.state.comment}
                onChange={this.handleComment}
                onClick={this.handleFormSubmit}
              /> */}
            </form>
          </section>
        </div>{" "}
      </div>
    );
  }
}

export default Card;
