import React from "react";
import "./Adventure.css";
import { useSelector } from "react-redux";

// This will be the adventure start page. The route after creating a character
// Will give info and starting details based around the background picked
// "The year is 2022 and you have just won the biggest case of your career... etc (lawyer background)"

// After user reads all the background dialogue a prompt for continuing onto (start button/arrow button/etc)
// // This will route the user to the very first storyline/option interaction page

// Story(The story will depend on the background picked) ->
// // Storyline (All characters, regardless of story, will start on storyline #1 for the story) ->
// // // Present Options to navigate(render) the new storyline dialogue and associated options

function Adventure() {
  // Need access to the current character that was created
  // Add all this to redux store from the background page
  // Additionally the userHomepage will need access and conditionally render after redux user has characters

  // This needs to be updated in the backend
  // User needs validation so they can only create 3 characters max

  const activeChar = useSelector((state) => state.user.active_character);
  console.log(activeChar);

  return (
    <div className="adv-start-page">
      <h1>Hello World</h1>
      <p>This is the adventure start page</p>
      <p>Character Name: {activeChar.character_name}</p>
      <p>Character's Background: {activeChar.background}</p>
    </div>
  );
}

export default Adventure;
