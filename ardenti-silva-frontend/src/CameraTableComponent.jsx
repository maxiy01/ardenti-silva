import {Component} from 'react';
import React from 'react';

export class CameraTable extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            cells_width: props.cells_width || 3,
            video_width: props.video_width || props.width || 320,
            video_height: props.video_height || props.height || 240,
            camera_num: props.cameras ? props.cameras.length : 0,
            cameras: props.cameras || []
        }
    }
    addCamera(url)
    {
        let cameras = [...(this.state.cameras)];
        cameras.push(url);
        this.setState({
            camera_num: this.state.camera_num + 1,
            cameras: cameras
        })
    }
    render()
    {
        let rows = [];
        for(let i = 0; i < this.state.camera_num; ++i)
        {
            let y = Math.floor(i / this.state.cells_width);
            //let x = i - y*this.state.cells_width;
            if(rows[y] === undefined || rows[y] === null)
                rows[y] = [];
            let url = this.state.cameras[i];
            rows[y].push(<td><img src={url} style={{width: this.state.video_width, height: this.state.video_height}}/></td>);
        }
        for(let i = 0; i < rows.length; ++i)
        {
            rows[i] = <tr>{rows[i]}</tr>
        }
        return <div>
            <table>
                {rows}
            </table>  
        </div>
    }
}