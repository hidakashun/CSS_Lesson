const buttonOpen = document.getElementById("modalOpen");//モーダルボタンを押したときidで取得したとき、getElementById
const buttonClose = document.querySelector(".modalClose");//Xボタンを押したときspan classで取得したとき、querySelector
const modal = document.getElementById("modal");//モーダルのcssを変更させるため必要

buttonOpen.addEventListener("click", () => {//トリガー。クリックしたら
    //モーダルを開く＝modalのdisplay: none;を解除する
    modal.style.display = "block";
})

buttonClose.addEventListener("click", () => {//トリガー。クリックしたら
    //モーダルを閉じる＝modalのdisplay: none;を解除するしたのを元に戻す
    modal.style.display = "none";
})

document.addEventListener("click", (e) => {//トリガー。クリックしたら
    //外側のグレーの部分を押しても閉じるようにする
    //console.log(e.target);//どこを取得したのかという情報が入る→検証ツールのコンソールでクリックしたときに何の情報が表示されるのか確認
    if(e.target == modal) {
        modal.style.display = "none";//モーダルの箇所をクリックしたとき閉じる
    }
});