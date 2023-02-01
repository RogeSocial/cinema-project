
function scrape(){

    let listOfShows = document.querySelectorAll('.AtIvjk2YjzXSULT1cmVx')

    let shows = []

    for(let show of listOfShows){
        let nodes = show.querySelectorAll('*')
        let showData = {
            // innerHtml: show.innerHTML,
            // nodes: []
        }
        let i = 0
        for(let node of nodes){
            /*showData.nodes[node.tagName + '_' + (node.className || node.id || i)] = {
                class: node.className,
                value: node.value,
                href: node.href,
                src: node.src,
                text: node.text,
                textContent: node.textContent
            }*/      
            if(node.className.includes('r593Wuo4miYix9siDdTP')){
                showData.date = node.querySelector('div').textContent
            }
            if(node.className.includes('_5CQoAbgUFZI3p33kRVk')){
                showData.name = node.textContent
            }
            if(node.className.includes('bqB5zhZmpkzqQcKohzfB')){
                showData.venue = node.textContent
            }          
            if(node.tagName === 'A' && node.href && node.text){
                // showData.description = node.text
                showData.href = node.href
            } 
            if(node.tagName === 'IMG' && node.src && node.src.includes('.jpeg')){
                showData.image = node.src
            } 
            i++
        }
        shows.push(showData)
    }

    return shows

}
