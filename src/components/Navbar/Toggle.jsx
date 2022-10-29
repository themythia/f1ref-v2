import ToggleSwitch from './ToggleSwitch';

const Toggle = ({ label, type }) => {
  return (
    <li className='flex justify-between mb-2'>
      <label htmlFor={type}>{label}</label>
      <ToggleSwitch type={type} />
    </li>
  );
};
export default Toggle;
