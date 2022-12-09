import './Tile.css'

interface Props {
    number: Number
}

export default function Tile({number}: Props) {
    if (number % 2 === 0) {
        return <div className='dark-tile'></div>
    } else {
        return <div className='light-tile'></div>
    }
}