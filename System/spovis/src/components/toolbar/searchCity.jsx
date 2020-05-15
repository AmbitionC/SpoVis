import React, { Component } from 'react';
import { ButtonToolbar, InputGroup, FormControl } from 'react-bootstrap';
import { Divider } from 'antd';

class SearchCity extends Component {
  render() {
    return (
      <div className='searchCity'>
        <Divider>Select City</Divider>
        <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="btnGroupAddon">City</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              placeholder="Search Target City"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon"
            />
          </InputGroup>
        </ButtonToolbar>
      </div>
    )
  }
}

export default SearchCity;