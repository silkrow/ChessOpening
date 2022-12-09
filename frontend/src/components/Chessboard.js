import React from 'react';

import './Chessboard.css'

const horizontalAxis = ["a","b","c","d","e","f","g","h"]
const verticalAxis = ["1","2","3","4","5","6","7","8"]

export default function Chessboard() {
    let board = [];
    for (let j = verticalAxis.length - 1; j >= 0; j--){
        for(let i = 0; i < horizontalAxis.length; i++){
            if ((i + j) % 2 !== 0){
                board.push(
                    <div className="tile light-tile">
                    </div>)
            } else {
                board.push(
                    <div className="tile dark-tile">
                    </div>)
            }
        }
    }
    return <div id="chessboard">{board}</div>
}