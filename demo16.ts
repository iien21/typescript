// 枚举类型
enum Status {
  MASSAGE=1,
  SPA,
  ANMO,
}
// 可自定义值，未定义默认从0排序

function getServe(status: number) {
  if (status === Status.MASSAGE) {
    return "message";
  } else if (status === Status.SPA) {
    return "SPA";
  } else if (status === Status.ANMO) {
    return "anmo";
  }
}

const result = getServe(2);
console.log(result,Status[2]);
