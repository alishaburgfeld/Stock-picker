// exports.picker = function(list) {
function picker(list) {
    let min= Math.min(...list)
    answer=[0]
    for (let i=0;i<list.length-2;i++) {
        for (let j=list.length-1;j>i;j--) {
            if (list[j]-list[i] > min) {
                min=list[j]-list[i]
                answer[0]=[i,j]
            }
        }
    }
    return answer[0]
}


console.log(picker([17,3,6,9,15,8,6,1,10])) // , [1, 4]))
console.log(picker([17,3,6,9,15,8,6,1,10])) //, [1,4]))
console.log(picker([3,17,6,9,18,15,6,1,10])) //, [0,4]))
console.log(picker([1,17,6,9,8,15,6,3,19])) //, [0,8]))
console.log(picker([19,17,6,9,8,15,6,3,1])) //, [2,5]))