import {useCallback, useEffect, useState} from "react";
import {Graphviz} from "graphviz-react";

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor(root = null) {
        this.root = root
    }

    remove(value) {
        this.root = this.removeNode(this.root, value)
    }

    removeNode(current, value) {
        if (current === null) {
            return current;
        }
        if (value === current.value) {
            if (current.left === null && current.right === null) {
                return null;
            } else if (current.left === null) {
                return current.right;
            } else if (current.right === null) {
                return current.left;
            } else {
                let tempNode = this.kthSmallestNode(current.right)
                current.value = tempNode.value;
                current.right = this.removeNode(current.right, tempNode.value);
                return current;
            }
        } else if (value < current.value) {
            current.left = this.removeNode(current.left, value);
            return current;
        } else {
            current.right = this.removeNode(current.right, value);
            return current;
        }
    }

    kthSmallestNode(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }
}

function returnDefaultTree() {
    const defaultTree = new BinarySearchTree(new Node('m'));
    defaultTree.root.left = new Node('f');
    defaultTree.root.right = new Node('u');
    defaultTree.root.left.left = new Node('c');
    defaultTree.root.left.right = new Node('h');
    defaultTree.root.left.left.left = new Node('a');
    defaultTree.root.left.left.right = new Node('d');
    defaultTree.root.left.right.left = new Node('g');
    defaultTree.root.left.right.right = new Node('k');
    defaultTree.root.right.left = new Node('r');
    defaultTree.root.right.right = new Node('w');
    defaultTree.root.right.left.left = new Node('p');
    defaultTree.root.right.left.right = new Node('t');
    defaultTree.root.right.right.left = new Node('v');
    defaultTree.root.right.right.right = new Node('z');
    return defaultTree;
}


export default function Lab7() {
    const [sequence] = useState(['m', 'f', 'u', 'c', 'h', 'r', 'w', 'a', 'd', 'g', 'k', 'p', 't', 'v', 'z']);
    const [tree, setTree] = useState(returnDefaultTree());

    const formString = useCallback((root) => {
        if (!root.left && !root.right) {
            return '';
        }
        if (!root.left) {
            return `${root.value}->${root.right.value};${formString(root.right)}`;
        }
        if (!root.right) {
            return `${root.value}->${root.left.value};${formString(root.left)}`;
        }
        return `${root.value}->${root.left.value};${root.value}->${root.right.value};${formString(root.right)}${formString(root.left)}`
    }, []);
    const [dot, setDot] = useState('digraph {}');
    const formDigraph = useCallback(() => {
        let str = 'digraph {';
        str += formString(tree.root);
        str += '}';
        setDot(str);
        return str;
    }, [tree, formString]);


    useEffect(() => {
        formDigraph();
    }, [tree, formDigraph])

    return (
        <div className="Lab7">
            <h1>Лабораторна робота №7</h1>
            <p>Задайте три відношення еквівалентності на множині студентів вашої академічної групи. Визначте класи
                еквівалентності для цих відношень еквівалентності. Побудуйте відношення у вигляді таблиці</p>
            <img src="/images/Lab7_tree.png" alt=""/><br/>
            {sequence.map((el) => <button key={el} onClick={(e) => {
                tree.remove(el);
                formDigraph();
            }}>Видалити {el}</button>)}
            <button onClick={(e) => {
                setTree(returnDefaultTree());
            }}>Повернути початкове дерево
            </button>
            <div className="Lab7_result">
                <Graphviz dot={dot}/>
            </div>
        </div>
    );
}

