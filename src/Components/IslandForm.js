import { useState } from "react";

export default function IslandForm({ island, incVisitors }) {
  const [num, setNum] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input
        placeholder="Type Full Name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="tel"
        placeholder="Type Phone Number"
        onChange={(event) => setNum(event.target.value)}
      />
      <button
        className="book"
        onClick={() => {
          if (
            window.confirm(
              `are you sure you want to book to ${island.name} with the name: ${name} ,phone: ${num}`
            )
          )
            incVisitors(island.id);
        }}
      >
        Book for today!
      </button>
    </div>
  );
}
