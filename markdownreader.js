(function(document) {

	//忽略HTML代码
	if (document.doctype) return;

	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = chrome.extension.getURL('markdownreader.css');
	document.head.appendChild(link);

	link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = chrome.extension.getURL('prettify.css');
	document.head.appendChild(link);
	document.body.innerHTML = '<div id="markdown-container"></div><div id="markdown-outline"></div><div id="markdown-backTop" onclick="window.scrollTo(0,0);"></div>';
	window.onresize = showOutline;

	var markdownConverter = new Showdown.converter();
	var lastText = null;

	function updateMarkdown(text) {
		if (text !== lastText) {
			lastText = text;
			markdownConverter.makeHtml(lastText)
			document.getElementById('markdown-container').innerHTML = markdownConverter.makeHtml(lastText);
			prettyPrint();
			updateOutline();
		}
	}

	function updateOutline() {
		var arrAllHeader = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
		var arrOutline = ['<ul>'];
		var header, headerText;
		var level = 0,
			lastLevel = 1;
		var levelCount = 0;
		for (var i = 0, c = arrAllHeader.length; i < c; i++) {
			header = arrAllHeader[i];
			headerText = header.innerText;

			header.setAttribute('id', headerText);

			level = header.tagName.match(/^h(\d)$/i)[1];
			levelCount = level - lastLevel;

			if (levelCount > 0) {
				for (var j = 0; j < levelCount; j++) {
					arrOutline.push('<ul>');
				}
			} else if (levelCount < 0) {
				levelCount *= -1;
				for (var j = 0; j < levelCount; j++) {
					arrOutline.push('</ul>');
				}
			};
			arrOutline.push('<li>');
			arrOutline.push('<a href="#' + headerText + '">' + headerText + '</a>');
			arrOutline.push('</li>');
			lastLevel = level;
		}
		arrOutline.push('</ul>')
		var outline = document.getElementById('markdown-outline');
		if(arrOutline.length > 2){
			outline.innerHTML = arrOutline.join('');
			showOutline();
		}
		else outline.style.display = 'none'; 
	}

	function showOutline() {
		var outline = document.getElementById('markdown-outline');
		var markdownContainer = document.getElementById('markdown-container');
		outline.style.left = markdownContainer.offsetLeft + markdownContainer.offsetWidth + 10 + 'px';
		outline.style.display = 'block';
	}

	var xmlhttp = new XMLHttpRequest();
	var fileurl = location.href,
		bLocalFile = /^file:\/\//i.test(fileurl);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status != 404) {
			updateMarkdown(xmlhttp.responseText);
		}
	};

	function checkUpdate() {
		xmlhttp.abort();
		xmlhttp.open("GET", fileurl + '?rnd=' + new Date().getTime(), true);
		xmlhttp.send(null);
		if (bLocalFile) setTimeout(checkUpdate, 500);
	}

	checkUpdate();

}(document));
