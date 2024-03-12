import { useState } from "react";

// let renderCount = 0;
export const YouTubeForm = () => {
  const [username, setUsername] = useState("");

  // renderCount++;
  return (
    <div>
      <h1>YouTube Form</h1>
      {/* <h1>count {renderCount}</h1> */}
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" name="channel" />

        <button>Submit</button>
      </form>
    </div>
  );
};
