const key = document.getElementById('key'),
	password = document.getElementById('password');
key.addEventListener('click', function () {
	password.focus();
	if (password.type == 'password') {
		password.type = 'text';
		key.classList.replace('bx-lock-alt', 'bx-lock-open-alt');
	} else {
		password.type = 'password';
		key.classList.replace('bx-lock-open-alt', 'bx-lock-alt');
	}
});
