import React from 'react'

const Powerbi = () => {
  return (
    <div className="w-full bg-[#121212] mt-[6rem] pt-3"> 
        <iframe
          className="mx-auto rounded w-full"
          title="TDR - Dashboard solution"
          width="1260"
          height="550.25"
          src="https://app.powerbi.com/reportEmbed?reportId=4c36bf5c-e487-4915-94a9-46b9d5171efa&autoAuth=true&ctid=36da45f1-dd2c-4d1f-af13-5abe46b99921"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
  )
}

export default Powerbi