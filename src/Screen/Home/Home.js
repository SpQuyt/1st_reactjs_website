import React, { Component } from 'react';
import './Home.css';
import ListItem from '../../Component/ListItem/ListItem';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  componentWillMount() {
    this.setState({
      data: this.props.location.state
    });
  }

  render() {
    return (
      <div>
        <ListItem dataList={this.state.data}/>
      </div>
    )
  }
}