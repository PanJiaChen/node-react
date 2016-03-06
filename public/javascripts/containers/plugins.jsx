'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabletest from '../components/table.jsx';
import configureStore from '../store/configureStore';
import * as actionCreators from '../actions/common';

class Plugins extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(actionCreators.fetchContent('plugins'));
  }

  render() {
    let { content } = this.props;

    return (
      <div>
        <div className="markdown-body" dangerouslySetInnerHTML={{__html: content}}/>
        <Tabletest />
      </div>


    )
  }
}

export default connect((state) => {
  let { content } = state;

  return {
    content: content.data
  }
})(Plugins);

