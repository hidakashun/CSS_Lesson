function get_calc(btn) {//get_calc 関数は、パラメータ btnがクリックされたときに呼び出されます。
  if(btn.value == "=") {//ボタンが "="（等号）の場合、計算を実行してその結果を表示します。
    document.dentaku.display.value = eval(document.dentaku.display.value);
  } else if (btn.value == "C") {//ボタンが "C" の場合、表示されている数式をクリアします。
    document.dentaku.display.value = "";
  } else {//ボタンが上記の条件に該当しない場合、数式にボタンの値を追加します。
    if (btn.value == "×") {//ただし、"×" と "÷" の場合は、それぞれ "*" と "/" に変換してから数式に追加します。
      btn.value = "*";
    } else if (btn.value == "÷") {
      btn.value = "/";
    } 
    document.dentaku.display.value += btn.value;//電卓の液晶画面部分に現在の数式にボタンの値を追加する役割を果たしています。
    document.dentaku.multi_btn.value = "×";//乗算ボタン（"×"）の値を "×" に設定しています。
    document.dentaku.div_btn.value = "÷";//除算ボタン（"÷"）の値を "÷" に設定しています。
  }
}