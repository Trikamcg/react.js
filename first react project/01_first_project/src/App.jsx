import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MY LOGO</div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <div className="container">
        {/* Card 1 */}
        <div className="child1">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            alt="Coding"
            className="card-img"
          />
          <div className="card-content">
            <h3>Web Development</h3>
            <p>Learn how to build modern websites using React and CSS.</p>
            <button onClick={() => setCount(count + 1)}>
              Click Me ({count})
            </button>
          </div>
        </div>
        <div className="child1">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Workspace"
            className="card-img"
          />
          <div className="card-content">
            <h3>UI/UX Design</h3>
            <p>Master the art of designing user interfaces that users love.</p>
            <button onClick={() => setCount(count + 1)}>
              Click Me ({count})
            </button>
          </div>
        </div>

        <div className="child1">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
            alt="Laptop"
            className="card-img"
          />
          <div className="card-content">
            <h3>Backend Logic</h3>
            <p>Connect databases and create powerful APIs for your apps.</p>
            <button onClick={() => setCount(count + 1)}>
              Click Me ({count})
            </button>
          </div>
        </div>
      </div>
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Featured Collection
      </h2>
      <div className="cards">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpZGVybWFufGVufDB8fDB8fHww"
            alt="Spiderman"
          />
          <p className="card-title">Spiderman</p>
        </div>

        <div className="card">
          <img
            src="https://th.bing.com/th/id/OIP.GNu7a_QZFsrGFNTdyekuPgHaFj?w=186&h=140&c=7&r=0&o=7&cb=ucfimg2&dpr=1.4&pid=1.7&rm=3&ucfimg=1"
            alt="Villain"
          />
          <p className="card-title">wonder woman</p>
        </div>

        <div className="card scoreboard">5 - 0</div>
        <div className="card">
          <img
            src="https://img.republicworld.com/all_images/a-still-from-avengers-doomsday-leaked-teaser-1766122393024-16_9.webp"
            alt="Doomsday"
          />
          <p className="card-title">captain america</p>
        </div>

        <div className="card">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.z6QjOd-AGO1RCj5tSAvb3QHaNH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Suit"
          />
          <p className="card-title">Iron Man</p>
        </div>
      </div>

      <div className="calculator">
        <div className="txt">7744</div>

        <button className="lightgreynumbtn">C</button>
        <button className="lightgreynumbtn">+/-</button>
        <button className="lightgreynumbtn">%</button>
        <button className="yellownumbtn">÷</button>

        <button className="greynumbtn">7</button>
        <button className="greynumbtn">8</button>
        <button className="greynumbtn">9</button>
        <button className="yellownumbtn">X</button>

        <button className="greynumbtn">4</button>
        <button className="greynumbtn">5</button>
        <button className="greynumbtn">6</button>
        <button className="yellownumbtn">-</button>

        <button className="greynumbtn">1</button>
        <button className="greynumbtn">2</button>
        <button className="greynumbtn">3</button>
        <button className="yellownumbtn">+</button>

        <button className="bigbtn">0</button>
        <button className="greynumbtn">.</button>
        <button className="yellownumbtn">=</button>
      </div>

      <section class="image-grid">
        <img
          src="https://img.youtube.com/vi/UiMg566PREA/maxresdefault.jpg"
          alt=""
          class="img1"
        />
        <img
          src="https://images.unsplash.com/photo-1766488735864-44c313801587?w=600&auto=format&fit=crop&q=60"
          alt=""
          class="img2"
        />
        <img
          src="https://images.unsplash.com/photo-1765790859163-53e82c11775a?w=600&auto=format&fit=crop&q=60"
          alt=""
          class="img3"
        />
        <img
          src="https://images.unsplash.com/photo-1765211003001-b9eb5cbfe1f3?w=600&auto=format&fit=crop&q=60"
          alt=""
          class="img4"
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1765352863139-5252070c327d?w=600&auto=format&fit=crop&q=60"
          alt=""
          class="img5"
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1766340004237-2f136e502218?w=600&auto=format&fit=crop&q=60"
          alt=""
          class="img6"
        />
        <img
          src="https://images.unsplash.com/photo-1766355583257-680e48b7189c?w=600&auto=format&fit=crop&q=60"
          alt=""
          class="img7"
        />
      </section>
    </>
  );
}

export default App;
