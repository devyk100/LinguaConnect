// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { Autocomplete, TextField } from '@mui/material';


// function onc(e:React.SyntheticEvent, value: string | null): void{
//     if(e.target) console.log("it was clicked indeed", value);
    
// }

// export function ButtonUsage() {
//   return (
//     <>
//     <Button variant="contained">Hello world</Button>
//     <Autocomplete
//   disablePortal
//   id="combo-box-demo"
//   options={["something", "something more"]}
//   sx={{ width: 300 }}
//   renderInput={(params) => <TextField {...params} label="Movie" />}
//   onChange={onc}
//   />
//     </>
//   )
// }


// function settingPeerConnections(){
//     const signalingChannel = new SignalingChannel(remoteClientId);
// signalingChannel.addEventListener('message', message => {
//     // New message from remote client received
// });

// // Send an asynchronous message to the remote client
// signalingChannel.send('Hello!'
// }


function queryingDevices(){
    const constraints = {
        'video': true,
        'audio': true
    }
    navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
            console.log('Got MediaStream:', stream);
        })
        .catch(error => {
            console.error('Error accessing media devices.', error);
        });
}

function getConnectedDevices(type: string, callback: (cameras: MediaDeviceInfo[]) => void) {
    navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            const filtered = devices.filter(device => device.kind === type);
            callback(filtered);
        });
}

getConnectedDevices('videoinput', cameras => console.log('Cameras found', cameras));


export default function(){
    return (
        <>
        Something is here.
        </>
    )
}