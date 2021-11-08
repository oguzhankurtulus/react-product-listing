// Import React
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import antd
import { Row, Col } from 'antd';

// Import Store
import { getItems } from 'src/store/actions/items/getItem';
import { getManufacturer } from 'src/store/actions/items/getManufacturer';
import { getTags } from 'src/store/actions/items/getTags';

// Import Components
import Box from '../../../components/box/Box';
import RadioGroup from 'src/components/form-elements/radio/RadioGroup';
import FormApp from 'src/components/form-elements/form/FormApp';
import CheckAll from '../../../components/form-elements/checkbox/CheckAll';
import { RootState } from 'src/store/store';

function HomePageFilter() {
  // Variables
  const dispatch = useDispatch();

  const brandState = useSelector((state: RootState) => state?.globalReducer?.getManufacturer);
  const tagState = useSelector((state: RootState) => state?.globalReducer?.getTags);

  const [brandsArray, setBrandsArray] = useState([]);
  const [tagsArray, setTagsArray] = useState([]);

  const radioOptions = [
    { label: 'Price low to high', value: '1' },
    { label: 'Price high to low', value: '2' },
    { label: 'New to old', value: '3' },
    { label: 'Old to new', value: '4' }
  ];

  const handleSort = (e) => {
    const sortValue = e.target.value === '1' || e.target.value === '2' ? 'price' : 'added';
    const orderValue = e.target.value === '1' || e.target.value === '3' ? 'asc' : 'desc';

    const variables = {
      page: 1,
      sort: sortValue,
      order: orderValue
    };

    dispatch(getItems(variables));
  };

  const handleFilterChange = (value, item) => {
    let variables;

    if (item === 'brands') {
      setBrandsArray(value);
      variables = {
        manufacturer: value,
        tags: tagsArray
      };
    } else {
      variables = {
        manufacturer: brandsArray,
        tags: value
      };
      setTagsArray(value);
    }

    dispatch(getItems(variables));
  };

  useEffect(() => {
    dispatch(getManufacturer());
    dispatch(getTags());
  }, []);

  return (
    <FormApp name="form">
      <Fragment>
        <Row>
          <Col span={24}>
            <Box title="GLOBAL.TITLES.SORT">
              <RadioGroup
                defaultValue={'1'}
                direction="vertical"
                name="sort"
                options={radioOptions}
                onChange={handleSort}
              />
            </Box>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Box title="GLOBAL.TITLES.BRANDS" style={{ height: '300px', overflow: 'auto' }}>
              <CheckAll
                options={brandState?.success?.data}
                name="brands"
                handleChange={(value) => handleFilterChange(value, 'brands')}
              />
            </Box>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Box title="GLOBAL.TITLES.TAGS" style={{ height: '300px', overflow: 'auto' }}>
              <CheckAll
                options={tagState?.success?.data}
                name="tags"
                handleChange={(value) => handleFilterChange(value, 'tags')}
              />
            </Box>
          </Col>
        </Row>
      </Fragment>
    </FormApp>
  );
}

export default HomePageFilter;
