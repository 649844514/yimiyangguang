var $btn = $(".btns");
var $datebox = $(".datebox");
var $hid = $(".hid");
var $cancel = $(".btn1");
var $confirm = $datebox.find(".btn2");
var $con = $hid.find(".btn2");
var $date = $datebox.find("input");
$btn.on("click",function(){
	$date[0].value= "";
	$datebox.show();
});
$confirm.on("click",function(){
	$datebox.hide();
	$hid.show();
});
$cancel.on("click",function(){
	$datebox.hide();
	$hid.hide();
});
$con.on("click",function(){
	var date = $date.val();
	location.href = 'details.html';
	//console.log(date)
});