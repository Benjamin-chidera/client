import React from 'react'
import { Link } from 'react-router-dom';
import dot from "../../assets/Image/dot_icon.svg"
import { inspections} from '../../data/Inspection';
import { CiMenuKebab } from "react-icons/ci";

export const Inspection = () => {
  return (
    <main style={{maxWidth: '1600px', margin: "auto"}}>
      <div className="topsec">
        {/* <ToastContainer /> */}
        <div className="flex gap-4 flex-col lg:flex-row items-start  justify-between lg:items-center pe-2 inpectionHome my-4">
          <h4>Inspection History</h4>
          <div className="flex items-center gap-1">
            {/* <GoHome /> */}
            <Link to="/admin">Home</Link> / <Link>Inspection History</Link>
          </div>
        </div>
        <h2 className='font-bold text-xl mb-2'>Scheduled Inspections</h2>
      </div>
      <hr />
      <div>
        <p className="dots flex items-center gap-5 my-3 fw-bold">
        <CiMenuKebab className='text-3xl'/>
          History
        </p>
      </div>

      <div className=" mt-4 overflow-x-scroll scroll-hidden">
        <table className="table mx-auto w-[1240px]">
          <thead className='bg-[#f78214a1] my-3 h-12 rounded-xl'>
            <tr className="table-success text-left">
              <th className='ps-3'>#</th>
              <th>Customer</th>
              <th>Emails</th>
              <th>Location</th>
              <th>Date/Time</th>
            </tr>
          </thead>
          <tbody className='w-full'>
            {/* {
                !isLoading && inspections.length > 1 && <h1 className="text-center fw-bold mt-3 fs-6 text-danger">No Inspection Booked yet</h1>
              } */}
            {
              inspections.map((i, index) => {
                return (
                  <tr key={index} className=' h-20'>
                    <th scope="row" className='text-left ps-2'> {index + 1} </th>
                    <td className="data1">
                      {" "}
                      <p className="font-bold">
                        {" "}
                        {i.name}
                      </p>{" "}
                      <p className="fw-light ">{i.phoneNumber} </p>{" "}
                    </td>
                    <td className="font-bold"> {i.email} </td>
                    <td className="font-bold"> {i.location} </td>
                    <td>
                      {" "}
                      <p className="font-bold">
                        {i.date}
                      </p>
                      <p className="font-normal ">{i.time}</p>{" "}
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </main>
  );
}
