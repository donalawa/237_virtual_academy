import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Index() {
    const params: any  = useParams();

    const roomID: string = params.roomID;
    
    const meeting = async(element: any) => {
        const appID: any = process.env.APP_ID;
        const serverSecret: any = process.env.SERVER_SECRET;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Name admin");

        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element, 
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall, 
              },
        });
    }

    // useEffect(() => {
    //     alert('WELCOME TO MY  SPACE')
    // },[])

    return (
        <div className="myCallContainer"
            ref={meeting}
            style={{ width: '100vw', height: '100vh' }}>
          
        </div>  
    );
}

export default Index; 

