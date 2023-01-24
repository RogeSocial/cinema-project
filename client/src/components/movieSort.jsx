export const sortAlpha = (movieX) => {
    return movieX.sort((a,b)=>{
        if (a.title < b.title) {
            return -1;

        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    })
}
export const reverseAlpha = (movieX) => {
    return movieX.sort((a,b)=>{
        if (a.title > b.title) {
            return -1;

        }
        if (a.title < b.title) {
            return 1;
        }
        return 0;
    })
}
