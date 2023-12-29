const key = document.getElementById('key'),
	password = document.getElementById('password');
key.addEventListener('click', function () {
	password.focus();
	// password type
	password.type = password.type === 'password' ? 'text' : 'password';
	// lock element
	key.className = `bx bx-lock-${password.type === 'password' ? 'alt' : 'open-alt'}`;
});
