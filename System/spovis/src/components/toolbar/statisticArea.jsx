import React, { Component } from 'react';
import { Dropdown, Button, ButtonGroup } from 'react-bootstrap';

class StatisticArea extends Component {
  render() {
    return (
      <div className='statisticArea'>
        <h4>数据统计设置:</h4>
        <h5>{ }</h5>
        <Dropdown as={ButtonGroup}>
          <Button variant="Success" size='sm'>统计区域A: </Button>
          <Button variant="success" size='sm'>占用比</Button>

          <Dropdown.Toggle split variant="success" id="dropdown-split-basic" size='sm'/>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">平均值</Dropdown.Item>
            <Dropdown.Item href="#/action-2">中位数</Dropdown.Item>
            <Dropdown.Item href="#/action-3">众数</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <h5>{ }</h5>
        <Dropdown as={ButtonGroup}>
          <Button variant="Success" size='sm'>统计区域B: </Button>
          <Button variant="success" size='sm'>占用度</Button>

          <Dropdown.Toggle split variant="success" id="dropdown-split-basic" size='sm'/>

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

export default StatisticArea;