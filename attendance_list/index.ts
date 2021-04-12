//recebe lista json com nomes
//liste os nomes dos particicipantes

type Person = {
    name: string,
    confirmed: boolean
}

const list : Person[] = [
    {
        "name": "Fulano",
        "confirmed" : true
    },
    {
        "name": "Ciclano",
        "confirmed" : false
    },
    {
        "name": "Beutrano",
        "confirmed" : true
    }
];

const peopleConfirmed = list.filter(l => l.confirmed === true).map(peopleConfirmed => peopleConfirmed.name);

peopleConfirmed.forEach(function (item) {
    console.log(`- ${item}`);
});
