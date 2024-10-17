blog.addLoadEvent(function () {
	const input = document.getElementById('search-input');
		if (!input) return;
	const url="https://qfafa.com/portal/post/search/?k=";
	const tips=document.getElementById('search-tips');
	let isLock=false;
	input.addEventListener('keypress', function(event) {
		if(	isLock) return false;
		if (event.key === 'Enter') {
			event.preventDefault();
			if(input.value===''){
				isLock=false;
				tips.textContent="游戏名字不能为空";
				return false;
			}
			isLock=true;
			 window.location.href=url+encodeURIComponent(input.value);
		}
	});
	document.getElementById('search-btn').addEventListener('click', function() {
		if(	isLock) return false;
		if(input.value===''){
			tips.textContent="游戏名字不能为空";
			isLock=false;
			return false;
		}
		isLock=true;
		window.location.href=url+encodeURIComponent(input.value);
	});
});