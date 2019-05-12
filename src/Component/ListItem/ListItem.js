import React, { Component } from 'react';
import './ListItem.css';
import PropTypes from 'prop-types';

export default class ListItem extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        {this.props.dataList.data.map(function(d){
         return (<li key={d.name}>{d.name}</li>)
       })}
      </div>
    )
  }
}

ListItem.propTypes = {
  dataList: PropTypes.object,
}