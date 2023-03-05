import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleMenu } from '../../slices/settingsSlice';

const Link = ({ to, content }) => {
  const dispatch = useDispatch();

  return (
    <li
      className={clsx(
        'mb-2 duration-200',
        "hover:after:content-['>'] hover:after:ml-1 hover:after:text-lg"
      )}
    >
      <NavLink to={to} onClick={() => dispatch(toggleMenu())}>
        {content}
      </NavLink>
    </li>
  );
};
export default Link;
