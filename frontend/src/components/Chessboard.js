import React from 'react';
import {useRef} from 'react';

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

// Initializing the board.
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
    const chessboardRef = useRef();

    let activePiece = null;

    function grabPiece(e: React.MouseEvent) {
        const element = e.target;
        if (element.classList.contains('chess-piece')){
            const x = e.clientX - 76/2;
            const y = e.clientY - 76/2;
    
            element.style.position = 'absolute';
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
    
            activePiece = element;
        }
    }
    
    function movePiece(e: React.MouseEvent){
        if (activePiece && chessboardRef){
            const minX = chessboardRef.current.offsetLeft - 76/2 + 10;
            const minY = chessboardRef.current.offsetTop - 76/2 + 10;
            const maxX = chessboardRef.current.offsetLeft + chessboardRef.current.clientWidth - 76/2;
            const maxY = chessboardRef.current.offsetTop + chessboardRef.current.clientHeight - 76/2;


            const x = e.clientX - 76/2;
            const y = e.clientY - 76/2;
    
            activePiece.style.position = 'absolute';

            if (x < minX) {
                activePiece.style.left = `${minX}px`;
            } else if (x > maxX){
                activePiece.style.left = `${maxX}px`;
            } else {
                activePiece.style.left = `${x}px`;
            }


            if (y < minY) {
                activePiece.style.top = `${minY}px`;
            } else if (y > maxY){
                activePiece.style.top = `${maxY}px`;
            } else {
                activePiece.style.top = `${y}px`;
            }
        }
    }
    
    function dropPiece(e: React.MouseEvent) {
        if (activePiece){
            activePiece = null;
        }
    }

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

            board.push(<Tile key={`${i},${j}`} piece_img={piece_img} number={index}/>);
        }
    }
    return <div 
            onMouseUp={e => dropPiece(e)}  
            onMouseMove={e => movePiece(e)} 
            onMouseDown={e => grabPiece(e)} 
            id="chessboard"
            ref={chessboardRef}
            >
        {board}
    </div>
}