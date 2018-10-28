import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchHistories } from "../actions/history-actions";

const HistoryList = ({ histories }) => {
  return histories.map(history => {
    return <HistoryItem key={history.id} {...history} />;
  });
};

const HistoryItem = ({ time, username, user_profile_pic }) => {
  return (
    <div className="row mb-3">
      <div className="col-2">
        <Link className="text-dark" to={`/${username}/`}>
          <img
            className="rounded-circle history-profile-pic my-img-thumbnail"
            src={user_profile_pic}
            alt="user-profile-pic"
          />
        </Link>
      </div>
      <div className="pl-4 col-10 d-flex flex-column justify-content-center">
        <div>
          <Link to={`/${username}/`} className="text-title text-dark">
            {username}
          </Link>
        </div>
        <div className="text-muted font-weight-light text-history-subtitle">
          {time}
        </div>
      </div>
    </div>
  );
};

class History extends React.Component {
  componentDidMount() {
    this.props.fetchHistories();
  }

  render() {
    return (
      <div className="card mt-3 px-3 py-2">
        <div className="d-flex">
          <span className="font-weight-light mr-auto card-title">
            Historias
          </span>
          <span className="text-title">
            <a href="#/" className="text-dark text-subtitle">
              Ver todas
            </a>
          </span>
        </div>
        <HistoryList histories={this.props.histories} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    histories: state.histories.items,
    loading: state.histories.loading,
    error: state.histories.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHistories: () => dispatch(fetchHistories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
