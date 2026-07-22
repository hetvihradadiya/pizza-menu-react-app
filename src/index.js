import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
  //   const style = {
  //     color: "blue",
  //     fontSize: "48px",
  //     textTransform: "uppercase",
  //   };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  return (
    <main className="menu">
      <h2> Our Menu</h2>

      {/* <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        photoName="pizzas/salamino.jpg"
        price="10" */}
      {/* /> */}
      {/* <div className="pizzas">
        <Pizza pizzas={pizzas[0]} />
        <Pizza pizzas={pizzas[1]} />
        <Pizza pizzas={pizzas[2]} />
        <Pizza pizzas={pizzas[3]} />
        <Pizza pizzas={pizzas[4]} />
        <Pizza pizzas={pizzas[5]} />
        </div> */}
      {pizzas.length > 0 && (
        <>
          <p>
            authentic taste, you will love this, love food live for eating and
            eat for living
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzas={pizza} key={pizza.name}></Pizza>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

function Pizza({ pizzas }) {
  console.log(pizzas);
  return (
    <li className={`pizza  ${pizzas.soldOut ? "sold-out" : ""}`}>
      <img src={pizzas.photoName} alt="{pizzas.name}"></img>
      <div>
        <h3>{pizzas.name}</h3>
        <p>{pizzas.ingredients}</p>
        <span>{pizzas.soldOut ? "SOLD OUT " : pizzas.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 2;
  const closeHours = 22;
  let isOpen = hour >= openHours && hour <= closeHours;
  //   if (hour >= openHours && hour <= closeHours) alert("We are Currently Open!!");
  //   else alert("Sorry, We are currently closed!!");
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We are Open until {closeHours}:00. Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
  //   return React.createElement("footer", null, "We are Currently Open!!");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// ReactDOM.render(<App />)
