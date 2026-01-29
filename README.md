# 🎮 Tic-Tac-Toe Game

A modern, responsive Tic-Tac-Toe game built with vanilla JavaScript, HTML, and CSS. Features a beautiful gradient UI, smooth animations, and persistent score tracking.

![Tic-Tac-Toe Preview](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Modern UI/UX
- **Gradient Background** - Beautiful purple to pink gradient
- **Glass-morphism Design** - Frosted glass effects on game board
- **Smooth Animations** - Cell pop, fade-in, and bounce effects
- **Hover Effects** - Interactive feedback on all clickable elements
- **Calendar-Style Scorecard** - Professional event-card design

### 📱 Responsive Design
- **Mobile-First Approach** - Works perfectly on phones (300px+)
- **Tablet Optimized** - Adapts beautifully to tablets
- **Desktop Enhanced** - Full experience on large screens
- **Adaptive Typography** - Uses CSS `clamp()` for fluid sizing

### 🎯 Game Features
- **Two-Player Gameplay** - Classic X and O game
- **Win Detection** - Automatic detection of winning combinations
- **Draw Detection** - Recognizes tied games
- **Turn Indicator** - Shows current player with animations
- **Score Tracking** - Persistent scores using localStorage
- **Winning Animation** - Golden highlight effect for winning cells

### 📊 Sidebar Stats Panel
- **Slide-In Scorecard** - Hidden by default, slides in from right
- **Score Cards** - Individual cards for Player O, Player X, and Draws
- **Restart Button** - Quick access to game reset
- **Reset Scores** - Clear all statistics
- **Keyboard Shortcuts** - Quick access via keyboard

## 🚀 Quick Start

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tictactoe-game.git
   cd tictactoe-game
   ```

2. **Open in browser**
   ```bash
   # Simply open the HTML file in your browser
   open tictactoe.html
   # or
   start tictactoe.html
   # or just double-click the file
   ```

That's it! No build process or dependencies required.

## 📁 Project Structure

```
tictactoe-game/
│
├── tictactoe.html      # Main HTML structure
├── tictactoe.css       # Styling and animations
├── tictactoe.js        # Game logic and functionality
└── README.md           # Documentation (this file)
```

## 🎮 How to Play

1. **Start the Game**
   - The game starts automatically with Player O's turn
   - Click any cell to make your move

2. **Take Turns**
   - Players alternate between O and X
   - The current player is shown at the top

3. **Win the Game**
   - Get three in a row (horizontal, vertical, or diagonal)
   - Winning cells will highlight in gold
   - A victory popup will appear

4. **View Stats**
   - Click the 📊 button in the top-right corner
   - View scores for both players and total draws
   - Restart the game or reset all scores

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `R` | Restart current game |
| `S` | Open/close sidebar |
| `Esc` | Close sidebar |

## 🎨 Customization

### Changing Colors

Edit the gradient colors in `tictactoe.css`:

```css
/* Main background gradient */
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Player O color */
.score-card-header.player-o {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Player X color */
.score-card-header.player-x {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
```

### Adjusting Animations

Modify animation durations in `tictactoe.css`:

```css
/* Cell pop animation speed */
@keyframes cellPop {
  /* ... */
}

/* Change transition speeds */
.elements {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **Vanilla JavaScript** - No frameworks or libraries
- **LocalStorage API** - Persistent score tracking
- **Google Fonts** - Poppins font family

### Browser Support
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Features Breakdown

#### JavaScript
- Event delegation for efficient event handling
- LocalStorage for persistent data
- Modular function design
- Win detection algorithm
- Keyboard event listeners

#### CSS
- CSS Grid for game board layout
- Flexbox for responsive components
- CSS animations and transitions
- Custom scrollbar styling
- Media queries for responsiveness
- CSS variables for easy theming

## 📱 Responsive Breakpoints

| Screen Size | Layout Changes |
|-------------|----------------|
| 768px+ | Full sidebar (350px) |
| 600px - 768px | Medium sidebar (300px) |
| 400px - 600px | Small sidebar (280px) |
| < 400px | Extra small sidebar (260px) |

## 🐛 Known Issues

Currently, there are no known issues. If you find any bugs, please report them in the [Issues](https://github.com/yourusername/tictactoe-game/issues) section.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

## 📝 Future Enhancements

- [ ] AI opponent (single-player mode)
- [ ] Multiple difficulty levels
- [ ] Online multiplayer
- [ ] Game history/replay
- [ ] Themes (dark mode, color schemes)
- [ ] Sound effects
- [ ] Achievements system
- [ ] Tournament mode

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2026 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👤 Author

**Arjun Singh Khangar**
- GitHub: [@arjunsinghgithub](https://github.com/arjunsinghgithub)

## 🙏 Acknowledgments

- Inspired by classic Tic-Tac-Toe games
- Design inspiration from modern UI/UX trends
- Google Fonts for the Poppins font family

## 📸 Screenshots

### Desktop View
The main game board with gradient background and modern UI elements.

### Mobile View
Fully responsive design that works perfectly on mobile devices.

### Sidebar Stats
Calendar-style score cards showing player statistics.

---

**Made with ❤️ and lots of ☕**

If you found this project helpful, please give it a ⭐️!
