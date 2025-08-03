let transaction = '';
let totalElement;
let transactionElement;

window.onload = () => {
    totalElement = document.querySelector('.total');
    transactionElement = document.querySelector('.transaction');
};

function calculate(input) {
    if (input === 'AC') {
        transaction = '';
        totalElement.style.display = 'none';
        document.getElementById("mathTip").innerText = '';
    } else if (input === '=') {
        try {
            let result = eval(transaction);
            totalElement.innerText = result;
            totalElement.style.display = 'block';

            const tips = [
                "Fun fact: bading k",
                "Fun Fact: si bbm ay backburner ni sara",
                "Fun fact: wag po ateh",
                "Fun fact: teh barang ka te barang ka",
                "Fun fact: dadih robbbb guYz mAy pinaPakitAh SiyaH SaH AkihN"
            ];

            let tip = tips[Math.floor(Math.random() * tips.length)];
            alert(tip);

        } catch {
            totalElement.innerText = 'Error';
            totalElement.style.display = 'block';
        }
    } else if (input === 'X') {
        transaction = transaction.slice(0, -1);
        totalElement.style.display = 'none';
        document.getElementById("mathTip").innerText = '';
    } else {
        transaction += input;
        totalElement.style.display = 'none';
        document.getElementById("mathTip").innerText = '';
    }

    transactionElement.innerText = transaction;
}
    