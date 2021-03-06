import { connect } from 'react-redux';
import { addMovies, addPopularMovies, setActiveUser, setFavorites } from '../actions';
import App from '../components/app';

const mapStateToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMovies: (data) => {
      dispatch(addMovies(data));
    },
    addPopularMovies: (data) => {
      dispatch(addPopularMovies(data));
    },
    setActiveUser: (data) => {
      dispatch(setActiveUser(data));
    },
    setFavorites: (data) => {
      dispatch(setFavorites(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
