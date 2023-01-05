import express from 'express';

const app = express();

const holidays = [
    { date: "1/1/2023", name: "Confraternização mundial" },
    { date: "1/3/2023", name: "Carnaval" },
    { date: "4/17/2023", name: "Páscoa" },
    { date: "4/21/2023", name: "Tiradentes" },
    { date: "5/1/2023", name: "Dia do trabalho" },
    { date: "6/16/2023", name: "Corpus Christi" },
    { date: "9/7/2023", name: "Independência do Brasil" },
    { date: "10/12/2023", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2023", name: "Finados" },
    { date: "11/15/2023", name: "Proclamação da República" },
    { date: "12/25/2023", name: "Natal" }
  ];

app.get("/holidays", (req, res) => {
    res.send(`
    <h1>Feriados 2023</h1>
    ${holidays.map(holiday => {
        return `<p>${holiday.date} - ${holiday.name}</p>`;
    }).join('')}
    `);
});

app.get("/is-today-holiday", (req, res) => {
    const today = new Date();
    const holi = holidays.map(holiday => {
        if(today.toLocaleDateString() === holiday.date){
            return holiday.name;
        }
    }).join('-');
    res.send(`
    <h2>Dia ${today.toLocaleDateString()}</h1>
    ${holi !== '' ? `Sim, hoje é ${holi}` : `Não, hoje não é feriado`}
    `);
});
app.listen(4000);