import React from 'react'

const HighlightText = ({text}) => {
  console.log(text);
  return (
    
     
     <div className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>
     {" "}{text}
     </div>


  );
};

export default HighlightText;
