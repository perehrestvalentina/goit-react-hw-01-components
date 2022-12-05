import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({stats, title})=>{
    
    <section class="statistics">
  {title && <h2 class="title">{title}</h2>}

  <ul class="stat-list">
 {stats.map(({id, label, percentage})=>(
       <li key = {id}
       style={{ 
        backgroundColor: getRandomHexColor(),}}> 
       <span class="label">{label}</span>
       <span class="percentage">{percentage}%</span>
    </li>
    ))}
  </ul>
</section>   
    
 };

 Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default Statistics;