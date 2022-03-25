import './Lab4.css';

import {useCallback, useMemo, useState} from "react";

export default function Lab4() {
    const data = useMemo(() => [[0, 0], [0, 1], [1, 0], [1, 1]], []);

    return (
        <div className="Lab4">
            <h1>Лабораторна робота №4</h1>
            <p>Задано значення істинності висловлюється p та q. Знайти значення істинності кон’юнкції, диз’юнкції,
                альтернативного «або», імплікації й еквівалентності цих висловлювань.</p>
            <div className="Lab4_result">
                <table>
                    <thead>
                    <tr>
                        <th>p</th>
                        <th>q</th>
                        <th>p ∧ q</th>
                        <th>p ∨ q</th>
                        <th>p ⊕ q</th>
                        <th>p → q</th>
                        <th>p ⟷ q</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(([p, q]) => <tr key={p + '' + q}>
                        <td>{p}</td>
                        <td>{q}</td>
                        <td>{p && q}</td>
                        <td>{p || q}</td>
                        <td>{+!(p && q)}</td>
                        <td>{+(p && !q)}</td>
                        <td>{+(p === q)}</td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

