// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { Autocomplete, TextField } from '@mui/material';
import * as React from "react";
import Video from "../components/Video";
// function onc(e:React.SyntheticEvent, value: string | null): void{
//     if(e.target) console.log("it was clicked indeed", value);

// }


function settingPeerConnections(){
    const signalingChannel = new SignalingChannel(remoteClientId);
signalingChannel.addEventListener('message', message => {
    // New message from remote client received
});

// Send an asynchronous message to the remote client
signalingChannel.send('Hello!'
}

function queryingDevices() {
  const constraints = {
    video: true,
    audio: true,
  };
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      console.log("Got MediaStream:", stream);
    })
    .catch((error) => {
      console.error("Error accessing media devices.", error);
    });
}

function getConnectedDevices(
  type: string,
  callback: (cameras: MediaDeviceInfo[]) => void
) {
  navigator.mediaDevices.enumerateDevices().then((devices) => {
    const filtered = devices.filter((device) => device.kind === type);
    callback(filtered);
  });
}

getConnectedDevices("videoinput", (cameras) =>
  console.log("Cameras found", cameras)
);

const overlay = {
  position: "absolute",
  top: "20px",
  left: "20px",
  color: "black",
  backgroundColor: "white",
  zIndex: 10,
};
export default function () {
  return (
    <>
    <div className="flex flex-col lg:flex-row w-lvw justify-around items-center">

        <Video user="Yash Ramesh Kumar"/>
        <Video user="Yash Ramesh Kumar"/>
    </div>
    </>
  );
}
