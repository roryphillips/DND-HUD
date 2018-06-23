import React from "react";
import {SocketContext} from './SocketIOShell';

export function withSocket(Component) {
    return function SocketComponent(props) {
        return (
            <SocketContext.Consumer>
                {socket => <Component {...props} socket={socket} />}
            </SocketContext.Consumer>
        )
    }
}
