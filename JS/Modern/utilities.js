export function circumference(radius){
    return 2 * Math.PI * radius;
}

export function area(radius){
    return Math.PI * (radius * radius);
}

export function surface(radius){
    return 4 * Math.PI * (radius * radius)
}

export function volume(radius){
    return (4/3) * Math.PI * (radius * radius * radius);
}