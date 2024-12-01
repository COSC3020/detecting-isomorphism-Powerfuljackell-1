const { array } = require('jsverify');

function are_isomorphic(graph1, graph2){
    if(graph1.length != graph2.length){
        return false;
    }
    n = graph1.length
    perms = generate_permutation_matrix(n)
    for (let value of perms){
        valueT = matrixTranspose(value)
        midpoint = matrixMultiply(value, graph2)
        finished = matrixMultiply(midpoint, valueT)
        if (JSON.stringify(finished) == JSON.stringify(graph1)){ //complexity of n as it iterates through both matrices comparing the values to eachother
            return true;
        }
    }
    return false;
}

function generate_permutation_matrix(n){ //complexity of n! in the worst case as it returns a generator for all possible permutation matrices
    final = []
    for(let i = 0; i < n; i++){
        temp = new Array(n).fill(0)
        temp[i] = 1
        final.push([...temp])
    }
    return permuteArray(final)
}

function permuteArray(arr){ //attempted to implement a recursive form, did not work well, still O(n!)
    let res = [[]]
    for (let num of arr) {
        const temp = [];
        for (let arr of res) {
            for (let i = 0; i <= arr.length; i++) {
                const newArr = [...arr];
                newArr.splice(i, 0, num);
                temp.push(newArr);
            }
        }
        res = temp;
    }
    return res;
}

function matrixTranspose(matrix){ // n^2 time
    result = [...matrix]
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < i; j++) {
            tmp = result[i][j];
            result[i][j] = result[j][i];
            result[j][i] = tmp;
        }
    }
    return result
}


function matrixMultiply(matrix1, matrix2){ //this assumes two square matrixes (adjency matrices)
    if (matrix1.length != matrix2.length){
        console.log("Bad Input")
        return null
    }
    n = matrix1.length
    result = Array.from({length: n}, () => Array(n).fill(0)); //creates a new 2d array filled with zeroes
    for (let i = 0; i < n; i++) { //n^3 complexity
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }
    return result
}



testgraph1 = [[0, 1, 0], [1, 0, 1], [0, 1, 0]]

testgraph2 = [[0, 1, 1], [1, 0, 0], [1, 0, 0]]


console.log(are_isomorphic(testgraph1, testgraph2));
/*
a = generate_permutation_matrix(3)

for (let value of a){
    console.log(value)
}*/









