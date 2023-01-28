import React, { useState, useEffect }  from 'react';
import './joinllive.css';

import StudentLayout from '../../../components/StudentLayout/StudentLayout';

import { toast } from 'react-toastify';
import { GoDeviceCameraVideo } from 'react-icons/go';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import BeatLoader from "react-spinners/BeatLoader";
import Button from '../../../components/ButtonHome/Button';

import { joinSession } from '../../../services/liveSession';
import ErrorMessage from '../../../components/form/components/ErrorMessage/ErrorMessage';

import moment from 'moment';

const rows: any = [
    {
        label: '#',
        name: 'num'
    },
    {
        label: 'Class Name',
        name: 'name'
    },
    {
        label: 'Course Name',
        name: 'name'
    },
    {
        label: 'Comment',
        name: 'name'
    },
    {
        label: 'Solution File',
        name: 'name'
    },
    {
        label: 'Submitted Date',
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
    const [meetingCode, setMeetingCode] = useState(''); 
    const [error, setError] = useState<any>(null);


    const handleJoinMeeting = () => {
        setError(null);

        let data = {
            meeting_code: meetingCode
        }

        if(meetingCode.length < 8 || meetingCode.length > 8) {
            setError('Enter a valid meeting code');
            return;
        }

        joinSession(data).then((res: any) => {
            if(res.ok) {
                // REDIRECT TO JOIN MEETING
                console.log('GOOD TO JOIN')
                window.open(`http://localhost:3000/live-session/${meetingCode}`, '_blank');

            }else {
                setError(res.data.message)
            }
        }).catch(err => {
            console.log('ERROR: ', err);
        })
        console.log(meetingCode);
    }

    return (
        <StudentLayout title="Join Live Session">
      <div className="section">
            <div className="parent-con student-live">
                <div className="session-form">
                    <h1 className="live-form-title">ENTER MEETING ID</h1>
                    <br />
                    {error && <ErrorMessage error={error} visible={true} />}
                    <div className="input-with-icon-form-group live-form-input">
                        <i className="text-primary"><GoDeviceCameraVideo size={20}/> </i>
                        <input value={meetingCode} onChange={(e: any) => setMeetingCode(e.target.value)} type='text' placeholder="Enter meeting id" />
                    </div>
                    <Button text="Join Meeting" onClicked={() => handleJoinMeeting()}/>
                </div>
            </div>
        </div>

       
        </StudentLayout>
    );
}

export default Index;