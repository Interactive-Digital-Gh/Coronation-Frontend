/* eslint-disable react/prop-types */
import InsightCard from './InsightCard';

const Book = ({ item }) => {
    return (
        <InsightCard
            theme="purple"
            to={item.link || `/individual/insights/${item.id}`}
            image={item.image}
            category={item.category}
            date={item.date}
            title={item.heading}
            excerpt={item.details}
        />
    );
};

export default Book;
