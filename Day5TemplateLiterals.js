function sides(literals, ...expressions) {
    const [x,y] = expressions;
    const s1 = (y + Math.sqrt(y*y-16*x))/4
    const s2 = (y - Math.sqrt(y*y-16*x))/4

    return [s1,s2].sort();
}
