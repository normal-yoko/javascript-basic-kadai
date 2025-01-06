// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById("btn");

// 新しくli要素を作成し、定数に代入する
const text = document.getElementById("text");


// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener("click",()=>{
  text.textContent="ボタンをクリックしました";
});

