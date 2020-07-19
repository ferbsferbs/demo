

import React, { useState, useEffect } from 'react';


function JitsiMeetComponent() {
  const [loading, setLoading] = useState(true);
  const containerStyle = {
    width: '800px',
    height: '800px',
  };

  const jitsiContainerStyle = {
    display: (loading ? 'none' : 'block'),
    width: '100%',
    height: '100%',
  }

 function startConference() {
  try {
   const domain = 'meet.jit.si';
   const options = {
    roomName: 'aula-1-testeo',
    height: 400,
    parentNode: document.getElementById('jitsi-container'),
    interfaceConfigOverwrite: {
     filmStripOnly: false,
     SHOW_JITSI_WATERMARK: false,
    },
    configOverwrite: {
     disableSimulcast: false,
    },
    userInfo:{
        displayName:'NombreUsuario'
    }
   };

   const api = new JitsiMeetExternalAPI(domain, options);
   api.addEventListener('videoConferenceJoined', () => {
    console.log('Local User Joined');
    
   });
   api.executeCommand('displayName', '${USER_DISP_NAME}');

   setLoading(false);
  } catch (error) {
   console.error('Failed to load Jitsi API', error);
  }
 }

 useEffect(() => {
  // verify the JitsiMeetExternalAPI constructor is added to the global..
  if (window.JitsiMeetExternalAPI) startConference();
  else alert('Jitsi Meet API script not loaded');
 }, []);

 return (
  <div
   style={containerStyle}
   className="m-5"
  >
   {loading}
   <div
    id="jitsi-container"
    className="ml-5"
    style={jitsiContainerStyle}
   />
  </div>
 );
}

export default JitsiMeetComponent;