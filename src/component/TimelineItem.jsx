import PropTypes from 'prop-types';

const TimelineItem = ({ title, subtitle, date, description }) => {
    return (
        <div className="relative pl-8 pb-8">
            {/* Point de la timeline */}
            <div className="absolute left-0 top-0 mt-1.5 -ml-1.5 h-3 w-3 rounded-full border-2 border-blue-500 bg-white"></div>

            {/* Ligne verticale */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-300"></div>

            {/* Contenu */}
            <div className="group relative flex flex-col items-start">
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>

                {subtitle && (
                    <span className="text-sm font-medium text-blue-600 mb-1">{subtitle}</span>
                )}

                {date && (
                    <time className="text-xs text-gray-500 tracking-wide mb-2">{date}</time>
                )}

                {description && (
                    <p className="text-gray-700">{description}</p>
                )}
            </div>
        </div>
    );
};

TimelineItem.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string
};

export default TimelineItem;