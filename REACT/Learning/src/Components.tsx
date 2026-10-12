import musashiPic from './assets/musashi.jpg';
import './Components.css';
import styles from './styles/Button.module.css';

// using export like this allows for multiple exports instead of one as shown in the default
export function Card(){
    return(
        <div className="card">
            <img className='image' src={musashiPic} alt="Invincible Under The Sun"></img>
            <h2 className='cardTitle'>Musashi Miyamoto</h2>
            <p className='cardText'>Japanese Swordman, strategist, artist, and writer. Famous for winning 60 duels.</p>
        </div>
    );
}

// Styling approaches
// External is great for global styles and small projects
// Individual Components with unique styles
// Small componenets with min styling

export function ExtButton(){
    return(
        <button className='Button'>External Style</button>
    );
}

export function ModButton(){
    return(
        <button className={styles.Button}>Module Style</button>
    );
}

export function LineButton(){
    const inLine = {
        backgroundColor: "hsl(141, 58%, 60%)",
        color: "white",
        padding: "20px 40px",
        border: "4px double rgb(78, 78, 78)",
        cursor: "pointer",
        borderRadius: "10px"    
    }

    return(
        <button style={inLine}>inLine Style</button>
    );
}

//defining type personProp
// since Im using TypeScript this is necessary to provide the data type in person func
type personProp = {
    name: string;
    age: number;
    status: boolean;
};

// function takes a prop object

/*
export function Person(prop: personProp){
    return(
        <div className='person'>         
            <p>Name: {prop.name}</p>
            <p>Age: {prop.age}</p>
            <p>Student: {prop.status ? "Yes" : "No"}</p>
        </div>
    );
}
*/

// here im using defaultProp
export function Person({
    name = "Guest",
    age = -1,
    status = false
}: personProp){
    return(
        <div className='person'>
            
            <p>Name: {name}</p>
            <p>Age Category: {age >= 0 ? age >= 18 ? "Adult" : "Minor" : "Unknown"}</p>
            <p>Student: {status ? "Yes" : "No"}</p>
        </div>
    );
}

type user = {
    name?: string;
    loggedIn: boolean;
}

export function DisplayLog(prop: user){
    const logged = <h2 className='logged'>
                    Welcome {prop.name}
                    </h2>

    const off = <h2>Please Log In</h2>

    return(
        prop.loggedIn ? logged : off
    );
}