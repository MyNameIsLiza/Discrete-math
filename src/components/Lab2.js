import './Lab2.css';

import {useCallback, useState} from "react";

function Lab2() {
    const [data, setData] = useState({x1: '', x2: '', x3: '', x4: ''});

    const calculateResult = useCallback(() => {
        if (!Object.values(data).includes('')) {
            const a1 = data.x2 - (data.x1 - 1) * data.x3;
            const n = (data.x4 - a1) / data.x3 + 1;
            if (!Number.isInteger(n) || n <= 0) {
                return 'Упс! Рішення не існує'
            }
            return `n = ${n}`;
        }
    }, [data]);
    return (
        <div className="Lab2">
            <h1>Лабораторна робота №2</h1>
            <p>Дано арифметичну прогресію a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>,..., a<sub>n</sub>,... .</p>
            <p>Відомо, що a<sub>x<sub>1</sub></sub>= x<sub>2</sub>, d = x<sub>3</sub>, a<sub>n</sub>= x<sub>4</sub>.
                Знайти n.</p>
            <form className='Form'>
                {Object.entries(data).map(([key, value]) =>
                    <div>{key}=<input onInput={(e) => {
                        if (key === 'x1') {
                            e.target.value = e.target.value.replace(/\D/g, value);
                        }
                    }} key={key} placeholder={key} type="number"
                                      value={value}
                                      onChange={(e) => {
                                          setData({...data, [key]: e.target.value});
                                      }}/></div>)}
            </form>
            <div className="Lab2_result">
                {!Object.values(data).includes('') ?
                    <p>a<sub>{data.x1}</sub>= {data.x2}, d = {data.x3}, a<sub>n</sub>= {data.x4}</p> : ''}
                {calculateResult()}
            </div>
        </div>
    );
}

export default Lab2;
