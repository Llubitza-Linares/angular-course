import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2021';

  constructor() {
    const testMap = [1, 2, 3, 4, 5, 6].map(item => item * 2);
    console.log(testMap);

    const testForEach = [1, 2, 3, 4, 5, 6].forEach(item => item);
    console.log(testForEach);

    const testFind = [1, 2, 3, 4, 5, 6].find(item => item === 4);
    console.log(testFind);

    const testFilter = [1, 2, 3, 4, 5, 6].filter(item => item % 2 === 0);
    console.log(testFilter);

    const testFindIndex = [90, 2, 300, 4, 5, 6].findIndex(item => item === 300);
    console.log(testFindIndex);

    const testIndexOf = 'ricardo'.indexOf('o');
    console.log(testIndexOf);

    const testJoin = [1, 2, 3, 4, 5, 6].join(',');
    console.log(testJoin);

    const testSplit = '1,2,3,4,5,6'.split(',');
    console.log(testSplit);

    const testSplice = [1, 2, 3, 4, 5, 6].splice(1, 2);
    console.log(testSplice);

    const testSpliceA = [10, 20, 30, 40, 50, 60];
    const testSpliceB = [1, 2, 3, 4, 5, 6].splice(1, 2);
    testSpliceA.splice(0, 1);

    console.log(testSpliceB, testSpliceA);

    const testReduce = [1, 2, 3, 4, 5, 6].reduce(
      (acc, value) => acc + value,
      100
    );
    console.log(testReduce);

    const testEntries = { value: 'ricardo', key: 'RCP' };
    console.log('aaaa', Object.entries(testEntries));
    console.log('bbbb', Object.keys(testEntries));
    console.log('cccc', Object.values(testEntries));

    const array1 = [1, 2, 3, 4, 5];
    const array2 = [9, 10, 11, ...array1];

    const per1 = { name: 'a', age: 12 };
    const per2 = { data: 'R', ...per1 };

    console.log('Spread', array2, per2);

    const per3 = {
      name: 'a',
      age: 12,
      phone: 12323234234,
      extra: 123,
      response: 200,
      response2: 200,
      response4: 200
    };

    const { phone: ci } = per3;
    console.log('name=', ci);

    //{1:'a',2:'a',3:'a',4:'a',5:'a',6:'a'} convertir a un array y sumar los numeros pares

    const Ej1 = { 1: 'a', 2: 'a', 3: 'a', 4: 'a', 5: 'a', 6: 'a' };
    const b = Object.keys(Ej1)
      .map(m => parseInt(m))
      .reduce((acc, value) => {
        if (value % 2 === 0) {
          acc = acc + value;
        }
        return acc;
      }, 0);
    console.log('aaa', b);

    //[1,2,3,4,5,6] filtrar los numeros impares y mostrarlos como cadena

    console.log(
      '222= ',
      [1, 2, 3, 4, 5, 6].filter(item => item % 2 !== 0).join('-')
    );
  }
}

//funciones normales y funciones flecha
//getName (name:string):string{
//  ....
//  ....
//  return "hola" + name;

//}

//name:string)-> {
//  ....
//  ....
//  return "hola" | name;
//}

//getName():string{
//  return "hola"
//}

//const test=()->"hola"
