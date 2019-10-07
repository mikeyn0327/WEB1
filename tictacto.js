var body1 = document.body;
var table1 = document.createElement('table');
var lines =  [];
var boxes = [];
var turn = 'X';


var callback = function(event1) { 
    var whatline = lines.indexOf(event1.target.parentNode);
    console.log('whatline', whatline);
    var whatbox = boxes[whatline].indexOf(event1.target);
    console.log('whatbox',whatbox);

    if (boxes[whatline][whatbox].textContent !== '') { //칸이 채워졌는지 확인  
        alert('It is already filled box');    
    } else {
      boxes[whatline][whatbox].textContent = turn;
      //세칸이 채워졌는지 확인
    var alltrue = false;
    //가로줄 확인하기
    if (boxes[whatline][0].textContent == turn &&
        boxes[whatline][1].textContent == turn &&
        boxes[whatline][2].textContent == turn)  
        {
            alltrue = true;
        }
    //세로줄 확인하기
    if (boxes[0][whatbox].textContent == turn &&
        boxes[1][whatbox].textContent == turn &&
        boxes[2][whatbox].textContent == turn)
        {
             alltrue = true;
        }
    //대각선 확인하기
    if (whatline - whatbox == 0) {
        if (boxes[0][0].textContent == turn &&
            boxes[1][1].textContent == turn &&
            boxes[2][2].textContent == turn
            ){
            alltrue = true;
        }
    }

    if (Math.abs(whatline-whatbox) == 2) {
        if (boxes[0][2].textContent == turn &&
            boxes[1][1].textContent == turn &&
            boxes[2][0].textContent == turn
            ){
            alltrue = true;
        }
    }
        
    }
    
    
    if (alltrue) {
        alert(turn + ' You Win!');
        turn='X';
        boxes.forEach(function (line) {
            line.forEach(function (box) {
                box.textContent = '';
        });
    });
    }
    else {
        if (turn == 'X') {
            turn = 'O';
        }
        else {
            turn = 'X';
        }
    }
};

for(var i = 1 ; i<=3 ; i++) {
    var line1 = document.createElement('tr');
    lines.push(line1);
    boxes.push([]);
    for(var j = 1 ; j<=3 ; j++) {
        var box1 = document.createElement('td');
        box1.addEventListener('click', callback);
        boxes[i - 1].push(box1);
        line1.appendChild(box1);
    }
    table1.appendChild(line1);
}
body1.appendChild(table1);
console.log(boxes);



