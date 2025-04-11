// 랜덤 가위바위보 게임 만들기
// 사용자용 변수에 '가위,바위,보' 중 하나를 입력하면
//컴퓨터는 Math.random()을 이용해서 하나를 랜덤 선택
//둘을 비교해서 승/패/무 결과를 출력
const user = "가위";
const rock = ["가위", "바위", "보"];
const randomIndex = Math.floor(Math.random() * rock.length);
const randomGame = rock[randomIndex];
console.log(`user: ${user}`);
console.log(`CPU: ${randomGame}`);
if (randomGame == "가위") {
  if (user == "가위") console.log("무승부");
  if (user == "바위") console.log("승리");
  if (user == "보") console.log("패배");
} else if (randomGame == "바위") {
  if (user == "바위") console.log("무승부");
  if (user == "보") console.log("승리");
  if (user == "가위") console.log("패배");
} else randomGame == "보";
{
  if (user == "가위") console.log("승리");
  if (user == "바위") console.log("패배");
  if (user == "보") console.log("무승부");
}
