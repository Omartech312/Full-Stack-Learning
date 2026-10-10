import musashiPic from './assets/musashi.jpg'
import './Card.css'

function Card(){
    return(
        <div className="card">
            <img className='image' src={musashiPic} alt="Invincible Under The Sun"></img>
            <h2 className='cardTitle'>Musashi Miyamoto</h2>
            <p className='cardText'>Japanese Swordman, strategist, artist, and writer. Famous for winning 60 duels.</p>
        </div>
    )
}

export default Card