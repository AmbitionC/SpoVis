import React, { Component } from 'react';
import { Divider } from 'antd';
import Title from './title.jsx';
import Bar from './bar.jsx';
import BoxPlot from './boxplot.jsx';

class FactorArea extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='line-1'>
          <div className='row'>
            <div className='col-12 col-lg-3'>
              <Title title={'Type of Facilities'} />
            </div>
            <div className='col-12 col-lg-3'>
              <Title title={'Recommend'} />
            </div>
            <div className='col-12 col-lg-3'>
              <Title title={'Service Number'} />
            </div>
            <div className='col-12 col-lg-3'>
              <Title title={'Building Costs'} />
            </div>
          </div>
        </div>
        <Divider className='factors-divider' />

        <div className='line-2'>
          <div className='row'>
            <div className='col-12 col-lg-3'>
              <Title title={'Equipments'} />
            </div>
            <div className='col-12 col-lg-3'>
              <Bar value={70}/>
            </div>
            <div className='col-12 col-lg-3'>
              <Bar value={57}/>
            </div>
            <div className='col-12 col-lg-3'>
              <BoxPlot index={0} />
            </div>
          </div>

        </div>
        <Divider className='factors-divider' />

        <div className='line-3'>
          <div className='row'>
            <div className='col-12 col-lg-3'>
              <Title title={'Gym'} />
            </div>
            <div className='col-12 col-lg-3'>
              <Bar value={50}/>
            </div>
            <div className='col-12 col-lg-3'>
              <Bar value={87}/>
            </div>
            <div className='col-12 col-lg-3'>
              <BoxPlot index={1} />
            </div>
          </div>
        </div>

        <Divider className='factors-divider' />

        <div className='line-4'>
          <div className='row'>
            <div className='col-12 col-lg-3'>
              <Title title={'Outdoor Courts'} />
            </div>
            <div className='col-12 col-lg-3'>
              <Bar value={32}/>
            </div>
            <div className='col-12 col-lg-3'>
              <Bar value={61}/>
            </div>
            <div className='col-12 col-lg-3'>
              <BoxPlot index={2} />
            </div>
          </div>

        </div>
        <Divider className='factors-divider' />

        <div className='line-5'>
          <div className='row'>
            <div className='col-12 col-lg-3'>
              <Title title={'Stadiums'} />
            </div>
            <div className='col-12 col-lg-3'>
              <Bar value={92}/>
            </div>
            <div className='col-12 col-lg-3'>
              <Bar value={30}/>
            </div>
            <div className='col-12 col-lg-3'>
              <BoxPlot index={4} />
            </div>
          </div>
        </div>
        <Divider className='factors-divider' />

      </React.Fragment>
    )
  }
}

export default FactorArea;