import React, { Component } from 'react';
import { ButtonToolbar, InputGroup, FormControl } from 'react-bootstrap';
import { Divider } from 'antd';

class DataImport extends Component {
  render() {
    return (
      <div className='upload'>
        <Divider>Import Dataset</Divider>
        <h5>{}</h5>
        <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Statistical Dataset"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon"
            />
            <InputGroup.Prepend>
              <InputGroup.Text id="importBtn">Import</InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
        </ButtonToolbar>
      </div>
    )
  }
}

export default DataImport;