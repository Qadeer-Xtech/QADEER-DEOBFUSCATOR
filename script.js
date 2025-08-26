const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', () => {
  const text = userInput.value.trim();
  if (!text) return;
  addMessage('آپ', text);
  userInput.value = '';

  // بوٹ کا ردعمل - صرف محفوظ اور تعلیمی جوابات
  let response = "میں صرف قانونی اور تعلیمی کوڈنگ مدد دے سکتا ہوں۔";
  if (text.includes('Python')) {
    response = "مثال: \n```python\nprint('Hello World')\n```";
  } else if (text.includes('Java')) {
    response = "مثال: \n```java\nSystem.out.println(\"Hello World\");\n```";
  } else if (text.includes('Node')) {
    response = "مثال: \n```js\nconsole.log('Hello World');\n```";
  }
  addMessage('بوٹ', response);
});

function addMessage(sender, text) {
  const div = document.createElement('div');
  div.innerHTML = `<strong>${sender}:</strong> <pre>${text}</pre>`;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}
