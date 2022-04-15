import './Lab3.css';

import {useCallback, useEffect, useState} from "react";

export default function Lab3() {
    const [q1, setQ1] = useState(-3);
    const [data, setData] = useState([1, 1, 6, 2, 8]);
    const [result, setResult] = useState({p: [], Q: []});

    const fraction = useCallback((a, b) => {
        return <div className='fraction'>
            <div className='bottom-border'>{a}</div>
            <div>{b}</div>
        </div>
    }, []);

    const chainFraction = useCallback((q) => {
        let result = <div className='flex'><span>{q[q.length - 2]} + </span>{fraction(1, q[q.length - 1])}</div>;
        for (let i = q.length - 3; i >= 0; i -= 1) {
            result = <div className='flex'><span>{q[i]} + </span>{fraction(1, result)}</div>;
        }
        return result;
    }, [fraction]);

    const equation = useCallback((p, Q) => {
        const a = p[p.length - 1];
        const b = Q[Q.length - 1];
        let x = p[p.length - 2];
        let y = Q[Q.length - 2];
        if (a * x - b * y === 1) {
            y = -y;
        } else if (-a * x + b * y === 1) {
            x = -x;
        } else if (a * y - b * x === 1) {
            const t = y;
            y = -x;
            x = t;

        } else if (-a * y + b * x === 1) {
            const t = y;
            y = x;
            x = -t;
        } else if (a * y + b * x === 1) {
            const t = y;
            y = x;
            x = t;
        }
        return <div>a * x + b * y = 1<br/>
            <div>{a} * {x} + {b} * {y} = {a * x + b * y}</div>
        </div>;
    }, []);

    const calculateResult = useCallback(() => {
        const p = [1, +q1];
        const Q = [0, 1];
        data.forEach((el) => {
            p.push(+p[p.length - 1] * +el + p[p.length - 2]);
            Q.push(+Q[Q.length - 1] * +el + Q[Q.length - 2]);
        })
        setResult({
            p,
            Q,
            fraction: fraction(p[p.length - 1], Q[Q.length - 1]),
            chainFraction: chainFraction([q1, ...data]),
            equation: equation(p, Q)
        });
    }, [data, q1, fraction, chainFraction, equation]);

    useEffect(() => {
        calculateResult();
    }, [calculateResult]);

    return (
        <div className="Lab3">
            <h1>Лабораторна робота №3</h1>
            <input type="number" value={q1} onChange={(e) => {
                setQ1(e.target.value);
            }}/>
            <input type="text" value={data.join(', ')} onChange={(e) => {
                const temp = e.target.value.split(', ');
                setData(temp);
            }}/>
            <p>[{q1}; {data.join(', ')}]</p>
            <div className="Lab3_result">
                <table>
                    <thead>
                    <tr>
                        <th>i</th>
                        {[q1, ...data, ''].map((el, index) => <th key={index}>{index}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>q<sub>i</sub></td>
                        <td/>
                        <td>{q1}</td>
                        {data?.map((el, index) => <td key={index}>{el}</td>)}
                    </tr>
                    <tr>
                        <td>P<sub>i</sub></td>
                        {result?.p?.map((el, index) => <td key={index}>{el}</td>)}
                    </tr>
                    <tr>
                        <td>Q<sub>i</sub></td>
                        {result?.Q?.map((el, index) => <td key={index}>{el}</td>)}
                    </tr>
                    </tbody>
                </table>
                {result.fraction}
                {result.chainFraction}
                {result.equation}
            </div>
        </div>
    );
}
