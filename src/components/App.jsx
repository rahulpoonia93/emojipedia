import React from "react";
import EmojiCard from "./EmojiCard";
import emojipedia from "../emojipedia";

function CreateEmoji(emojiElement) {
  return (
    <EmojiCard
      key={emojiElement.id}
      emoji={emojiElement.emoji}
      name={emojiElement.name}
      meaning={emojiElement.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(CreateEmoji)}</dl>
    </div>
  );
}

export default App;
