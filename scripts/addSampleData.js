// const positiveInput = document.getElementById('positiveInput').value;
// const negativeInput = document.getElementById('negativeInput').value;

document.getElementById('addBtn').addEventListener('click', () => {
    let positiveInput = +document.getElementById('positiveInput').value;
    let negativeInput = +document.getElementById('negativeInput').value;
    let period = document.getElementById('period').value;
    let obj = {};
    obj.period = period + " 2021";
    obj.openedPositions = positiveInput;
    obj.closedPositions = negativeInput;
    obj.stack = "2021a";
    barChartData.unshift(obj);
});


