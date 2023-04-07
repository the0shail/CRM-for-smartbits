
/**
 * This function is responsible for the color of the odd rows in the table
 * @param {string} HTMLclass You need to specify the name of the class without a dot
 */
function coloredTableFields(HTMLclass: string): void {
    const fields: NodeListOf<Element> = document.querySelectorAll(`.${HTMLclass}`);

    fields.forEach((tr, index) => {
        if (index % 2 == 0) tr.classList.add("spicy");
    });
};


export default coloredTableFields;