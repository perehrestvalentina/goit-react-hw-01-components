import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory=({items})=>{
    return(
        <table className={css.transaction_history}>
  <thead className={css.thead}>
    <tr>
      <th className={css.title}>Type</th>
      <th className={css.title}>Amount</th>
      <th className={css.title}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(item =>(
         <tr key={item.id}>
         <td>{item.type}</td>
         <td>{item.amount}</td>
         <td>{item.currency}</td>
       </tr>
    ))}
   
     </tbody>
</table>
    );
};

TransactionHistory.PropTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default TransactionHistory;