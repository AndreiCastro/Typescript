//// string ////
let myString : string = '';

//// number ////
let myNmber : number = 10;

//// boolean ////
let myBoolean : boolean = false;

//// array string ////
let myArrayStrings : string[] = ['', '', '', ''];
//// array number ////
let myArrayNumbers : number[] = [10, 20, 30, 40];
//// array any ////
let myArrayAnys : any[] = ['', 10, false, [], true];

//// objeto ////
let myObject: {nome: string, idade: number, sexoMasculino?: boolean} = {
    nome: 'Mayara',
    idade: 30,
    //sexoMasculino: true //com o (?) digo que essa propriedade pode ser nula
};

console.log(myObject);