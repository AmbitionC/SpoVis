import React, { Component } from 'react';
import { ButtonToolbar, InputGroup, FormControl } from 'react-bootstrap';

class Upload extends Component {
  render() {
    return (
      <div className='upload'>
        <h4>数据导入:</h4>
        <h5>{}</h5>
        <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="btnGroupAddon">Data</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              placeholder="选择需展示的数据集"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon"
            />
          </InputGroup>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Upload;