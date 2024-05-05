import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import './ViewOrders.css';


const UserAdmins = () => {
    const componentPDF = useRef();
    const [users, setUsers] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    // const componentPDF = useRef();
    const [doctors, setDoctors] = useState([]);
    // const [searchKey, setSearchKey] = useState('');



    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('http://localhost:3500/doctor/listdr');
                setDoctors(response.data);
                console.log(response.body);
            } catch (err) {
                console.error(err);
            }
        };
        fetchDoctors();
    }, []);


    // Read users
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3500/user/all');
                setUsers(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchUsers();
    }, []);


    // Generate PDF
    const handlePrint = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle: "User Details Report",
        onAfterPrint: () => alert("Data saved in PDF")
    });

    // Search users
    const handleSearch = () => {
        const filteredData = users.filter(user =>
            user.name.toLowerCase().includes(searchKey.toLowerCase())
        );
        setUsers(filteredData);
    };

    return (
        <div className="showordersfn">
            <div className="viewnavfn">
                <div className='searchbtnfn'>
                    <input type="text" onChange={(e) => setSearchKey(e.target.value)} placeholder='Search by Name...' className='infn' />
                    <button id='search-btnfn' onClick={handleSearch}>Search</button>
                </div>
                <div className="searchbtnfn">
                    <button onClick={handlePrint}>Download Report</button>
                </div>
            </div>

            <div className="viewtablefn">
                <div ref={componentPDF} className="table-container">
                    <table className="paymenttable">
                        <thead>
                            <tr className='headerrowfn'>
                                <th className="headerfn">Name</th>
                                <th className="headerfn">Email</th>
                                <th className="headerfn">Contact</th>
                                <th className="headerfn">Gender</th>
                                <th className="headerfn">DOB</th>
                                <th className="headerfn">Address</th>
                                <th className="headerfn">Username</th>
                                <th className="headerfn">Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => (
                                    <tr className="tablerowfn" key={user._id}>
                                        <td className="cellfn">{user.name}</td>
                                        <td className="cellfn">{user.email}</td>
                                        <td className="cellfn">{user.contact}</td>
                                        <td className="cellfn">{user.gender}</td>
                                        <td className="cellfn">{user.dob}</td>
                                        <td className="cellfn">{user.address}</td>
                                        <td className="cellfn">{user.username}</td>
                                        <td className="cellfn">{user.password}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="viewtablefn">
                <div ref={componentPDF} className="table-container">
                    <table className="paymenttable">
                        <thead>
                            <tr className='headerrowfn'>
                                <th className="headerfn">Name</th>
                                <th className="headerfn">Email</th>
                                <th className="headerfn">Specialization</th>
                                <th className="headerfn">Hospital</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctors.map(doctor => (
                                    <tr className="tablerowfn" key={doctor._id}>
                                        <td className="cellfn">{doctor.name}</td>
                                        <td className="cellfn">{doctor.Email}</td>
                                        <td className="cellfn">{doctor.specialization}</td>
                                        <td className="cellfn">{doctor.hospital}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};




// const DoctorAdmins = () => {
//     const componentPDF = useRef();
//     const [doctors, setDoctors] = useState([]);
//     const [searchKey, setSearchKey] = useState('');

//     // Read doctors
//     useEffect(() => {
//         const fetchDoctors = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3500/doctor/listdr');
//                 setDoctors(response.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };
//         fetchDoctors();
//     }, []);

//     // Search doctors
//     const handleSearch = () => {
//         const filteredData = doctors.filter(doctor =>
//             doctor.name.toLowerCase().includes(searchKey.toLowerCase())
//         );
//         setDoctors(filteredData);
//     };

//     // Generate PDF
//     const handlePrint = useReactToPrint({
//         content: () => componentPDF.current,
//         documentTitle: "Doctor Details Report",
//         onAfterPrint: () => alert("Data saved in PDF")
//     });

//     return (
//         <div className="showordersfn">
//             <div className="viewnavfn">
//                 <div className='searchbtnfn'>
//                     <input type="text" onChange={(e) => setSearchKey(e.target.value)} placeholder='Search by Name...' className='infn' />
//                     <button id='search-btnfn' onClick={handleSearch}>Search</button>
//                 </div>
//                 <div className="searchbtnfn">
//                     <button onClick={handlePrint}>Download Report</button>
//                 </div>
//             </div>

//             <div className="viewtablefn">
//                 <div ref={componentPDF} className="table-container">
//                     <table className="paymenttable">
//                         <thead>
//                             <tr className='headerrowfn'>
//                                 <th className="headerfn">Name</th>
//                                 <th className="headerfn">Email</th>
//                                 <th className="headerfn">Specialization</th>
//                                 <th className="headerfn">Hospital</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 doctors.map(doctor => (
//                                     <tr className="tablerowfn" key={doctor._id}>
//                                         <td className="cellfn">{doctor.name}</td>
//                                         <td className="cellfn">{doctor.email}</td>
//                                         <td className="cellfn">{doctor.specialization}</td>
//                                         <td className="cellfn">{doctor.hospital}</td>
//                                     </tr>
//                                 ))
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

export default UserAdmins

