function lock() {
    sticks = [

        [
            [4, 9, 7, 5],
            [3, 8, 4, 7],
            [3, 7, 9, 8],
            [9, 4, 8, 5]
        ],
        [
            [9, 2, 4, 7],
            [7, 5, 9, 6],
            [6, 4, 2, 8],
            [2, 9, 5, 7]
        ],
        [
            [7, 8, 6, 3],
            [2, 7, 3, 9],
            [5, 6, 8, 7],
            [9, 3, 7, 6]
        ],
        [
            [8, 3, 5, 7],
            [4, 6, 2, 8],
            [7, 2, 6, 9],
            [4, 5, 3, 9]
        ]
    ];

    let out = [];

    while(sticks.length > 0) {
        let stick_index = sticks.splice(Math.floor(Math.random() * sticks.length), 1);
        out.push(stick_index[0][Math.floor(Math.random() * 4)]);
    }

    let operands = [];

    for (let i = 0; i < out.length; i++) {
        operands.push(out[3][i] + (out[2][i] * 10) + (out[1][i] * 100) + (out[0][i] * 1000));
    }

    //secret = 20000 + (out[0][2] * 1000) + (out[1][2] * 100) + (out[2][2] * 10) + (out[3][2] - 2);
    secret = operands[0] + operands[1] + operands[2] + operands[3];

    let display = "<table>";

    for (let row = 0; row < out[0].length; row++){
        display += "<tr>"
        for (let col = 0; col < out.length; col++){
            display += "<td>"+out[col][row]+"</td>"
        }
        display += "</tr>"
    }
    display += "</table>";

    document.getElementById("container").innerHTML = display;

    let green = "#80EE80";
    let red = "#EE8080";

    document.controller.in.style ="background-color:" + red;

    document.controller.addEventListener("keyup", function(){
        if (document.controller.in.value == secret) {
            document.controller.in.style = "background-color:" + green;
            clearInterval(time_lock);
            document.getElementById("message").innerHTML = "Access<br />Granted";
        }
        else {
            document.controller.in.style = "background-color:" + red;
        }
    });
}
lock;
time_lock = setInterval(lock, 5000);