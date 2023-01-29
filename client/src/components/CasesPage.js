import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import CaseCard from './CaseCard';

const cases = require('../cases.json')

const CasesPage = () => {

  return (
    <div style={{margin:"0 auto", width:"70%", padding:"5%", textAlign:"left"}}>
      {cases.map(x => <><CaseCard {...x}/><br/></>)}
    </div>
  )



}

export default CasesPage