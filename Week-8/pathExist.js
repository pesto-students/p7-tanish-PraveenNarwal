
 var validPath = function(n, edges, source, destination) {
    let adjList = new Array(n)
    for(let i=0 ;i<adjList.length;i++) adjList[i]=i
    
    const find=( node)=> {
        while (node != adjList[node]) {
            node = adjList[node];
        }
        return node;
    }
		
    const union=( node1,  node2)=>{
        rootNode1 = find(node1);
        rootNode2 = find(node2);
        if (rootNode1 != rootNode2) {
            adjList[rootNode2] = rootNode1;
        }
    }
    for(let i=0;i<edges.length;i++){
        union(edges[i][0],edges[i][1])
    }
    let rootA =-1, rootB =-1
    while(adjList[source]!=source){
        source=adjList[source]
    }
    rootA=source
    while(adjList[destination]!=destination){
        destination=adjList[destination]
    }
    rootB=destination
    return rootB == rootA
};

    