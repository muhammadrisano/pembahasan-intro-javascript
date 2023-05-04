const printSquare = (num) =>{
    for(let i = 0; i< num; i++){
        let print = ''
        for(let j = 0; j < num; j++){
            // print = print + ' * '
            print += ' * '
        }
        console.log(print)
    }
}
printSquare(6)

// const printTriangleWithNumber = (num) =>{
//     for(let i = num; i>= 1; i--){
//         console.log(i)
//         let print = ''
//         for(j = 1; j<= i; j++){
//             print = print + j
//         }
//         console.log(print)
//     }
// }
const printTriangleWithNumber2 = (num) =>{
    for(let i = 0; i<= num; i++){
        let print = ''
        for(j = 1; j<= num - i; j++){
            print = print + j
        }
        console.log(print)
        // console.log(i)
    }
}
printTriangleWithNumber2(5)