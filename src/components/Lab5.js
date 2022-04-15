//import './Lab5.css';
import {useCallback, useState} from "react";

export default function Lab5() {
    const [students, setStudents] = useState([
        {name: 'Бараболя В.', sex: false, status: 'Ботан🤓', mark: 5},
        {name: 'Башлій А.', sex: false, status: 'Гальорка👑', mark: 2},
        {name: 'Беребелюх Ю.', sex: true, status: 'ДЕНС💃', mark: 4},
        {name: 'Білик А.', sex: true, status: 'ДЕНС💃', mark: 2},
        {name: 'Бортник В.', sex: false, status: 'Гальорка👑', mark: 2},
        {name: 'Гурний Р.', sex: false, status: 'Ботан🤓', mark: 4},
        {name: 'Зейлик Р.', sex: false, status: 'Ботан🤓', mark: 5},
        {name: 'Кравчук І.', sex: false, status: 'Ботан🤓', mark: 5},
        {name: 'Кулачук М.', sex: true, status: 'Шапітовка⚽', mark: 4},
        {name: 'Кулачук О.', sex: true, status: 'Шапітовка⚽', mark: 4},
        {name: 'Михайловський І.', sex: false, status: 'Гальорка👑', mark: 2},
        {name: 'Муштин О.', sex: false, status: 'Шапітовка⚽', mark: 4},
        {name: 'Пляцик О.', sex: false, status: 'Ботан🤓', mark: 4},
        {name: 'Рідкодубська О.', sex: true, status: 'К-ПОП🎤', mark: 2},
        {name: 'Собчук А.', sex: false, status: '!ЗОЖ🏋', mark: 2},
        {name: 'Фасуляк Д.', sex: false, status: 'Ботан🤓', mark: 4},
        {name: 'Хлопот А.', sex: false, status: 'Гальорка👑', mark: 2},
        {name: 'Хуршудян А.', sex: true, status: 'В мене лапки👺', mark: 2},
        {name: 'Цапик Є.', sex: true, status: 'Ботан🤓', mark: 5},
        {name: 'Цегельник О.', sex: false, status: 'Ботан🤓', mark: 5},
        {name: 'Шимків М.', sex: false, status: 'Гальорка👑', mark: 2},
        {name: 'Яроцька А.', sex: true, status: '!ЗОЖ🏋', mark: 2},
    ]);
    const [vs, setVs] = useState([{
        name: 'sex', f: () => {
            return {'Королева👸':students.filter((el) => el.sex), 'Півень🐓':students.filter((el) => !el.sex)}
        }
    }, {
        name: 'status', f: () => {
            const arrays = {};
            students.forEach((el) => {
                if (arrays[el.status]) {
                    arrays[el.status].push(el);
                } else {
                    arrays[el.status] = [el];
                }
            })
            return arrays;
        }
    }, {
        name: 'mark', f: () => {
            const arrays = {};
            students.forEach((el) => {
                if (arrays[el.mark]) {
                    arrays[el.mark].push(el);
                } else {
                    arrays[el.mark] = [el];
                }
            });
            return arrays;
        }
    }
    ]);
    const [v, setV] = useState(vs[0]);

    const [vStudents, setVStudents] = useState(v.f());

    const vCheck = useCallback((el1, el2) => {
        let result = 0;
        Object.entries(vStudents).map(([key, arr]) => {
            if (arr.filter((el) => el.name === el1.name).length && arr.filter((el) => el.name === el2.name).length) {
                result = key;
                return result;
            }
        })
        return result;
    }, [vStudents]);
    const getColor = useCallback((index)=>{
        switch (index) {
            case 'Королева👸': return 'lightpink';
            case 'Півень🐓': return 'lightblue';
            case '2': return 'darksalmon';
            case '3': return 'lightcoral';
            case '4': return 'lightblue';
            case '5': return 'lightgreen';
            case 'Ботан🤓': return 'lightgreen';
            case 'Гальорка👑': return 'violet';
            case 'В мене лапки👺': return 'gold';
            case 'Шапітовка⚽': return 'lightblue';
            case '!ЗОЖ🏋': return 'bisque';
            case 'К-ПОП🎤': return 'aquamarine';
            case 'ДЕНС💃': return 'lightcoral';
            default: return 'white';
        }
    },[])

    return (
        <div className="Lab5">
            <h1>Лабораторна робота №5</h1>
            <p>Задайте три відношення еквівалентності на множині студентів вашої академічної групи. Визначте класи
                еквівалентності для цих відношень еквівалентності. Побудуйте відношення у вигляді таблиці</p>
            <select value={v.name} onChange={(e) => {
                console.log(e.target.value)
                setV(vs.find(function (el) {
                    return el.name === e.target.value;
                }));
            }}>
                <option value="sex">Розбиття на відношення відносно статі</option>
                <option value="status">Розбиття на відношення відносно статусу</option>
                <option value="mark">Розбиття на відношення відносно оцінок</option>
            </select>
            <div className="Lab5_result">
                <table>
                    <thead>
                    <th key=''/>
                    {students.map((el) => <th key={el.name}>{el.name}</th>)}
                    </thead>
                    <tbody>
                    {students.map((el) => <tr key={el.name}>
                        <td>{el.name}</td>
                        {students.map((col) =>{
                            const i = vCheck(el, col);
                            return <td bgcolor={getColor(i)}>{i}</td>
                        })}
                    </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

