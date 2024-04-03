import { Link } from "react-router-dom";
import { useEffect ,useState } from "react";
import { Item, HoverItem, ItemContainer } from "./styles";
import AOS from "aos";
import 'aos/dist/aos.css';
import data from "../../assets/data.json";

interface ItemProps {
    "thumb": Number,
    "title": string,
    "link": string,
    "description": string,
    "tag": string,
    "filter" : string
};

export const ItemBox = ({ filtername }:{ filtername: string }) => {
    const [list, setList] = useState(data.list);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true
        }); // AOS init
    }, []);

    useEffect(() => {
        const filteredData = filtername !== 'all' ? data.list.filter(data => data["filter"] === filtername) : data.list;
        setList(filteredData);
    },[filtername])

    
    return (
        <ItemContainer data-aos="fade-up">
            {list.map((item:ItemProps, index: number) => {
                return (
                    <Link to={item.link} key={index} target="_blank" data-aos="fade-up">
                        <Item className={`${process.env.PUBLIC_URL}/thumb/${item.thumb}.png`} id="thumbItem" />
                        <HoverItem id="hoverItem">
                            <div className="text_wrap">
                                <h3>{'project ' + (index + 1)}</h3>
                                <p className="title">{item.title}</p>
                                <p className="desc">{item.description}</p>
                            </div>
                            <p className="tag">{item.tag}</p>
                        </HoverItem>
                    </Link>
                );
            })}
        </ItemContainer>
    );
}