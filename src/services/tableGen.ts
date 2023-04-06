


function tableHeaders(...rest: any): any {
    const table_header = document.createElement('tr');
    table_header.classList.add('table_header');

    rest.forEach(td => {
        let name = td[0]
        let width = td[1]
        let th = document.createElement('th');
        th.textContent = name;
        th.style.width = `${width}%`
        table_header.appendChild(th)
    })
    return table_header
}
// let cosn = tableHeaders
export default tableHeaders
// const fig = new GeneraticTable()

// <tr class="table_header">
//     <th class="table_" style="width: 5%;">Код</th>
//     <th class="table_" style="width: 12%;">Дата создания</th>
//     <th class="table_" style="width: 12%;">Менеджер</th>
//     <th class="table_" style="width: 12%;">Статус</th>
//     <th class="table_" style="width: 30%;">Информация лида</th>
//     <th class="table_" style="width: 30%;">Комментарий</th>
// </tr>

