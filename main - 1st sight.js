#!/usr/bin/env node


// Сумма
function sum(op1, op2) {
	console.log("Function not implemented");
	return -1;
}

// Вычитание
function sub(op1, op2) {
	console.log("Function not implemented");
	return -1;	
}

// Умножение
function mul(op1, op2) {
	console.log("Function not implemented");
	return -1;
}

// Деление
function div(op1, op2) {
	console.log("Function not implemented");
	return -1;	
}

function main(arg) {

	// Приветствие
	console.log("Welcome to Simple Calculator");

	var result = 0;
	
	// Разбиваем выражение
	var op = arg.match(/^([\d]+)[\s]*([+\-*\/])[\s]*([\d]+)/i);

	// Если не получилось
	// разделить завершаем работу
	if(!op) {
		console.log("Operation invalid");
		return -1;
	}
	
	// Вызов необходимых функций
	switch(op[2]) {
		case '+': result = sum(op[1], op[3]); break;
		case '-': result = sub(op[1], op[3]); break;
		case '*': result = mul(op[1], op[3]); break;
		case '/': result = div(op[1], op[3]); break;
	}
	
	// Вывод результата
	console.log("Result: " + result);
	
	return 0;
}


// Запуск приложения
if(process.argv.length > 2) {
	main(process.argv[2]);
} else {
	console.log("Usage: node " + process.argv[1] + ' "operation"');
}
	
