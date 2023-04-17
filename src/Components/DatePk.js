import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function DatePk(){

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <>
   
    Date: <DatePicker
    showIcon={true}
    controls={['date']}
    touchUi={true}
    loatLabelType="Auto" 
    placeholderText="Please select a date " 
    selectsRange={true}
    startDate={startDate}
    endDate={endDate}
    onChange={(update) => {
        setDateRange(update);
        console.log(dateRange[1]);
      }}
      // isClearable={true}
      className='red-border'
    />
   
     </>
  );
};
export default DatePk;