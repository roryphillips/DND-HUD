import React, {Component} from 'react';
import {connect} from 'react-redux';

import io from 'socket.io-client';
import {addCharacter, syncCharacters} from "../store/actions/character";

export const SocketContext = React.createContext(null);
class SocketIOShell extends Component {
    dispatch;

    state = {
        socket: {},
    };

    constructor(props) {
        super(props);
        this.dispatch = this.props.dispatch;
    }

    componentDidMount() {
        const socket = io.connect(`http://localhost:4000`);
        this.setState({
            socket: socket,
        });
        mapSocketToDispatch(socket, this.dispatch);
    }

    componentWillUnmount() {
        if (!!this.state.socket) {
            this.state.socket.disconnect();
        }
    }

    render() {
        const {children} = this.props;
        const {socket} = this.state;

        return (
            <React.Fragment>
                {!socket && (
                    <h1>Please Wait While Socket.IO Connects</h1>
                )}
                {socket && (
                    <SocketContext.Provider value={socket}>
                        <React.Fragment>
                            {children}
                        </React.Fragment>
                    </SocketContext.Provider>
                )}
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

function mapSocketToDispatch(socket, dispatch) {
    socket.on('syncCharacters', (data) => {
        dispatch(syncCharacters(data || {}));
    });

    socket.on('characterAdded', (data) => {
        dispatch(addCharacter(data.id, data.character));
    });

    socket.on('characterUpdated', (data) => {
        console.log(data);
    });

    socket.on('characterRemoved', (data) => {
        console.log(data);
    });

    socket.on('initiativeUpdated', (data) => {
        console.log(data);
    });

    socket.on('turnUpdated', (data) => {
        console.log(data);
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(SocketIOShell);