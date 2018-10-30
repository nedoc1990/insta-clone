import React from "react";
import { connect } from "react-redux";
import { fetchProfileInfo } from "../actions/profile-actions";

const MediaItem = ({ image, likes, comments }) => (
  <div className="col-4">
    <div>
      <img className="img-fluid" src={`/${image}`} alt="shak" />
    </div>
    <div className="image-cover">
      <div className="d-flex justify-content-center align-items-center invisible">
        <span className="text-white font-weight-bold mr-3 d-flex align-items-center">
          <i className="fas fa-2x fa-heart" />
          <span className="ml-2">{likes}</span>
        </span>
        <span className="text-white font-weight-bold ml-3 d-flex align-items-center">
          <i className="fas fa-2x fa-comment" />
          <span className="ml-2">{comments}</span>
        </span>
      </div>
    </div>
  </div>
);

const Media = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: []
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
    const { media } = { ...this.state.profile };

    return (
      <div className="row mb-4">
        {media && media.map(m => <MediaItem key={m.id} {...m} />)}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    profile: state.profile.item,
    loading: state.profile.loading,
    error: state.profile.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProfileInfo: () => dispatch(fetchProfileInfo())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Media);
