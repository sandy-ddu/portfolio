import { Contents } from "./styles";
import { ItemBox, Filters,Description } from "components";
import { useEffect, useState } from "react";
import { Intro } from "pages";


export const Portfolio = () => {
    const [filter, setFilter] = useState<string>('all');
    const [introIs, setIntro] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIntro(false);
        }, 3500);

        return () => clearTimeout(timeout);
    }, []);
    
    const setFilterStatus = (childVal: string) => setFilter(childVal);

    return (
        <>
            {introIs ?
                <Intro /> :
                <Contents>
                    <Description/>
                    <Filters filterIs={setFilterStatus} />
                    <ItemBox filtername={filter}/>
                </Contents>
            }
        </>

    );
}
