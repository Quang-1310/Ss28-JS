let students=[
    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature : 7 } },
    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature : 5} },
    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature : 9 } }
];

let filterPoint = students.filter((value, index) => {
    let point = (value.scores.math + value.scores.english + value.scores.literature) / 3;
    return point >= 8;
});

let mapPoint = filterPoint.map((value) => {
    let point = (value.scores.math + value.scores.english + value.scores.literature) / 3;
    if(point >= 8){
        return { name: value.name, scores: value.scores };
    }
});

console.log(mapPoint);