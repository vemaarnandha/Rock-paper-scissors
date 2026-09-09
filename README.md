# Rock Paper Scissors 🪨 ✂️

A browser-based **Rock Paper Scissors** game built with **HTML, CSS, and Vanilla JavaScript**. The game is started via a button on the page, player input is collected through `prompt()`, the computer's choice is randomized, and each round's result along with the cumulative score is printed to the **browser console**.

> 📘 This project is part of **The Odin Project – Foundations** curriculum:
> [Rock Paper Scissors](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors)

---

## 📖 Description

The player competes against the computer in a game of rock–paper–scissors:

1. The player clicks the **Start** button (element with class `.mulai`).
2. The browser shows a `prompt()` asking for the player's choice.
3. The computer randomly picks `rock`, `paper`, or `scissors`.
4. The program validates the player's input.
5. The round result (win / lose / tie) and the cumulative score are printed to the console.

---

## ✨ Features

- 🎲 Randomized computer choice using `Math.random()`.
- ⌨️ Player input via `prompt()`.
- 🛡️ Input validation:
  - empty input (`""`) or canceled prompt (`null`) → round is aborted,
  - input outside the valid list → rejected,
  - case-insensitive input (`Rock`, `ROCK`, and `rock` are all valid).
- 🏆 Score tracking (`userScore`, `computerScore`) and a round counter (`round`).
- 🖱️ The game is triggered by a `click` event on a button instead of running automatically on page load.

---

## 🚀 How to Run

1. Clone this repository:
   ```bash, fish, zsh, etc ( depends on shell that you used! )
   // Https
   git clone https://github.com/vemaarnandha/Rock-paper-siccors.git
   // ssh 
   git clone git@github.com:vemaarnandha/Rock-paper-siccors.git 
   cd Rock-paper-siccors
   ```
2. Open `index.html` in a browser.
3. Open **Developer Tools → Console** (press `F12` or `Ctrl+Shift+I` / `Cmd+Option+I`).
4. Click the **Start** button on the page.
5. Enter your choice (`rock`, `paper`, or `scissors`) in the prompt.
6. Check the round result and score in the console.

---

## 🗂️ Project Structure

```
.
├── index.html   # Main page + start button (.mulai)
├── app.js       # All game logic
└── README.md    # This documentation
```

---

## 🧩 Main Functions (`app.js`)

| Function | Parameters | Return | Description |
|---|---|---|---|
| `getRandomNum()` | – | `number` (1–3) | Generates a random number from 1 to 3 for the computer's pick. |
| `getComputerChoice(num)` | `num` | `string` | Maps 1/2/3 to `'rock'` / `'paper'` / `'scissors'`. |
| `userChoice()` | – | `string \| null` | Shows a `prompt()` and returns the player's input. |
| `evaluateGame(user, computer)` | `user`, `computer` | `void` | Validates input, determines the round winner, updates scores, and logs the result to the console. |

### Global Variables

| Variable | Type | Description |
|---|---|---|
| `userScore` | `number` | Player's score. |
| `computerScore` | `number` | Computer's score. |
| `round` | `number` | Number of valid rounds played. |
| `validChoice` | `string[]` | List of valid inputs: `['rock', 'paper', 'scissors']`. |

---

## 🎮 Game Rules

| Player \ Computer | rock | paper | scissors |
|---|---|---|---|
| **rock** | Tie | Computer wins | Player wins |
| **paper** | Player wins | Tie | Computer wins |
| **scissors** | Computer wins | Player wins | Tie |

---

## 🛡️ `prompt()` Input Behavior

| Player action | Returned value | Program handling |
|---|---|---|
| Types a choice and clicks **OK** | `string` (e.g. `"rock"`) | Normalized with `toLowerCase().trim()`, then validated. |
| Clicks **OK** without typing anything | `""` (empty string) | Round aborted; score and round counter are not updated. |
| Clicks **Cancel** / presses `Esc` | `null` | Round aborted; score and round counter are not updated. |
| Types invalid input and clicks **OK** | invalid `string` | Rejected via `validChoice.includes(user)`. |

---

## 🧠 Concepts Learned

This project served as hands-on practice for the following concepts:

- **Functions & `return`** – exiting a function early (`return;`), returning values, and the differences between `return`, `break`, and `continue`.
- **Event listeners & callbacks** – `addEventListener` expects a *function reference*, not the result of a function call. Writing `listener(fn())` invokes the function at page load instead of when the event fires.
- **Event loop & synchronous execution** – top-level code (e.g. a `while` loop) runs only once when the script loads; variable changes from an event listener do not re-trigger that code.
- **`switch` statements & strict equality (`===`)** – comparing a function reference against a string is always `false`, so a `switch` must receive a *value*, not a function.
- **`try / catch / throw`** – an error caught by `catch` does not stop the function unless followed by `return`/`throw`; for simple input validation, `if (...) return` is more appropriate.
- **Array validation** – using `Array.prototype.includes()` instead of a `forEach` loop that throws when a single element does not match.
- **String normalization** – `toLowerCase()` and `trim()` to make input case-insensitive and free of stray whitespace.

### Debugging Notes (bugs encountered & their causes)

1. `addEventListener('click', userChoice())` → the prompt appeared before any click because the function was invoked immediately.
2. `while (startEval)` placed outside the event listener → never re-executed after a click.
3. `switch (userChoice)` → compared a function object instead of the prompt's string result.
4. `try { throw } catch {}` without a `return` inside `catch` → the function kept running even with invalid input.
5. Validation via `forEach(x => { if (x != user) throw ... })` → always errored, even for valid input.
6. Inconsistent spelling (`siccors` / `sciccors` / `scissors`) → string comparisons failed.

---

## ⚠️ Deviations from the Original Assignment

- The original assignment is played **entirely in the console** with no GUI. This version adds a `.mulai` button as the game trigger, but results are still printed to the console.
- The assignment does not require handling invalid input; this version adds validation and round abortion as extra practice.

---

## 📚 References

- [The Odin Project – Foundations: Rock Paper Scissors](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors)
- [MDN: `Window.prompt()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
- [MDN: `EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN: `switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [MDN: `return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- [MDN: `try...catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [MDN: `Array.prototype.includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [MDN: Concurrency model and the Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

---

## 📝 License

Learning project – free to use for educational purposes.