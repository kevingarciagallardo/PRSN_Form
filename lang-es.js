var check=document.querySelector(".check-es");
check.addEventListener('click', language);

function language(){
	let id=(check.checked);
	if (id==true){
		location.href="index.html";
	} else{
		location.href="index_es.html"
	}
}
