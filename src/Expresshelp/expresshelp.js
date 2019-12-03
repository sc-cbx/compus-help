import React from 'react'
import { Button, Input,BackTop } from 'antd'
import { Link } from 'react-router-dom'

var ExpresshelpCSS = require('./expresshelp.css')
// 快递帮拿
export default class Expresshelp extends React.Component {
    render() {
        return (
            <div>
                拿快递
                <div>
    <BackTop />
    Scroll down to see the bottom-right
    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
    button.
  </div>
            </div>
        );
    }
}