//----------------------------------------------------------------------------------------------------PAGE LOADERS
//home
function load_home(){
	load_header()
}

//tools page
function load_tools(){
	load_header()
}

//links
function load_links(){
	load_header()
}

//servers
function load_servers(){
	load_header()
	list_servers()
}

//----------------------------------------------------------------------------------------------------BASIC PAGE THINGS
//header
function load_header(){
	document.body.innerHTML +=`
	<div id="header">
	Clipnote Studio | 
	<a href="index.html">Home</a>
	
	//<a href="credits.html">Credits</a>
	//<a href="todo.html">Todo list</a>
	 |
	</div>
	`
}
//<a href="servers.html">Servers</a>



//list servers
server_list=[
	"http://107.135.33.34:3000",//frogs server
]
function list_servers(){
	for (var i = 0; i < server_list.length; i++) {
		var info_title=""
		
		fetch(server_list[i]+"/info")
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			info_title = data.title
			console.log(info_title)
			document.getElementById('server'+String(i)).innerHTML+=`
			k
			`
		});
		
		document.getElementById('main').innerHTML+=`
		<div class='block' id='server${i}'>
		<img src='${server_list[i]}/info/icon' width='64' height='64' style='float:left;'>
		${server_list[i]}<br>
		</div>
		`;
		
	}
	
}