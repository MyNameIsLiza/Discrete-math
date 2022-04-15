import './Lab4.css';

import {useState} from "react";

export default function Lab4() {
    const [p, setP] = useState(false);
    const [q, setQ] = useState(false);

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
                    <tr>
                        <td><input type="checkbox" checked={p} onChange={(e) => {
                            setP(!!e.target.checked);
                        }}/>{+p}</td>
                        <td><input type="checkbox" checked={q} onChange={(e) => {
                            setQ(!!e.target.checked);
                        }}/>{+q}</td>
                        <td>{+(p && q)}</td>
                        <td>{+(p || q)}</td>
                        <td>{+!(p && q)}</td>
                        <td>{+(p && !q)}</td>
                        <td>{+(p === q)}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
