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
  return (
    <main className="menu">
      <h2> Our Menu</h2>
      {/* <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        photoName="pizzas/salamino.jpg"
        price="10" */}
      {/* /> */}
      <div className="pizzas">
        <Pizza pizzaData={pizzaData[0]} />
        <Pizza pizzaData={pizzaData[1]} />
        <Pizza pizzaData={pizzaData[2]} />
        <Pizza pizzaData={pizzaData[3]} />
        <Pizza pizzaData={pizzaData[4]} />
        <Pizza pizzaData={pizzaData[5]} />
      </div>
    </main>
  );
}

function Pizza({ pizzaData }) {
  console.log(pizzaData);
  return (
    <div className="pizza">
      <img src={pizzaData.photoName} alt="{pizzaData.name}"></img>
      <div>
        <h3>{pizzaData.name}</h3>
        <p>{pizzaData.ingredients}</p>
        <span>Price: ${pizzaData.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  let isOpen = hour >= openHours && hour <= closeHours;
  //   if (hour >= openHours && hour <= closeHours) alert("We are Currently Open!!");
  //   else alert("Sorry, We are currently closed!!");
  console.log(isOpen);
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We are Currently Open!!{" "}
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
