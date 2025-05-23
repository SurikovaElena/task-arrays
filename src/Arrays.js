/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
  let comma = ",";
  const array = data.split(comma);
  array.sort(compareNumbers);
  let summaryLine = array.toString();
  return summaryLine;
}

function compareNumbers(a, b) {
  return a - b;
}
/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
  for (let i = 0; i < data.length; i++)
  {
    if (data[i] > 100){
      data.splice(i, 1);
      i--;
    } 
  }
  return data;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
  let length = Math.max(array1.length, array2.length), array3 = [];
  for (let i = 0; i < length; i++){
    if (array1[i]) {array3.push(array1[i]);}
    if (array2[i]) {array3.push(array2[i]);}
  }
  return array3;
}
