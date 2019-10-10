import React from 'react';
import {Link} from 'react-router-dom';
import {ReactFlvPlayer} from 'react-flv-player'
import './StreamPlayer.scss';
import Chat from "../Chat"
 class StreamPlayer extends React.Component {


render() {
  return (
      <div className="singleContainer">
        <div className={"playerChatContainer"}>
            <div className={"player"}>
          <ReactFlvPlayer
              className={"player"}
              url = "http://studstream.ddns.net:8000/live/STREAM_NAME.flv"
              enableStashBuffer={true}
              stashInitialSize={"500"}
          />
        </div>
          <div className={"chatContainerContainer"}>
<Chat/>
          </div>
        </div>
          <Link to={"/"}><button className={"backButton"}>Back to landing page</button></Link>
      </div>
  );
}
}
export default StreamPlayer;