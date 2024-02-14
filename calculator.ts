  type Operation = 'multiply' | 'add' | 'divide';
  type Result = number | string

const calculator = (a: number, b: number, op: Operation): Result => {
    // if ( !operations.includes(op)) {
    //     console.log('this operation is not defined')
    // }

    if (op == 'multiply') return a * b
    if ( op == 'add') return a + b
    if (op == 'divide') {
        if (b === 0) throw new Error ('cant\t divide by 0! sorry!')
        return a / b
    } 
    throw new Error ('Operation is not valid')
}
console.log(process.argv)

// try {
//     console.log(calculator(1,5, 'divide'))
//     console.log(calculator(1,0, 'divide'))
// } catch (e) {
//     console.logo('Something went wrong', e)
// }
// console.log(calculator(1, 3, 'add'))
// console.log(calculator(1, 4, 'multiply'))



// const operations = [ 'multiply', 'add', 'divid']

// const calculator = (a: number, b: number, op: 'multiply' | 'add' | 'divide') => {
//     // if ( !operations.includes(op)) {
//     //     console.log('this operation is not defined')
//     // }

//     if (op == 'multiply') return a * b
//     if ( op == 'add') return a + b
//     if (op == 'divide') {
//         if (b === 0) return 'cant\t divide by 0! sorry!'
//     } return a / b
// }

// console.log(calculator(1, 3, 'add'))
// console.log(calculator(1, 4, 'multiply'))

// type Operation = 'multiply' | 'add' | 'divide';
// type Result = number | string

// const calculator = (a: number, b: number, op: Operation): Result => {
//   // if ( !operations.includes(op)) {
//   //     console.log('this operation is not defined')
//   // }

//   if (op == 'multiply') return a * b
//   if ( op == 'add') return a + b
//   if (op == 'divide') {
//       if (b === 0) return 'cant\t divide by 0! sorry!'
//   } return a / b
// }

// console.log(calculator(1, 3, 'add'))
// console.log(calculator(1, 4, 'multiply'))



// type Operation = 'multiply' | 'add' | 'divide';
// type Result = number | string

// const calculator = (a: number, b: number, op: Operation): Result => {
//   // if ( !operations.includes(op)) {
//   //     console.log('this operation is not defined')
//   // }

//   if (op == 'multiply') return a * b
//   if ( op == 'add') return a + b
//   if (op == 'divide') {
//       if (b === 0) throw new Error ('cant\t divide by 0! sorry!')
//       return a / b
//   } 
//   throw new Error ('Operation is not valid')
// }

// console.log(calculator(1, 3, 'add'))
// console.log(calculator(1, 4, 'multiply'))

