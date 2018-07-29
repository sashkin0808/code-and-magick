function getMax (arr) {
	var max = arr[0];
	for (var i=0; i<arr.lenght;i++) {
		if (arr[i]>max) {
			max=arr[i];
		};
    };
	return max;
};

function  renderStatistics (ctx, names, times) {
	
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
	ctx.beginPath();
    ctx.moveTo(110,20);
    ctx.bezierCurveTo(120, 0, 180, 5, 530, 20);
    ctx.bezierCurveTo(540, 200, 510, 260, 530, 290);
    ctx.bezierCurveTo(400, 300, 250, 260, 110, 290);
    ctx.bezierCurveTo(130, 200, 160, 50, 110, 20);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
	ctx.beginPath();
    ctx.moveTo(100,10);
    ctx.bezierCurveTo(120, 0, 180, 5, 520, 10);
    ctx.bezierCurveTo(540, 200, 510, 260, 520, 280);
    ctx.bezierCurveTo(400, 300, 250, 260, 100, 280);
    ctx.bezierCurveTo(130, 200, 160, 50, 100, 10);
    ctx.fill();

    ctx.fillStyle = "#000000";
    ctx.font = "16px PT Mono";
    ctx.fillText("Ура вы победили!", 200, 30);
    ctx.fillText("Список результатов:", 200, 50);

    var height = 150;
    var maxValue = getMax(times);
  	var step = height/(maxValue-0);
    var colWidth = 40;
    var colIndent = 50;
    var lineHeight=15;
    ctx.font = "13px PT Mono";
    
    var initialX = 200;
    var initialY = 255;

    for (var i=0; i<times.length;i++) {
    	if (names[i]=='Вы') {
    		ctx.fillStyle = "rgba(255, 0, 0, 1)";
    	} else {
    		ctx.fillStyle = "rgba(0, 83, 138," + Math.random() + ")";
    	}
    	ctx.fillRect(initialX + colIndent*i, initialY-times[i]*step, colWidth, times[i]*step);
    	ctx.fillStyle = "#000000";
    	ctx.fillText(names[i],initialX + colIndent*i,initialY + lineHeight,colWidth,lineHeight);
    };
};