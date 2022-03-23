var check=document.querySelector(".check-en");
check.addEventListener('click', language);

function language(){
	let id=(check.checked);
	if (id==true){
		location.href="index_es.html";
	} else{
		location.href="index.html"
	}
}
