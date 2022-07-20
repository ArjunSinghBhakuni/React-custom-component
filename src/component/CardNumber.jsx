import React from "react";
import { forwardRef } from "react";

const CardNumber = forwardRef(({changeHandler},ref) =>{


 
 
 
  return (
    <div>
      <input
        style={{ width: "50px", height: "30px", textAlign: "center" }}
        type="text"
        maxLength={4}
        onChange = {changeHandler}

      />
    </div>
  );

});

export default CardNumber;
