import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'antd';
import FactorArea from '../components/factorInfo/factorsArea.jsx';

class FactorsInfo extends Component {
  render() {
    return (
      <Card>
        <Card.Header>
          <h4>Factors Viusalization Area</h4>
          <Button icon="double-right" />
        </Card.Header>
        <Card.Body>
          <FactorArea />
        </Card.Body>
      </Card>
    )
  }
}

export default FactorsInfo;