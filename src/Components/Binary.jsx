import React, { useState } from 'react';
import { CgArrowsExchangeAltV } from "react-icons/cg";



function Binary() {
  const [decimal, setDecimal] = useState('0');
  const [binary, setBinary] = useState('0');
  const [change, setchange] = useState(false)

  // Convert Decimal to Binary
  const handleDecimalChange = (e) => {
    const decValue = e.target.value;
    setDecimal(decValue);

    // Convert decimal to binary if valid
    if (decValue === '') {
      setBinary('');
    } else if (!isNaN(decValue)) {
      const binaryValue = parseInt(decValue, 10).toString(2);
      setBinary(binaryValue);
    }
  };

  // Convert Binary to Decimal
  const handleBinaryChange = (e) => {
    const binValue = e.target.value;
    setBinary(binValue);

    // Convert binary to decimal if valid
    if (/^[01]+$/.test(binValue) || binValue === '') {
      const decimalValue = parseInt(binValue, 2);
      setDecimal(binValue === '' ? '' : decimalValue);
    }
  };
const renderComp=()=>{
    if(!change){
        return (
            <>
            <div className="converter-section">
          <label className={!change? "bold":""}>Decimal</label>
          <input
            type="text"
            value={decimal}
            onChange={handleDecimalChange}
            placeholder="Enter decimal number"
            autoFocus={true}
            className={!change? "bold_input":""}
          />
        </div>
        <div className="change">
            <CgArrowsExchangeAltV className='icon' onClick={()=>setchange(!change)}/>
        </div>
        <div className="converter-section">
          <label>Binary</label>
          <input
            type="text"
            value={binary}
            onChange={handleBinaryChange}
            placeholder="Enter binary number"
          />
        </div>
            </>
        )
    }
    return(
        <>
         <div className="converter-section">
          <label className={change? "bold":""}>Binary</label>
          <input
            type="text"
            value={binary}
            onChange={handleBinaryChange}
            placeholder="Enter binary number"
            autoFocus={true}
            className={change? "bold_input":""}
          />
        </div>
        <div className="change">
        <CgArrowsExchangeAltV className='icon' onClick={()=>setchange(!change)}/>
        </div>
            <div className="converter-section">
          <label>Decimal</label>
          <input
            type="text"
            value={decimal}
            onChange={handleDecimalChange}
            placeholder="Enter decimal number"
          />
        </div>
       
       
        </>
    )
}

const handleClear = ()=>{
    setBinary("0")
    setDecimal("0")

}
  return (
    <div className="ConverterApp">
      <div className="converter">
        {renderComp()}
        <button className='clear_button' onClick={handleClear}>clear</button>
      </div>
    </div>
  );
}

export default Binary;
