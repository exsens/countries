import Select from 'react-select';

import { ReactComponent as Search } from '../../icons/search.svg';

import './search-panel.scss';

const SearchPanel = () => {
  const options = [
    { value: 'ASIA', label: 'Asia' },
    { value: 'EURO', label: 'Euro' }
  ];

  return (
    <form className="search-from">
      <label className="card search-from__input" htmlFor="country">
        <Search fill="#2b3945"/>
        <input
          type="text"
          name="country"
          placeholder="Search for a country?"
        />
      </label>

      <Select
        options={options}
        classNamePrefix={'custom-select'}
        placeholder={'Filter by Region'}
      />

    </form>
  );
};

export default SearchPanel;