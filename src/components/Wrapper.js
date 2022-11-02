import React from 'react'

export default function Wrapper({children}) {

  return (
    <>
      <div
        style={{
          width: "400px",
          padding: "10px",
          margin: "5px auto",
          backgroundColor : "pink"
        }}
      >
        {children}
      </div>
    </>
  );
}
