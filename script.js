// Game state variables
let currentPlayer = "O";
let filledElements = 0;
let gameOver = false;
let scores = {
  O: 0,
  X: 0,
  draw: 0
};

// DOM elements
const eles = document.querySelectorAll(".elements");
const elementContainer = document.getElementById("element-container");
const currentPlayerSpan = document.getElementById("current-player");
const popupMsg = document.getElementById("popup-msg");
const popupIcon = document.getElementById("popup-icon");
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebarClose = document.getElementById("sidebar-close");

// Winning combinations
const wins = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]              // Diagonals
];

// Load scores from localStorage
function loadScores() {
  const savedScores = localStorage.getItem('tictactoeScores');
  if (savedScores) {
    scores = JSON.parse(savedScores);
    updateScoreBoard();
  }
}

// Save scores to localStorage
function saveScores() {
  localStorage.setItem('tictactoeScores', JSON.stringify(scores));
}

// Update score board display
function updateScoreBoard() {
  document.getElementById('score-o').textContent = scores.O;
  document.getElementById('score-x').textContent = scores.X;
  document.getElementById('score-draw').textContent = scores.draw;
}

// Update turn indicator
function updateTurnIndicator() {
  if (currentPlayerSpan) {
    currentPlayerSpan.textContent = currentPlayer;
    currentPlayerSpan.style.animation = 'none';
    setTimeout(() => {
      currentPlayerSpan.style.animation = 'cellPop 0.4s ease';
    }, 10);
  }
}

// Toggle sidebar
function toggleSidebar() {
  sidebar.classList.toggle('active');
}

// Close sidebar
function closeSidebar() {
  sidebar.classList.remove('active');
}

// Event delegation for cell clicks
elementContainer.addEventListener('click', function(event) {
  const target = event.target;
  
  // Check if clicked element is a valid cell
  if (!target.classList.contains("elements")) return;
  if (target.dataset.status !== "blank") return;
  if (gameOver) return;
  
  // Make the move
  makeMove(target);
});

// Make a move
function makeMove(cell) {
  // Set the cell value
  cell.innerText = currentPlayer;
  cell.dataset.status = "filled";
  filledElements++;
  
  // Add color styling based on player
  if (currentPlayer === "O") {
    cell.style.color = "#667eea";
  } else {
    cell.style.color = "#f5576c";
  }
  
  // Check for win
  if (checkWin()) {
    return;
  }
  
  // Check for draw
  if (checkDraw()) {
    return;
  }
  
  // Switch player
  currentPlayer = currentPlayer === "O" ? "X" : "O";
  updateTurnIndicator();
}

// Check for win
function checkWin() {
  for (let combo of wins) {
    const [a, b, c] = combo;
    
    if (eles[a].innerText === currentPlayer && 
        eles[b].innerText === currentPlayer && 
        eles[c].innerText === currentPlayer) {
      
      // Highlight winning cells
      highlightWinningCells([a, b, c]);
      
      // Update game state
      gameOver = true;
      scores[currentPlayer]++;
      saveScores();
      updateScoreBoard();
      
      // Show popup
      popupMsg.textContent = `Player ${currentPlayer} Wins! 🎉`;
      popupIcon.textContent = "🏆";
      showPopup();
      
      return true;
    }
  }
  return false;
}

// Highlight winning cells
function highlightWinningCells(cells) {
  cells.forEach(index => {
    eles[index].style.background = "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)";
    eles[index].style.transform = "scale(1.1)";
    eles[index].style.boxShadow = "0 8px 30px rgba(255, 215, 0, 0.5)";
  });
}

// Check for draw
function checkDraw() {
  if (filledElements >= 9) {
    gameOver = true;
    scores.draw++;
    saveScores();
    updateScoreBoard();
    
    popupMsg.textContent = "It's a Draw! 🤝";
    popupIcon.textContent = "🤝";
    showPopup();
    
    return true;
  }
  return false;
}

// Show popup
function showPopup() {
  const popup = document.getElementById("popup");
  if (popup) {
    popup.classList.remove("hidden");
  }
}

// Hide popup
function hidePopup() {
  const popup = document.getElementById("popup");
  if (popup) {
    popup.classList.add("hidden");
  }
}

// Restart game
function restart() {
  // Reset game state
  currentPlayer = "O";
  filledElements = 0;
  gameOver = false;
  
  // Clear all cells
  eles.forEach(cell => {
    cell.innerText = "";
    cell.dataset.status = "blank";
    cell.style.background = "rgba(255, 255, 255, 0.9)";
    cell.style.color = "";
    cell.style.transform = "";
    cell.style.boxShadow = "";
  });
  
  // Update turn indicator
  updateTurnIndicator();
  
  // Hide popup
  hidePopup();
}

// Reset all scores
function resetScores() {
  if (confirm('Are you sure you want to reset all scores? This cannot be undone.')) {
    scores = { O: 0, X: 0, draw: 0 };
    saveScores();
    updateScoreBoard();
    
    // Show feedback
    const resetButton = document.querySelector('.reset-scores-button');
    const originalText = resetButton.textContent;
    resetButton.textContent = '✅ Scores Reset!';
    resetButton.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
    
    setTimeout(() => {
      resetButton.textContent = originalText;
      resetButton.style.background = '';
    }, 2000);
  }
}

// Initialize game
function initGame() {
  loadScores();
  updateTurnIndicator();
  
  // Sidebar toggle event listeners
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', toggleSidebar);
  }
  
  if (sidebarClose) {
    sidebarClose.addEventListener('click', closeSidebar);
  }
  
  // Close sidebar when clicking outside
  document.addEventListener('click', function(event) {
    if (sidebar && sidebar.classList.contains('active')) {
      if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
        closeSidebar();
      }
    }
  });
  
  // Add keyboard support
  document.addEventListener('keydown', function(event) {
    if (event.key === 'r' || event.key === 'R') {
      restart();
    }
    if (event.key === 's' || event.key === 'S') {
      toggleSidebar();
    }
    if (event.key === 'Escape') {
      closeSidebar();
    }
  });
}

// Start the game when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGame);
} else {
  initGame();
}
