const math = require('mathjs');
const itertools = require('itertools');
const { array } = require('jsverify');

function are_isomorphic(graph1, graph2){
    if(graph1.length != graph2.length){
        return false;
    }
    n = graph1.length
    perms = generate_permutation_matrix(n)
    for (let value of perms){
        valueT = math.transpose(value)
        midpoint = math.multiply(value, graph2)
        finished = math.multiply(midpoint, valueT)
        if (math.deepEqual(finished, graph1)){ //complexity of n as it iterates through both matrices comparing the values to eachother
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
    return itertools.permutations(final)
}

/*
testgraph1 = [[0, 1, 0], [1, 0, 1], [0, 1, 0]]

testgraph2 = [[0, 1, 1], [1, 0, 0], [1, 0, 0]]


console.log(are_isomorphic(testgraph1, testgraph2));


for (let value of generate_permutation_matrix(3)){
    console.log(value)
}

*/


