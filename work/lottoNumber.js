// 로또번호 생성기
// 1~45까지 숫자 중 중복없이 6개를 추출
// 작은 수를 앞으로 정렬(오름차순)

let numbers = [];
for (let i = 1; i <= 45; i++) {
  numbers.push(i);
}
numbers.sort(() => Math.random() - 0.5);

const lottoNumbers = [];
for (let i = 0; i < 6; i++) {
  lottoNumbers.push(numbers.pop());
}

console.log(
  "로또 번호:",
  lottoNumbers.sort((a, b) => a - b)
);
