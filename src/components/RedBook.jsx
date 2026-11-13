/* eslint-disable react/prop-types */
import InsightCard from './InsightCard';

const RedBook = ({ item }) => {
    return (
        <InsightCard
            theme="red"
            to={item.link || `/corporate/insights/${item.id}`}
            image={item.image}
            category={item.category}
            date={item.date}
            title={item.heading}
            excerpt={item.details}
        />
    );
};

export default RedBook;
