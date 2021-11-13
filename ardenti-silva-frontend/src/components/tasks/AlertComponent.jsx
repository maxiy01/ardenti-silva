import {Component} from 'react';
import React from 'react';

export class Alert extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            image: props.image,
            camera_id: props.camera_id || -1,
        }
    }
    render()
    {
        return <div className="alert">
            <img src={this.state.image} width={288}></img>
            <p>{this.state.camera_id}</p>
            <button>Вызввать бригаду</button><button>Ложная тревога</button>
        </div>
    }
}