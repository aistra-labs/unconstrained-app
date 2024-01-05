function getSpentTime(str) {
    return Number(str.match(/\(([^)]+)\)/)[1]) * 4;
}

function getTasksForEpic() {
    let t = document.querySelectorAll('[data-issue-key*="DT"]');
    let dates = document.getElementsByClassName('created');
    let resText = "";
    const res = [];
    let k = 0;
    for (let i = 2; i < t.length; i += 3) {
        const date = dates[k++];
        const rowData = [(date?.textContent ? date.textContent : ''), t[i].href, t[i].textContent.split('(')[0], getSpentTime(t[i].textContent)];
        res.push(rowData);
    }
    res.forEach(el => resText = resText + el.join('\t') + '\n');
    navigator.clipboard.writeText(resText)
    return resText;
}
let res = getTasksForEpic();
console.log(res);
