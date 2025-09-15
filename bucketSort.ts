// Função principal do Bucket Sort
function bucketSort(arr: number[], bucketSize: number = 5): number[] {
  if (arr.length === 0) return arr;



  // 1. Descobrir menor e maior valor
  let minValue = arr[0]!;
  let maxValue = arr[0]!;

  for (const num of arr) {
    if (num < minValue) minValue = num!;
    if (num > maxValue) maxValue = num!;
  }

  // 2. Criar baldes
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets: number[][] = Array.from({ length: bucketCount }, () => []);

  // 3. Distribuir os números nos baldes
  for (const num of arr) {
    const bucketIndex = Math.floor((num - minValue) / bucketSize);
    if (buckets[bucketIndex]) {
      buckets[bucketIndex].push(num!);
    }
  }

  // 4. Ordenar cada balde
  for (const bucket of buckets) {
    bucket.sort((a, b) => a - b);
  }

  // 5. Juntar todos os baldes em um array ordenado
  return buckets.flat();
}

// Exemplo de uso:
const numeros = [5, 25, 3, 49, 9, 37, 21, 43, 1, 2, 8, 7];
console.log("Array original:", numeros);
console.log("Array ordenado:", bucketSort(numeros));
// npx ts-node bucketSort.ts