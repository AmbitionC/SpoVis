import React, { Component } from 'react';
import { Dropdown, Button, ButtonGroup } from 'react-bootstrap';

class SortConfig extends Component {
  render() {
    return (
      <div className='sortConfig'>
        <h4>数据统计方式:</h4>
        <h5>{}</h5>
        <Dropdown as={ButtonGroup}>
          <Button variant="Secondary" size='sm'>频谱数据维度A: </Button>
          <Button variant="info" size='sm'>平均值</Button>

          <Dropdown.Toggle split variant="info" id="dropdown-split-basic" size='sm'/>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">平均值</Dropdown.Item>
            <Dropdown.Item href="#/action-2">中位数</Dropdown.Item>
            <Dropdown.Item href="#/action-3">众数</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <h5>{}</h5>
        <Dropdown as={ButtonGroup}>
          <Button variant="Secondary" size='sm'>频谱数据维度B: </Button>
          <Button variant="info" size='sm'>中位数</Button>

          <Dropdown.Toggle split variant="info" id="dropdown-split-basic" size='sm'/>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">平均值</Dropdown.Item>
            <Dropdown.Item href="#/action-2">中位数</Dropdown.Item>
            <Dropdown.Item href="#/action-3">众数</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <h5>{}</h5>
        <Dropdown as={ButtonGroup}>
          <Button variant="Secondary" size='sm'>频谱数据维度C: </Button>
          <Button variant="info" size='sm'>平均值</Button>

          <Dropdown.Toggle split variant="info" id="dropdown-split-basic" size='sm'/>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">平均值</Dropdown.Item>
            <Dropdown.Item href="#/action-2">中位数</Dropdown.Item>
            <Dropdown.Item href="#/action-3">众数</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }
}

export default SortConfig;