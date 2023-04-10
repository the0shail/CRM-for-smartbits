

class CreateTable{
    tableHeader: [{
        name: string,
        settings?: {
            class?: string,
            href?: string
        }
    }];
    tableContent: [{
        name: string,
        settings?: {
            class?: string,
            href?: string
        }
    }];
    constructor(tableHeader, tableContent?){
        this.tableHeader = tableHeader
        this.tableContent = tableContent
    }

    createTable(){
        const table = document.createElement('table')
        return table
    }
    createTableHeader(){
        const table = this.createTable();
        const tr = document.createElement('tr');
        table.append(tr);
        this.tableHeader.forEach(element => {
            const th = document.createElement('th');
            console.log(element);
            
            // th.textContent = element
            // tr.append(th)
        });
        return table
    }
}


// export default CreateTable



