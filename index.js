window.addEventListener('load', ballBounce)

const FPS = 30
var bs = 2;
var bx, by;
var xv, yv;
var canvas, context;
let limit = 200

function ballBounce(){
    canvas = document.getElementById('ball')
    context = canvas.getContext('2d')

    let a = setInterval(() => {
        update()
    }, 1000 / FPS)

    bxs = randoms(canvas.width)
    bys = randoms(canvas.height)

    xvs = randomVels(10, 20)
    yvs = randomVels(10, 20)
    
    function update(){

        bxs = bxs.map((x, i) => x += xvs[i])
        bys = bys.map((x, i) => x += yvs[i])

        xvs = xvs.map((x, i) => {
            if((bxs[i] - bs / 2 < 0 && x < 0) || (bxs[i] + bs / 2 > canvas.width && x > 0)){
                return x = - x
            }
            return x
        })

        yvs = yvs.map((x, i) => {
            if((bys[i] - bs / 2 < 0 && x < 0) || (bys[i] + bs / 2 > canvas.height && x > 0)){
                return x = - x
            }
            return x
        })

        context.clearRect(0, 0, canvas.width, canvas.height);

        for(let i=0; i<limit; i++){
            context.beginPath();
            context.arc(bxs[i] - bs / 2, bys[i] - bs / 2, bs, 0, 2 * Math.PI)
            context.fillStyle = "#ffffff36";
            context.fill();
        }
    }
}

function randoms(size){
    let out = []
    for(let i=0; i<limit; i++){
        out.push(size * Math.random())
    }
    return out
}

function randomVels(add, start){
    let out = []
    for(let i=0; i<limit; i++){
        let temp = Math.floor(Math.random() * add + start) / FPS
        if(Math.floor(Math.random() * 2) === 0){
            temp = -temp
        }
        out.push(temp)
    }
    return out
}