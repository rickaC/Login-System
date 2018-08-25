
import Main from './Main'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as action from '../Redux/action'
import {withRouter} from 'react-router'



function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(action, dispatch);

}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App;