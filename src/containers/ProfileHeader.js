import React from "react";
import { connect } from "react-redux";
import { fetchProfileInfo } from "../actions/profile-actions";

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {}
    };
  }

  componentDidMount() {
    this.props.fetchProfileInfo().then(json => {
      const profile = json.find(profile => {
        return profile.username === this.props.username;
      });

      if (typeof profile !== undefined) {
        this.setState({
          profile
        });
      }
    });
  }

  render() {
    const { image, name, description, username, link, mutualfollowers } = {
      ...this.state.profile
    };

    return (
      <div className="row">
        <div className="col-4">
          <div className="profile-picture mx-auto">
            <img
              className="rounded-circle img-fluid my-img-thumbnail"
              src={`/${image}`}
              alt="user-profile"
            />
          </div>
        </div>
        <div className="col-8">
          <div className="row">
            <nav className="nav pt-2">
              <h2 className="big-light-text">{username}</h2>
              <span className="fa-stack mx-1 pt-2">
                <i
                  className="fas fa-circle fa-stack-2x"
                  style={{ color: "#3E99ED" }}
                />
                <i className="fas fa-check fa-stack-1x fa-inverse" />
              </span>
              <span className="ml-3 pt-1">
                <button
                  type="button"
                  className="btn bg-light btn-sm px-4 border nohover profile-bold"
                >
                  Siguiendo
                </button>
              </span>
              <span className="ml-2 pt-1">
                <button
                  type="button"
                  className="btn bg-light btn-sm px-3 border nohover"
                >
                  <i className="fas fa-caret-down" />
                </button>
              </span>
              <span className="mx-3 pt-2 font-weight-light">
                <i className="fas fa-ellipsis-h" />
              </span>
            </nav>
          </div>

          <div className="row mt-2">
            <ul className="list-unstyled list-inline profile-stats">
              <li className="list-inline-item">
                <span className="profile-bold">1291</span> publicaciones
              </li>
              <li className="list-inline-item ml-4">
                <span className="profile-bold">53,9mm</span> seguidores
              </li>
              <li className="list-inline-item ml-4">
                <span className="profile-bold">87</span> seguidos
              </li>
            </ul>
          </div>

          <div className="row mt-2 profile-stats">
            <span className="profile-bold">{name}</span>
            <br />
            <span>{description}</span>
            <a
              className="profile-bold"
              href="https://l.instagram.com/?u=http%3A%2F%2Fbit.ly%2FDream2D17bot&amp;e=ATNlMOy3vo6i4fOfY4lEBIQ98YE6Z4QlqUi78vyW_kKF_1MlwpPbV3tR6G8C8ZbYmFpg4KvlCE1V97y0"
              rel="me nofollow noopener noreferrer"
              target="_blank"
            >
              {link}
            </a>
          </div>
          <div className="row mt-2">
            {mutualfollowers && (
              <span className="followed">
                {mutualfollowers.length > 0 ? "Le siguen" : ""}
                {mutualfollowers.map((follower, i) => {
                  return (
                    <span key={follower.id} className="follower">
                      {" "}
                      {follower.username}
                      {mutualfollowers.length > 1
                        ? i === mutualfollowers.length - 2
                          ? " y"
                          : i < mutualfollowers.length - 1
                            ? ","
                            : ""
                        : ""}
                    </span>
                  );
                })}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile.item,
    loading: state.profile.loading,
    error: state.profile.error
  };
};

const mapActionsToProps = dispatch => {
  return {
    fetchProfileInfo: () => dispatch(fetchProfileInfo())
  };
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(ProfileHeader);
