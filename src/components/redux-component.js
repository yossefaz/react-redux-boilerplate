import React from 'react';
import { connect } from 'react-redux'
import { fetchData } from "../redux/actions";

class ReduxComp extends React.Component {
    componentDidMount() {
        this.props.fetchData();
    }
    render() { 
        return ( <div></div> );
    }
}
 
export default connect(null, {fetchData})(ReduxComp);