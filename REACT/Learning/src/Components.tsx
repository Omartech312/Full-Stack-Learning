import musashiPic from './assets/musashi.jpg';
import redButton from './assets/click.jpg';
import functions from './assets/updater.png';
import './Components.css';
import styles from './styles/Button.module.css';
import { useState, useRef, useEffect } from 'react';

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

// list of objects with animals and their respective max speed
const list = [
    {id:1, name: "Cheetah", speed: 65},
    {id:2, name: "Pronghorn", speed: 55},
    {id:3, name: "Springbok", speed: 55},
    {id:4, name: "Gazelle", speed: 50},
    {id:5, name: "Lion", speed: 50}]

export function DisplayList(){
    const items = list.map(element => <li key={element.id} className='listElement'>{element.name}: Speed: {element.speed}</li>)

    return(<>
        <h3>Fastest Land Animals</h3>
        <ol>
            {items}
        </ol>
    </>);
}

export function RemovePic(){
    // when the image is clicked the display is set to "none"
    const click = (e: any) => e.target.style.display = "none";

    //image with onClick Property connected to click(e) where e is the img itself
    return(<img className='removeButton' onClick={(e) => click(e)} src={redButton}></img>)
}

//React hooks allow functional components to use react features without writing class components
//  useState, useEffect, useContext, usereducer, useCallback

// userState() is a hook that allows the creation of stateful variables and a setter function to update its value
// in the virtual DOM [name, setName]

export function Hooks(){
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    }
    
    const sub = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(<div className='counter'>
        <p className='count'>{count}</p>
        <button className='sub' onClick={sub}>Decrement</button>
        <button className='reset' onClick={reset}>Reset</button>
        <button className='add' onClick={add}>Increment</button>
    </div>);
}

export function OnChange(){
    // sets the initial text to Guest and destructures useState into text and setter
    const [text, setText] = useState("Guest");

    // function to set the text to whatever is within the input box
    function handleChange(event: any){
        setText(event.target.value);
    }

    return(
    <div>
        <p>Feel free to change this to your desired username. The moment one change is detected it will automatically be reflected below</p>
        <div className='greet'>
            {/*When a change is detected it calls handleChange function which sets the text to whatever text is within this cell */}
            <input value={text} className='greetButton' onChange={handleChange} ></input>
            {/*Displays the text*/}
            <p className='welcome'>Welcome {text}</p>
        </div>
    </div>);
}

export function Updater(){
    const [score, setScore] = useState(0);

    function direct(){
        setScore(score + 1);
        setScore(score + 1);
    }
    function updaterFunc(){
        // Its good practice to use updater functions
        // for future proof
        setScore(prevScore => prevScore + 1);
        setScore(prevScore => prevScore + 1);
    }
    
    function reset(){
        setScore(0);
    }

    return(
        <div>
            <p>Both buttons call setScore to increment the score by 1 twice</p>
            <img className='update' src={functions}></img>

            <div className='comparason'>
                <p className='updaterScore'>Score: {score}</p>
                <button onClick={reset}>Reset</button>
                <button onClick={direct}>Direct State</button>
                <button onClick={updaterFunc}>Functional State</button>
            </div>
            <p>React batches state updates meaning having setScore(score + 1) is basically like doing score = 0 + 1 twice. While functional state actually adds 1 on the furest setScore() followed by a second +1.</p>
        </div>
    );
}

class Car{
    model: string;
    make: string;
    year: number;

    constructor(make: string, model: string, year: number){
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

export function UpdateObject(){
    const [car, setCar] = useState(new Car("Chevrolet", "Silverado", 2025));

    function changeMake(event: any){
        setCar(prevCar => ({...prevCar, make: event.target.value}) )
    }

    function changeModel(event: any){
        setCar(prevCar => ({...prevCar, model: event.target.value}))
    }

    function changeYear(event: any){
        const newYear = Number(event.target.value);
        setCar(prevCar => ({...prevCar, year: newYear}))
    }

    return(<div className='carSection'>
        <p>Feel free to modify to your favorite Car</p>
        <input placeholder='Make' type='text' value={car.make} onChange={changeMake}></input>
        <input placeholder='Model' type='text' value={car.model} onChange={changeModel}></input>
        <input placeholder='Year' type='number' value={car.year} onChange={changeYear}></input>

        <p className='output'>Your Favorite Car is {car.make}, {car.model} year {car.year}</p>
    </div>);
}

export function UpdateArray(){
    const [animals, setAnimals] = useState(["Lion", "Cheetah"]);

    function addAnimal(){
        const newAnimal = (document.getElementById("newAnimal") as HTMLInputElement).value;
        (document.getElementById("newAnimal") as HTMLInputElement).value = "";
        if(newAnimal){
            setAnimals(prevAnimals => [...prevAnimals, newAnimal]);
        }
    }

    function removeElement(removeIndex: Number){
        setAnimals(animals.filter((_, i) => i !== removeIndex));
    }

    return(
    <div className='animalSec'>
        <p className='animalHead'>List of Animals:</p>
        <ul>
            {animals.map((animal, index) => 
                <li key={index} onClick={() => removeElement(index)}>
                    {animal}
                </li>)}
        </ul>
        <input id="newAnimal" type='text' placeholder='Enter Animal Names'></input>
        <button onClick={addAnimal}>Submit</button>
    </div>
    );
}

class Fruit{
    id: number;
    name: string;
    calories: number;

    constructor(id: number, name: string, calories: number){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

}

export function ObjectArray(){
    const [fruits, setFruits] = useState([new Fruit(0, "Banana", 105), new Fruit(1, "Apple", 95)]);
    
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");

    const nextId = useRef(2);

    function addFruit(){
        // values are now saved in name and calories instead of pulling from DOM

        //if both the name and calories are empty then we do not add anything by simply returning
        if(name.trim() === "" || calories.trim() === ""){
            return;
        }
        
        const id = nextId.current++;

        setFruits(prevFruits => [...prevFruits, new Fruit(id, name, Number(calories))]);

        // empties the input containers for the next fruit
        setName("");
        setCalories("");
    }

    function removeObject(id: number){
    setFruits(prevFruit => prevFruit.filter(fruit => fruit.id !== id));
    }

    return(<div className='fruits'>
        <p className='fruitTitle'>List of Fruits with Calories:</p>
        <ul>
            {fruits.map(fruit => 
                <li onClick={() => removeObject(fruit.id)} key={fruit.id}>{fruit.name}: {fruit.calories} Calories</li>
            )}
        </ul>

        <label htmlFor="newFruit">Fruit Name:</label>
        <input placeholder='Enter Fruit Name' id="newFruit" type='text' value={name}
        onChange={e => setName(e.target.value)}></input>
        <br></br>

        <label htmlFor="calories">Calories ct: </label>
        <input placeholder='Enter Calorie Count' id='calories' type='number' value={calories}
        onChange={e => setCalories(e.target.value)}></input><br></br>
        <button onClick={addFruit}>Submit</button>
    </div>);
}

// useEffect(function, [dependencies])

// 1 -> useEffect(() => {}) Run after every re-render
// 2 -> useEffect(() => {}, []) Runs only on mount
// 3 -> useEffect(() => {}, [value]) Runs on mount + when value changes

// Normals uses: event Listeners, DOM manipulation, subscriptions, Fetching data from APIs and Clean up when a component unmounts

export function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // every 1 second interval 
        const interval = setInterval(() => {
            // seconds increments by 1
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);


        return () => clearInterval(interval);
    }, []);

    return <p className='clock'>Page has been opened for {seconds}s</p>;
}