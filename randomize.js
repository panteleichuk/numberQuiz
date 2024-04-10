export function random(min, max){
    let num = Math.random()
    num = num * (max-min) + min
    return Math.floor(num)

}
export function shuffle(arr){
    let j = 0
    let n
    for ( let i=0; i < arr.length; i+=1){
        j = random(0,arr.length-1)
        n = arr[i]
        arr[i] = arr[j] 
        arr[j]  = n
    }
}
