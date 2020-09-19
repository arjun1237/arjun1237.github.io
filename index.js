const initiation = () => {
    let logo = document.getElementById('main-logo')
    logo.addEventListener('click', scrollTop)
    slidingWindow()
    window.addEventListener('scroll', navbarColorChange)
}

const navbarColorChange = () => {
    
}

const slidingWindow = async () => {
    let outs = document.getElementsByClassName('in2')
    let ins = document.getElementsByClassName('out1')
    let len1 = ins.length

    await setTimeout( async() => {
        for(let i=outs.length-1; i>=0; i--){
            await setTimeout(() => {
                outs[outs.length-1].className = 'out2'
            }, i * 100)
        }
    }, 1000)

    await setTimeout(async () => {
        let len = ins.length
        for(let j=0; j<len; j++){
            await setTimeout(() => {
                ins[0].className = 'in1'
            }, j * 100)
        }
    }, len1*100 + 1500)
}


const scrollTop = () => {
    window.scrollTo(0,0)
}



window.addEventListener('load', initiation)