import React from 'react';

import Tile from './Tile'
import './Chessboard.css'

const horizontalAxis = ["a","b","c","d","e","f","g","h"]
const verticalAxis = ["1","2","3","4","5","6","7","8"]

interface Piece {
    image: String;
    x: Number;
    y: Number;
}

const pieces: Piece[] = [];

pieces.push({image:'./image/Chess_bdt60.png', x:2, y:7});

export default function Chessboard() {
    let board = [];
    for (let j = verticalAxis.length - 1; j >= 0; j--){
        for(let i = 0; i < horizontalAxis.length; i++){
            const index = i + j;

            let piece_img = undefined;

            pieces.forEach(p => {
                if (j === p.y && i === p.x) {
                    piece_img = p.image;
                }
            })

            board.push(<Tile piece_img={piece_img} number={index}/>);
        }
    }
    return <div id="chessboard">{board}</div>
}