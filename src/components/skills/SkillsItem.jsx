import PropTypes from 'prop-types';

const SkillsItem = ({ item }) => {
    const { title, description, subtitle, languages, subtitle2, webtools } = item;

    return (
        <div className=" mx-auto mt-9 p-9 bg-white  space-y-5">
            <h4 className="font-bold text-2xl text-center">{title}</h4>
            <p className="text-justify">{description}</p>

            <h3 className="font-bold text-lg text-cyan-600 text-center">{subtitle}</h3>
            <ul className="listado text-center">
                {languages.map((language, i) => <li key={i}>{language}</li>)}
            </ul>

            <h3 className="font-bold text-lg text-cyan-600 text-center">{subtitle2}</h3>
            <ul className="listado text-center">
                {webtools.map((webtool, i) => <li key={i}>{webtool}</li>)}
            </ul>
        </div>

    )

}


SkillsItem.propTypes =
{
    item: PropTypes.object
}



export default SkillsItem;