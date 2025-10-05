import PropTypes from 'prop-types';
import TimelineItem from './subcomponent/TimelineItem.jsx';

const Timeline = ({ items, className }) => {
    return (
        <div className={`relative ${className || ''}`}>
            <div className="timeline-container">
                {items.map((item, index) => (
                    <TimelineItem
                        key={index}
                        title={item.title}
                        subtitle={item.subtitle}
                        date={item.date}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

Timeline.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string,
            date: PropTypes.string,
            description: PropTypes.string
        })
    ).isRequired,
    className: PropTypes.string
};

export default Timeline;