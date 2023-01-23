import React, { useState, useEffect }  from 'react';
import './course-content.css';

import Layout from '../../../components/Layout/Layout';

import { AddCourseContentModal, DeleteModal } from '../../../components';

import { AiOutlineCopy } from 'react-icons/ai';

import { toast } from 'react-toastify';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { getClasses, deleteClass } from '../../../services/classroom';
import BeatLoader from "react-spinners/BeatLoader";

import moment from 'moment';

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
    const [deleteModal, setShowDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(false);

    const toggleAddModal = () => {
        setShoowAddModal(!showAddModal);
    }

    const toggleDeleteModal = () => {
        setShowDeleteModal(!deleteModal);
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

    const handleDeleteClass = () => {
        console.log('DELETE CLASS');
        console.log(deleteId)
        deleteClass(deleteId).then((res: any) => {
            if(res.ok) {
                toggleDeleteModal();
                handleGetClasses();
                toast.success(res.data.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
          
            }else {
                toast.error(res.data.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
            }
        }).catch(err => {
            toast.error("ERROR", {
                pauseOnHover: false,
                closeOnClick: true,
            })
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
        <Layout title="Course Content">
      <div className="section">
            <div className="parent-con">
                <div className="data-table">
                    <div className="top">
                        <div className="span">
                            <select name="" id="" className="select-field">
                                <option value="all">All</option>
                                <option value="math">Math Class IUGET</option>
                            </select>
                        </div>
                        {/* <form className="search">
                            <input type="search" name="" id="" placeholder="Find ..." />
                            <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form> */}
                        <button onClick={toggleAddModal} className="btn btn-primary btn-add">Add Content  <i className="fas fa-plus"></i></button>
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
                                        <p>{moment(new Date(data.createdAt)).format('MMMM d, YYYY')}</p>
                                    </td>

                                    <td className="flex-center">
                                        <div className="action">
                                            <Tippy content="Copy Class Url"  animation="fade">
                                            <a className="see"><AiOutlineCopy onClick={() => {
                                                navigator.clipboard.writeText(`http://localhost:3000/${data._id}`);
                                                
                                                toast.success("Copied To Clipboard", {
                                                    pauseOnHover: false,
                                                    closeOnClick: true,
                                                })
                                            }} size={14}/></a>
                                            </Tippy>
                                            <Tippy content="Delete Class"  animation="fade">
                                                <a onClick={() => {
                                                    setDeleteId(data._id);
                                                    toggleDeleteModal();
                                                }} className="delete"><i className="fa fa-trash" aria-hidden="true"></i></a>
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

        {showAddModal &&  <AddCourseContentModal onClassAdded={handleClassAdded} onClose={toggleAddModal} />}
        {deleteModal && <DeleteModal onAccept={handleDeleteClass} onCancel={toggleDeleteModal} />}
        </Layout>
    );
}

export default Index;