
document.getElementById('contactForm').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  

    if (!name || !email || !message) {
      alert('All fields are required!');
      e.preventDefault(); 
      return;
    }
  
    
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      e.preventDefault(); 
      return;
    }
  
    
    alert('Your message has been sent successfully!');
  });
  
  
  
  function addTodo() {
    const input = document.getElementById('todoInput');
    const list = document.getElementById('todoList');
    const task = input.value.trim();
  
    if (task === '') {
      alert('Task cannot be empty.');
      return;
    }
  
    const li = document.createElement('li');
    li.textContent = task;
  
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.style.marginLeft = '10px';
    removeBtn.onclick = () => li.remove();
  
    li.appendChild(removeBtn);
    list.appendChild(li);
  
    input.value = '';
  }
  
