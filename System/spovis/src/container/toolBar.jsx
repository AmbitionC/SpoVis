import React from 'react';
import { Card } from 'react-bootstrap';

import SearchCity from '../components/toolbar/searchCity.jsx';
import DataImport from '../components/toolbar/dataImport.jsx';
import MacroPlanning from '../components/toolbar/macroPlanning.jsx';
import MicroSelecting from '../components/toolbar/microSelecting.jsx';
import GenerateBtn from '../components/toolbar/generateBtn.jsx';

export default function() {
  return (
    <Card>
      <Card.Body>
        <SearchCity />
        <DataImport />
        <MacroPlanning />
        <MicroSelecting />
        <GenerateBtn />
      </Card.Body>
    </Card>
  )
}