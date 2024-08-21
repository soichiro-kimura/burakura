document.addEventListener("DOMContentLoaded", function() {
    // 恐怖画像と背景テキストの要素を作成
    const scareImage = document.createElement('img');
    scareImage.src = 'heheheha-laugh.gif';
    scareImage.style.position = 'fixed';
    scareImage.style.top = '50%';
    scareImage.style.left = '50%';
    scareImage.style.transform = 'translate(-50%, -50%) scale(0)';
    scareImage.style.transition = 'transform 0.5s ease-in-out';
    scareImage.style.zIndex = '9999';
    document.body.appendChild(scareImage);

    const content = document.querySelector('.content');
    content.style.transition = 'transform 0.1s ease-in-out';

    let triggered = false;
    let timer;

    window.addEventListener('scroll', function() {
        // ページの最下部から30px手前までスクロールした場合
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 30 && !triggered) {
            triggered = true;
            timer = setTimeout(function() {
                // 恐怖画像をズームイン
                scareImage.style.transform = 'translate(-50%, -50%) scale(1)';

                // 背景テキストをガタガタさせる
                const shakeInterval = setInterval(function() {
                    const x = Math.random() * 60 - 30;
                    const y = Math.random() * 60 - 30;
                    content.style.transform = `translate(${x}px, ${y}px)`;
                }, 50);

                // 3秒後にHTMLを消し、新しい文書を表示
                setTimeout(function() {
                    clearInterval(shakeInterval);  // 背景テキストのガタガタを停止
                    document.body.innerHTML = ''; // 既存のHTMLを削除
                    const newContent = document.createElement('div'); // 新しい文書の作成
                    newContent.innerHTML = `
                        <p style="text-align: center; font-size: 20px; margin-top: 70px;">
                            良かった。<br>あなたは最後まで読んでくれた。<br>読んでいる間に魂と魂は繋がった。<br>
                            すぐに迎えに行くから待っていてね。<br>本当、すぐだから。<br><br>コッチにトモダチができるのが本当に嬉しい。<br><br>
                            これを3人以上に回したら助けてあげても良いけど…<br>トモダチにそんなヒドイこと、多分しないよね。<br><br>
                            コッチに来てくれるよね。<br>
                        </p>
                        <p id="mawasu" style="font-size: 20px; color: rgb(242, 120, 76); text-align: center;">トモダチに回す</p>
                        <p id="mawasan" style="font-size: 20px; color: rgb(242, 120, 76); text-align: center;">トモダチに回さない</p>`;
                    document.body.appendChild(newContent);

                    // ボタンが押されたときの処理を追加
                    document.getElementById('mawasu').onclick = function() {
                        document.body.innerHTML = '<p style="text-align: center; font-size: 35px; margin-top: 70px; cursor: pointer;" class="txt">お前やばいねん。<br>このままじゃ絶対にあかんねん。<br></p>';
                    };

                    document.getElementById('mawasan').onclick = function() {
                        document.body.innerHTML = '<p style="text-align: center; font-size: 35px; margin-top: 70px; cursor: pointer;">お前しょうもな。</p>';
                    };

                }, 2000);  // 2秒後に発動
            }, 1000);  // 1秒後に発動
        }
    });

    window.addEventListener('scroll', function() {
        // 最下部から30px以上戻ったらタイマーをクリア
        if (window.innerHeight + window.pageYOffset < document.body.offsetHeight - 30 && triggered) {
            triggered = false;
            clearTimeout(timer);
        }
    });

    const burakura = document.getElementById('burakura');
    burakura.onclick = function() {
        window.alert('そんなもんあるわけないやろ、ハゲ');
    }
});