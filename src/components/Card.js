import React from 'react'

export default function Card() {
  return (
   <>
   <div className="card m-4" style={{ "width": "18rem", "background": "black", "maxHeight": "360px" }}>
          <img src={require('./download.jpg')} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is text</p>
            <div className='container w-100'>
                <select className='m-2  bg-success rounded'>
                  {Array.from(Array(6),(e,i)=>{
                    return(
                      <option key={i+1} value={i+1}>{i+1}</option>
                    )
                  })}
                </select>
                <select className='m-2  bg-success rounded'>
                      <option value="Half">Half</option>
                      <option value="Full">Full</option>
                </select>
                <div className='d-inline fs-5'>Total Price</div>
            </div>
          </div>
        </div>
   </>
  )
}
