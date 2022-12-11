import './Tile.css'

interface Props {
    piece_img: string;
    number: Number;
}

export default function Tile({piece_img, number}: Props) {
    if (number % 2 === 0) {
        return <div className='tile dark-tile'>
            {piece_img && <div style={{backgroundImage: `url(${piece_img})`}} className='chess-piece'></div>}
        </div>
    } else {
        return <div className='tile light-tile'>
            {piece_img && <div style={{backgroundImage: `url(${piece_img})`}} className='chess-piece'></div>}
        </div>
    }
}