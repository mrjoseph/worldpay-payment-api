import React, { Component } from 'react';
import { connect } from 'react-redux';
class Summary extends Component {
  render() {
    return (
        <div>
          End
        </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps,mapDispatchToProps)(Summary);
