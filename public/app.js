const socket = io('http://localhost:3000');
const chat = document.getElementById('chat');
const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');
const usersCount = document.getElementById('usersCount');

const user = prompt('Enter your name:') || 'Anonymous';

function addMessage(data) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  
  if (data.user === 'System') {
    messageElement.classList.add('system');
    messageElement.innerHTML = `<span class="system">${data.message}</span>`;
  } else {
    messageElement.innerHTML = `<span class="user">${data.user}:</span> ${data.message}`;
  }
  
  chat.appendChild(messageElement);
  chat.scrollTop = chat.scrollHeight;
}

socket.on('chatMessage', (data) => {
  addMessage(data);
});

socket.on('users', (users) => {
  usersCount.textContent = `Connected users: ${users.length}`;
});

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (message) {
    socket.emit('chatMessage', { user, message });
    messageInput.value = '';
  }
});

socket.emit('userJoined', { user });

messageInput.focus();

socket.on('connect', () => {
  console.log('Connected to chat server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from chat server');
});