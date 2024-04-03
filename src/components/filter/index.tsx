import { Filter } from "./styles";
type FilterIsType = (childVal: string) => void;

export const Filters = ({filterIs}:{ filterIs: FilterIsType }) => {
    const changeFilter = (e:React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (!(e.target instanceof HTMLLIElement)) {
            return;
        }

        const name = e.target.dataset["name"] as string;
        filterIs(name);

        let clkItem = document.querySelectorAll('.filter li');
        for (let i = 0; i < clkItem.length; i++) clkItem[i].classList.remove("active"); 
        e.currentTarget.classList.add("active"); 
    };

    return (
        <Filter className="filter">
            <li data-name="all" className={'active'} onClick={e => changeFilter(e)}>All</li>
            <li data-name="web" onClick={e => changeFilter(e)}>Web</li>
            <li data-name="mobile" onClick={e => changeFilter(e)}>Mobile</li>
            <li data-name="others" onClick={e => changeFilter(e)}>Others</li>
        </Filter>
    );
}