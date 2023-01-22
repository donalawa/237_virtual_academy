import React, { useState, useEffect } from 'react';
import Layout from '../../../components/Layout/Layout';
import './classrooms.css';
import { AddClassModal } from '../../../components';

import { AiOutlineCopy } from 'react-icons/ai';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { getClasses } from '../../../services/classroom';
import BeatLoader from "react-spinners/BeatLoader";

const rows: any = [
    {
        label: '#',
        name: 'num'
    },
    {
        label: 'Name',
        name: 'name'
    },
    {
        label: 'Class Url',
        name: 'name'
    },
    {
        label: 'Created Date',
        name: 'name'
    },
    {
        label: 'Action',
        name: 'action'
    }
]


const override = {
    marginTop: '20px'
  };


function Index() {
    const [ showAddModal, setShoowAddModal ] = useState(false);
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(false);

    const toggleAddModal = () => {
        setShoowAddModal(!showAddModal);
    }

    const handleGetClasses = ()  => {
        setLoading(true);

        getClasses().then((res: any) => {
            console.log('RESPONSE GET: ', res);
            if(res.ok) {
                setClasses(res.data.data);
            }
            setLoading(false);
        }).catch(err => {
            console.log('error: ', err);
            setLoading(false);
        })
    }

    const handleClassAdded = ()  => {
        handleGetClasses();
        toggleAddModal();
    }

    useEffect(() => {
        handleGetClasses();
    },[]);

    return (
        <Layout title="Class Rooms">
              <div className="section">
                        <div className="parent-con">
                            <div className="data-table">
                                <div className="top">
                                    <div className="span">
                                        <h1>You have : {classes.length} Classroom</h1>
                                    </div>
                                    {/* <form className="search">
                                        <input type="search" name="" id="" placeholder="Find ..." />
                                        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                                    </form> */}
                                    <button onClick={toggleAddModal} className="btn btn-primary btn-add">Add Classroom  <i className="fas fa-plus"></i></button>
                                </div>
                                <div className="table-con">
                                <div style={{textAlign: 'center',}}>
                                    <BeatLoader
                                            color="#623d91" 
                                            loading={loading}
                                            cssOverride={override}
                                    />
                                </div>
                                    <table>
                                        <thead>
                                            <tr>
                                                {rows.map((row: any, index: any) => <th key={index} className={row.name}>{row.label}</th>)}
                                                
                                            </tr>
                                        </thead>
                                 
                                        <tbody>
                                          {classes.map((data: any, index: any) => <tr>
                                                <td className="flex-center">{index + 1}</td>
                                                <td className="flex-start">
                                                    <p>{data.name}</p>
                                                </td>
                                       
                                
                                                <td className="flex-start">{'http://localhost:3000/'}{data._id}</td>
                                                
                                                <td className="flex-start">
                                                    <p>{data.createdAt}</p>
                                                </td>

                                                <td className="flex-center">
                                                    <div className="action">
                                                        <Tippy content="Copy Class Url"  animation="fade">
                                                        <a className="see"><AiOutlineCopy size={14}/></a>
                                                        </Tippy>
                                                        <Tippy content="Delete Class"  animation="fade">
                                                        <a className="delete"><i className="fa fa-trash" aria-hidden="true"></i></a>
                                                        </Tippy>
                                                    </div>
                                                </td>
                                            </tr> )}
                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>
                    </div>

                    {showAddModal &&  <AddClassModal onClassAdded={handleClassAdded} onClose={toggleAddModal} />}
        </Layout>
    );
}

export default Index;