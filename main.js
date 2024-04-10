import { random, shuffle } from "./randomize.js"
let qw_div = document.querySelector(".qw")
let answ_div = document.querySelectorAll(".answ")
let front = document.querySelector(".front")
function move_cube(){
    anime({
        targets:".cube",
        rotateY:0,
        rotateX:0,
        duration: 500,
        easing: 'linear'
    })
   
}

for(let ans of answ_div){
    ans.addEventListener("click",function(){
        if( +this.innerHTML == qw_obj.cor){
            this.style.background = "#00ff00"
            
        } else{
            this.style.background = "#ff0000"
        }
        anime ({
            targets: ans,
            background:"#281331",
            duration: 1000,
            delay: 1000,
            easing: 'linear'

        }).finished.then(function(){
            qw_obj.display()
        move_cube()})
    })
}


class Question{
    constructor(){
        this.qw = NaN
        this.cor = NaN
        this.count_correct = 0
        this.count_qw =0
        this.answers = NaN
        this.options = ["-","+","*","/"]
        this.display()
    }

    display(){
        this.new_qw()
        qw_div.innerHTML = this.qw
        shuffle(this.answers)
        for(let i=0; i <answ_div.length; i++){
            answ_div[i].innerHTML = this.answers[i]
        }
    }


    new_qw(){
        let n = random(0,4)
        let opt = this.options[n]
        let n1 = random(0,101)
        let n2 = random(0,101)
        switch (opt){
            case "-":
                this.cor = n1 - n2
                break
            case "+":
                this.cor = n1 + n2
                break
            case "*":
                this.cor = n1 * n2
                break
            case "/":
                n2 = random(1,101)
                while(n1%n2 != 0){
                    n2 = random(1,101)
                }
                this.cor = n1 / n2
                break
        }
        this.qw = `${n1} ${opt} ${n2}`
        this.answers = [this.cor]
        for(let i=0;i<4;i++){
            let w = random((this.cor-15),(this.cor+15))
            this.answers.push(w)
        }
}
}
let qw_obj = new Question()