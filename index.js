const button = document.querySelector(".quickSort");
const randomMass = [10, 15, 22, 19, 18, 17, 12];
function q_Sort(arr){
    if(arr.length < 2){
        return arr;
    }
    const max = arr.length-1;
    const pivot = arr[max];
    const right = [];
    const left = [];
    for(let i = 0;i<max;i++){
        if(pivot>arr[i]){
            left.push(arr[i])
        }else if(pivot<arr[i]){
            right.push(arr[i]);
        }
    }
    return q_Sort(left).concat(pivot, q_Sort(right));
}
buttonClick = (event) =>{
    console.log(q_Sort(randomMass))
}
button.addEventListener("click",buttonClick)