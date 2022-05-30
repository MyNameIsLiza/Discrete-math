import {useCallback, useEffect, useState} from "react";
import {Graphviz} from 'graphviz-react';

export default function Lab6() {
    const [graph, setGraph] = useState('digraph {a -> b; c;d -> c;a -> d}');
    const [adj, setAdj] = useState({
        1: {name: 1, neighbors: [2, 3, 4], visited: false},
        2: {name: 2, neighbors: [1, 5], visited: false},
        3: {name: 3, neighbors: [1, 5, 6], visited: false},
        4: {name: 4, neighbors: [1, 6, 7], visited: false},
        5: {name: 5, neighbors: [2, 3, 8, 9], visited: false},
        6: {name: 6, neighbors: [3, 4, 8, 10], visited: false},
        7: {name: 7, neighbors: [4, 9, 10], visited: false},
        8: {name: 8, neighbors: [5, 6, 11], visited: false},
        9: {name: 9, neighbors: [5, 7, 11], visited: false},
        10: {name: 10, neighbors: [6, 7, 11], visited: false},
        11: {name: 11, neighbors: [8, 9, 10], visited: false},
    });
    const [start, setStart] = useState(1);

    const bfs = useCallback(() => {
        let queue = [];
        let transitions = '';
        queue.push(adj[start]);
        adj[start].visited = true;
        while (queue.length > 0) {
            let v = queue.shift();
            for (let neighborI of adj[v.name].neighbors) {
                if (!adj[neighborI].visited) {
                    transitions += `${v.name} -> ${adj[neighborI].name};`;
                    queue.push(adj[neighborI]);
                    const t = queue.map((el) => el.name);
                    console.log(t.join(', '));
                    adj[neighborI].visited = true;
                    if (!Object.entries(adj).find((el)=>!el[1].visited)) {
                        setGraph(`digraph {${transitions}}`);
                        return true
                    }
                }
            }
        }
        return false
    }, []);

    useEffect(()=>{
        bfs();
    },[])

    return (
        <div className="Lab6">
            <h1>Лабораторна робота №6</h1>
            <p>Знайти обхід простого графа пошуком в ширину. Побудувати такий граф.</p>
            <img src="/images/Lab6_graph.png" alt="graph"/>
            <div className="Lab6_result">
                <Graphviz dot={graph}/>
            </div>
        </div>
    );
};

