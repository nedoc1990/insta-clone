import React from "react";
import { connect } from "react-redux";
import { fetchProfileInfo } from "../actions/profile-actions";

const HighlightItem = ({ title, image }) => (
  <li className="list-inline-item">
    <div className="mx-auto profile-history">
      <img
        className="rounded-circle my-img-thumbnail img-fluid"
        src={`/${image}`}
        alt={title}
      />
    </div>
    <div className="history-subtitle text-center text-uppercase">{title}</div>
  </li>
);

class Highlight extends React.Component {
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
    const { highlights } = {
      ...this.state.profile
    };

    return (
      <div className="row mt-5 px-5">
        {highlights && (
          <ul className="list-inline histories">
            {highlights.map(item => (
              <HighlightItem key={item.id} {...item} />
            ))}
          </ul>
        )}
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
)(Highlight);
