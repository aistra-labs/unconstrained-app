function getSpentTime(str) {
    return Number(str.match(/\(([^)]+)\)/)[1]) * 4;
}

function getTasksForEpic() {
    let t = document.querySelectorAll('[data-issue-key*="GEN"]');
    let resText = "";
    // const res = [];
    for (let i = 2; i < t.length; i += 3) {
        // res.push([t[i].textContent, getSpentTime(t[i].textContent)]);
        resText += t[i].textContent.split('(')[0] + '\t' + getSpentTime(t[i].textContent) + '\n';
    }
    navigator.clipboard.writeText(resText)
    // return res;
    return resText;
}
let res = getTasksForEpic();
console.log(res);
