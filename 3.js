const printOddNumber = (num)=>{
    for(let i = 1; i<= num; i++){
        if(i % 2 !== 0){
            console.log(i)
        }
    }
}
printOddNumber(10)

const printPijarCamp =(num)=>{
    for(let i = 1; i<= num; i++){
        if( i % 3 === 0 && i % 5 === 0){
            console.log('pijar camp')
        }else if(i % 3 === 0){
            console.log('pijar')
        }else if(i % 5 === 0){
            console.log('camp')
        }else{
            console.log(i)
        }
    }
}
printPijarCamp(15)


const combineArray = (arr1, arr2) =>{
    const result = [
        ...arr1,
        ...arr2
    ]
    return result
}

const combineObject = (obj1, obj2) =>{
    const result = {
        ...obj1,
        ...obj2
    }
    return result
}
const hobi = ['ngoding', 'joging']
const hobi2 = ['gaming', 'ngoding']
const combinedArray = combineArray(hobi, hobi2)
console.log(combinedArray)