import inView from 'in-view';

export default {

    inserted: el => {


        // const linkEl = Array.from(el.children).find(
        //     (el,item) => el.nodeName === "A"
        //     );

        function handleView(item) {
            const linkEl = Array.from(el.children).find(
                (el,item) => el.id === item

            );

            console.log(linkEl)
        }


        // function handleView(item) {
        //      const linkEl = Array.from(el.children).find(
        //     el => el.nodeName === "A"
        //     );
        //
        //      console.log(linkEl)
        //
        //
        //
        //     inView(`#${item}`)
        //     .on("enter", () => linkEl.classList.add('is-active'))
        //     .on("exit", el  => linkEl.classList.remove('is-active'))
        // }
        //
        ["hello", "two", "three", "four", "five", "six"].forEach(handleView);
    }
}