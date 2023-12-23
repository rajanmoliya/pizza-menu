import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';


const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}


function Header() {
    return (
        <header className='header'>
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    return (
        <main className='menu'>
            <h2>Our Menu</h2>

            <p>
                Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all oraganic, all delicious.
            </p>

            <ul className='pizzas'>
                {pizzaData.map(pizza =>
                    <Pizza pizzaObj={pizza} key={pizza.name} />
                )}
            </ul>



            {/* <Pizza
                name="Pizza Spinaci"
                ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
                photoName="pizzas/prosciutto.jpg"
                price={10}
            />
            <Pizza
                name="Pizza Funghi"
                ingredients="Tomato, mozarella, mushrooms, and onion"
                photoName="pizzas/funghi.jpg"
                price={13}
            /> */}

        </main>
    );
}

function Pizza({ pizzaObj }) {
    return (
        <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`} >
            <img src={pizzaObj.photoName} alt='pizaaa'></img>
            <li>
                <h3> {pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients} </p>
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </li>
        </div >
    );
}


function Footer() {
    return <footer className='footer'>
        <div className='order'>
            <p>
                {new Date().toLocaleTimeString()}. We're currently open!
            </p>
            <button className='btn'>order</button>
        </div>
    </footer>
}




const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<React.StrictMode> <App /> </React.StrictMode>);