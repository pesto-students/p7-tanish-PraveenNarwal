
 var allPathsSourceTarget = function(graph) {
    const paths = []

    const dfs = (node, graph, stack) => {

        if (node === graph.length - 1) {
            const path = stack.slice().concat(node)
            paths.push(path)
            return 
        }

        stack.push(node)

        for (const vertex of graph[node]) dfs(vertex, graph, stack)

        stack.pop()
    }

    dfs(0, graph, [])

    return paths
};

// Time complexity: O(n)

// Space complexity: O(n)