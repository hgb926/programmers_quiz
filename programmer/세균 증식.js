function solution(n, t) {
  for (let i = 1; i <= t; i++) {
    n = n * 2;
  }
  return n;
}

console.log(solution(7, 15));