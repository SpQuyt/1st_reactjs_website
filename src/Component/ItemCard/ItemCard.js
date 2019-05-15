import React, { Component } from 'react';
import './ItemCard.css';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'

export default class ItemCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Card-container">
        <div className="Card-footer">
          <Typography className="Name" color="textPrimary">
            {this.props.name}
          </Typography>
          <Typography className="Age" color="textPrimary">
            {this.props.age}
          </Typography>
        </div>
      </div>
    );
  }
}

ItemCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  // avatar: PropTypes.string
}