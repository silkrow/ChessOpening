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

pieces.push({image:'./image/Chess_rdt60.png', x:0, y:7});
pieces.push({image:'./image/Chess_ndt60.png', x:1, y:7});
pieces.push({image:'./image/Chess_bdt60.png', x:2, y:7});
pieces.push({image:'./image/Chess_qdt60.png', x:3, y:7});
pieces.push({image:'./image/Chess_kdt60.png', x:4, y:7});
pieces.push({image:'./image/Chess_bdt60.png', x:5, y:7});
pieces.push({image:'./image/Chess_ndt60.png', x:6, y:7});
pieces.push({image:'./image/Chess_rdt60.png', x:7, y:7});
pieces.push({image:'./image/Chess_pdt60.png', x:0, y:6});
pieces.push({image:'./image/Chess_pdt60.png', x:1, y:6});
pieces.push({image:'./image/Chess_pdt60.png', x:2, y:6});
pieces.push({image:'./image/Chess_pdt60.png', x:3, y:6});
pieces.push({image:'./image/Chess_pdt60.png', x:4, y:6});
pieces.push({image:'./image/Chess_pdt60.png', x:5, y:6});
pieces.push({image:'./image/Chess_pdt60.png', x:6, y:6});
pieces.push({image:'./image/Chess_pdt60.png', x:7, y:6});

pieces.push({image:'./image/Chess_rlt60.png', x:0, y:0});
pieces.push({image:'./image/Chess_nlt60.png', x:1, y:0});
pieces.push({image:'./image/Chess_blt60.png', x:2, y:0});
pieces.push({image:'./image/Chess_qlt60.png', x:3, y:0});
pieces.push({image:'./image/Chess_klt60.png', x:4, y:0});
pieces.push({image:'./image/Chess_blt60.png', x:5, y:0});
pieces.push({image:'./image/Chess_nlt60.png', x:6, y:0});
pieces.push({image:'./image/Chess_rlt60.png', x:7, y:0});
pieces.push({image:'./image/Chess_plt60.png', x:0, y:1});
pieces.push({image:'./image/Chess_plt60.png', x:1, y:1});
pieces.push({image:'./image/Chess_plt60.png', x:2, y:1});
pieces.push({image:'./image/Chess_plt60.png', x:3, y:1});
pieces.push({image:'./image/Chess_plt60.png', x:4, y:1});
pieces.push({image:'./image/Chess_plt60.png', x:5, y:1});
pieces.push({image:'./image/Chess_plt60.png', x:6, y:1});
pieces.push({image:'./image/Chess_plt60.png', x:7, y:1});



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