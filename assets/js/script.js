// Fungsi untuk mendapatkan data pengguna dari localStorage
function getUsers() {
    const usersString = localStorage.getItem('users');
    return usersString ? JSON.parse(usersString) : [];
  }
  
  // Fungsi untuk menyimpan data pengguna ke localStorage
  function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  function login(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      alert('Login successful!');
      window.location.href = '../admin/pembayaran/index.html';
    } else {
      alert('Invalid username or password.');
    }
  }
  
  function register(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
  
    const users = getUsers();
  
    if (users.some(u => u.username === username)) {
      alert('Username already exists. Please choose another.');
    } else {
      users.push({ username, password });
      saveUsers(users);
      alert('Registration successful! You can now login.');
    }
  }
  