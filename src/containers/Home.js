import { connect } from 'react-redux';
import Home from '../components/Home';

// state here is redux store state i.e. the result of store.getState()
// the container component will pass props to the 
// corresponding presentational component
function mapStateToProps(state){
  return {
    user: state.user
  }
}

// connect will return a component
let HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;
