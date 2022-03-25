import './Lab3.css';

import {useCallback, useEffect, useMemo, useState} from "react";

function Lab3() {
    const q1 = useMemo(() => 1, []);
    const data = useMemo(() => [47, 1, 1, 2, 1, 2], []);
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

    const calculateResult = useCallback(() => {
        const p = [1, q1]
        const Q = [0, 1]
        data.forEach((el) => {
            p.push(p[p.length - 1] * el + p[p.length - 2]);
            Q.push(Q[Q.length - 1] * el + Q[Q.length - 2]);
        })
        setResult({
            p,
            Q,
            fraction: fraction(p[p.length - 1], Q[Q.length - 1]),
            chainFraction: chainFraction([q1, ...data])
        })
    }, [data, q1, fraction, chainFraction]);

    useEffect(() => {
        calculateResult();
    }, [calculateResult]);

    return (
        <div className="Lab3">
            <h1>Лабораторна робота №3</h1>
            <p>[{q1}; {data.join(', ')}]</p>
            <div className="Lab3_result">
                <table>
                    <thead>
                    <tr>
                        <th>i</th>
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((el) => <th key={el}>{el}</th>)}
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
            </div>
        </div>
    );
}

export default Lab3;
