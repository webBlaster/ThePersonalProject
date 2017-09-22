var obj={
		first:document.getElementById('first-para'),
		first2:document.getElementById('first-para2'),
		second:document.getElementById('second'),
		hide:document.getElementById('hide')
	};
//fancy show info function that tells you about the clicked highlited elements
function showInfo(i){
	var change=obj.first;
	var change2=obj.first2;
	if (i==1) {
		change.style.transition='0.4s';
		change.style.paddingTop='0';
		change2.style.marginTop='0';
		change.innerHTML="BioDesign is the<br/>practice of identifying<br/> and meeting needs in";
		change2.innerHTML="Medicine. It requires<br/> knowledge of how the<br/>body works, the healthcare system,<br/>design methodology &<br/>some technology.";
		}else if(i==2){
			change.style.transition='0.4s';
			change.style.paddingTop='0';
			change2.style.marginTop='0';
			change.innerHTML="HEIT is a global<br/>healthcare innovation<br/>agency in Lagos,<br/>Nigeria."; 
			change2.innerHTML="HEIT solves problems<br/>for clients through Design Thinking,<br/>Medical Research &<br/>New Technology.";
		}else{
			change.style.transition='0.4s';
			change.style.paddingTop='0';
			change2.style.marginTop='0';
			change.innerHTML="EpidAlert is a non-<br/>profit organization<br/>helping African Health<br/>Systems tackle Global<br/>Health Security"; 
			change2.innerHTML="Challenges through<br/>Design Thinking,<br/>Medical Research &<br/>New Technology.";
		}
		normalize=function() {
			change.style.paddingTop='40px';
			change2.style.marginTop='0';
			change.innerHTML="Hello.<br>I'm Ibrahim Yekinni.";
			change2.innerHTML="I'm a <span class='span' onclick='showInfo(1)'>BioDesigner</span><br>working out of<br><span class='span' onclick='showInfo(2)'>@HEIT.co</span> and<br><span class='span' onclick='showInfo(3)'>@EpidAlert</span><br>in Lagos, Nigeria.";
		}
		setTimeout(normalize,10000);
		clearInterval();
}
//tells the browser to display a hidden markup and hide a shown markup
function myClose(){
	var second = obj.second;
	var disapear = obj.hide;
	second.style.display='none';
	disapear.style.display='block';
}