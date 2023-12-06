import AsyncSelect from 'react-select/async';
import useSearchInput, { DEFAULT_CURRENT_LOCATION_OPTIONS } from './hooks';

const SearchInput = () => {
  const { handleOnChange, loadOptions } = useSearchInput();

  return (
    <AsyncSelect
      classNames={{
        control: (state) =>
          state.isFocused
            ? '!bg-transparent !border-none !focus:border-none !focus:outline-none !p-2.5 !w-full !focus:ring !focus:ring-sky-300 !rounded-xl !transition'
            : '!bg-transparent !border-none !focus:border-none !focus:outline-none !p-2.5 !w-full !focus:ring !focus:ring-sky-300 !rounded-xl !transition',
      }}
      loadOptions={loadOptions}
      onChange={handleOnChange}
      cacheOptions
      defaultOptions={[DEFAULT_CURRENT_LOCATION_OPTIONS]}
      placeholder='Search for cities'
    />
  );
};

export default SearchInput;
