import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav >
      <ul>
        <li><Link  className='Link' to='/'>Home</Link></li>
        <li><Link className='Link' to='/create'>Create new service record</Link></li>
        <li><Link className='Link'to='/warrenty'>Warrenty Support</Link></li>
        <li><Link className='Link' to='/warrenty'>Link 1</Link></li>
        <li><Link className='Link'to='/Link1'>Link 2</Link></li>
        <li><Link className='Link'to='/Link1'>Link 3</Link></li>
        <li><Link className='Link'to='/Link1'>Link 4</Link></li>
        <li><Link className='Link'to='/Link1'>Link 5</Link></li>
        <li><Link className='Link'to='/Link1'>Link 6</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
