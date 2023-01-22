import React from 'react';
import Layout from '../../../components/Layout/Layout';


const rows: any = [
    {
        label: '#',
        name: 'num'
    },
    {
        label: 'Subject',
        name: 'name'
    },
    {
        label: 'Status',
        name: 'action'
    },
    {
        label: 'User',
        name: 'name'
    },
    {
        label: 'Recipients',
        name: 'name'
    },
    {
        label: 'Date',
        name: 'name'
    },
    {
        label: 'Action',
        name: 'action'
    }
]



function Index() {
    return (
        <Layout title="Course Content">
                    <div className="section">
                        <div className="parent-con">
                            <div className="data-table">
                                <div className="top">
                                    <div className="span">
                                        <h1>You have : 10 Course Content</h1>
                                    </div>
                                    {/* <form className="search">
                                        <input type="search" name="" id="" placeholder="Find ..." />
                                        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                                    </form> */}
                                    <button onClick={() => null} className="btn btn-primary btn-add">Add Classroom  <i className="fas fa-plus"></i></button>
                                </div>
                                <div className="table-con">
                                    <table>
                                        <thead>
                                            <tr>
                                                {rows.map((row: any, index: any) => <th key={index} className={row.name}>{row.label}</th>)}
                                                
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="flex-center">32</td>
                                                <td className="flex-start">
                                                    <p>TalkWithLead Proposal Response</p>
                                                </td>
                                                <td className="flex-center">
                                                    <div className="sent pill">Sent</div>
                                                </td>
                                                <td className="flex-start">Fon Noel Nfebe</td>
                                                <td className="flex-start">["randy@talkwithlead.com"]</td>
                                                <td className="flex-start">2 years ago</td>
                                                <td className="flex-center">
                                                    <div className="action">
                                                        <a href="" className="see"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                        <a href="" className="delete"><i className="fa fa-trash" aria-hidden="true"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="flex-center">32</td>
                                                <td className="flex-start">
                                                    <p>TalkWithLead Proposal Response</p>
                                                </td>
                                                <td className="flex-center">
                                                    <div className="not-sent pill">Not Sent</div>
                                                </td>
                                                <td className="flex-start">Fon Noel Nfebe</td>
                                                <td className="flex-start">["randy@talkwithlead.com"]</td>
                                                <td className="flex-start">2 years ago</td>
                                                <td className="flex-center">
                                                    <div className="action">
                                                        <a href="" className="see"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                        <a href="" className="delete"><i className="fa fa-trash" aria-hidden="true"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="flex-center">32</td>
                                                <td className="flex-start">
                                                    <p>TalkWithLead Proposal Response</p>
                                                </td>
                                                <td className="flex-center">
                                                    <div className="sent pill">Sent</div>
                                                </td>
                                                <td className="flex-start">Fon Noel Nfebe</td>
                                                <td className="flex-start">["randy@talkwithlead.com"]</td>
                                                <td className="flex-start">2 years ago</td>
                                                <td className="flex-center">
                                                    <div className="action">
                                                        <a href="" className="see"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                        <a href="" className="delete"><i className="fa fa-trash" aria-hidden="true"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="flex-center">32</td>
                                                <td className="flex-start">
                                                    <p>TalkWithLead Proposal Response</p>
                                                </td>
                                                <td className="flex-center">
                                                    <div className="not-sent pill">Not Sent</div>
                                                </td>
                                                <td className="flex-start">Fon Noel Nfebe</td>
                                                <td className="flex-start">["randy@talkwithlead.com"]</td>
                                                <td className="flex-start">2 years ago</td>
                                                <td className="flex-center">
                                                    <div className="action">
                                                        <a href="" className="see"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                        <a href="" className="delete"><i className="fa fa-trash" aria-hidden="true"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="flex-center">32</td>
                                                <td className="flex-start">
                                                    <p>TalkWithLead Proposal Response</p>
                                                </td>
                                                <td className="flex-center">
                                                    <div className="sent pill">Sent</div>
                                                </td>
                                                <td className="flex-start">Fon Noel Nfebe</td>
                                                <td className="flex-start">["randy@talkwithlead.com"]</td>
                                                <td className="flex-start">2 years ago</td>
                                                <td className="flex-center">
                                                    <div className="action">
                                                        <a href="" className="see"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                        <a href="" className="delete"><i className="fa fa-trash" aria-hidden="true"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="flex-center">32</td>
                                                <td className="flex-start">
                                                    <p>TalkWithLead Proposal Response</p>
                                                </td>
                                                <td className="flex-center">
                                                    <div className="not-sent pill">Not Sent</div>
                                                </td>
                                                <td className="flex-start">Fon Noel Nfebe</td>
                                                <td className="flex-start">["randy@talkwithlead.com"]</td>
                                                <td className="flex-start">2 years ago</td>
                                                <td className="flex-center">
                                                    <div className="action">
                                                        <a href="" className="see"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                        <a href="" className="delete"><i className="fa fa-trash" aria-hidden="true"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>
                    </div>

                   
        </Layout>
    );
}

export default Index;