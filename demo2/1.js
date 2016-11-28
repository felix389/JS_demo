/* 清除屏幕 */
document.getElementById("clear").addEventListener("click", function() {
	document.getElementById("display").value = "";
});

/* 计算器操作 */
function get(value) {
	document.getElementById("display").value += value; 
} 

/* 计算器计算 */
function calculates() {
	var result = 0;
	result = document.getElementById("display").value;
	document.getElementById("display").value = "";
	document.getElementById("display").value = eval(result);
};
