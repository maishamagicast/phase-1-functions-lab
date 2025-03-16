// Code your solution in this file!
function distanceFromHqInBlocks(x){
    if (x<42)
    return ((x-42)*-1);
    else
    return x-42 ;

}
function distanceFromHqInFeet(x){
    distanceFromHqInBlocks(x);
    return distanceFromHqInBlocks(x)*264;
}

function distanceTravelledInFeet(start,end){
    if (start>end)
        return ((end-start)*-1)* 264;
    
    return(end-start)*264;
}

function calculatesFarePrice(start, end){
    let distance =distanceTravelledInFeet(start,end);
    if (distance <=400)
        return 0;
    else if (distance >400 && distance<=2000)
        return (distance-400)*0.02;
    else if (distance >2000 && distance <=2500)
        return 25;
    else if (distance>=2500)
        return 'cannot travel that far';
}