// Import React
import { Fragment } from 'react';

// Import antd
import { Row, Col } from 'antd';

// Import Components
import Box from '../../../components/box/Box';
import RadioGroup from 'src/components/form-elements/radio/RadioGroup';
import FormApp from 'src/components/form-elements/form/FormApp';
import CheckAll from '../../../components/form-elements/checkbox/CheckAll';

function HomePageFilter() {
  const radioOptions = [
    { label: 'Lorem 1', value: '1' },
    { label: 'Lorem 2', value: '2' },
    { label: 'Lorem', value: '3' }
  ];

  const plainOptions = ['Apple', 'Pear', 'Orange'];

  return (
    <FormApp name="form">
      <Fragment>
        <Row>
          <Col span={24}>
            <Box title="GLOBAL.TITLES.SORT">
              <RadioGroup direction="vertical" name="sort" options={radioOptions} />
            </Box>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Box title="GLOBAL.TITLES.BRANDS">
              <CheckAll options={plainOptions} name="brands" />
            </Box>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Box title="GLOBAL.TITLES.TAGS">
              <CheckAll options={plainOptions} name="tags" />
            </Box>
          </Col>
        </Row>
      </Fragment>
    </FormApp>
  );
}

export default HomePageFilter;
