import React from 'react';
import { connect } from 'react-redux'
import { fetchData } from "../redux/actions";

class ReduxComp extends React.Component {
    componentDidMount() {
        this.props.fetchData();
    }
    renderList = () => {
        return this.props.data.map(item => {
            return (
                <div className="item" key={item.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() { 
    return this.props.data.length > 0 ? <div className="ui relaxed divided list">{this.renderList() }</div> : <div>NOTHING TO SHOW</div>
    }
}

const mapStateToProps = (state) => {
    return {data : state.data}
}
 
export default connect(mapStateToProps, {fetchData})(ReduxComp);