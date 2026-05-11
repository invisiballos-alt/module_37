const elements = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
let Os_n_crosses = "";

for (let i = 0; i < elements.length; i++) {
    Os_n_crosses += elements[i] + " ";
    if ((i + 1) % 3 === 0){
        Os_n_crosses += "\n";
    }
}

console.log(Os_n_crosses)