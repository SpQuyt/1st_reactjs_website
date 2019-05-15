import React, { Component } from 'react';
import './ListItem.css';
import ItemCard from '../ItemCard/ItemCard';
import GridList from '@material-ui/core/GridList';
import PropTypes from 'prop-types';

export default class ListItem extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="root">
        <GridList className="List-container" cellHeight={10}>
          {this.props.dataList.data.map(function (result) {
            return (<ItemCard name={result.name} age={result.age} />)
          })}
        </GridList>
      </div>

    )
  }
}

ListItem.propTypes = {
  dataList: PropTypes.object,
}