import './Tile.css'

interface Props {
    piece_img: string;
    number: Number;
}

export default function Tile({piece_img, number}: Props) {
    if (number % 2 === 0) {
        return <div className='tile dark-tile'>
            <img src={piece_img} />
        </div>
    } else {
        return <div className='tile light-tile'>
            <img src={piece_img} />
        </div>
    }
}