import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="joblist-container">
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{
          borderRight: 1,
          borderColor: 'divider',
          '& .MuiTab-root': {
            color: '#ffffff9d',
            fontFamily: `'Dosis', sans-serif !important`,
            fontWeight: `bold`
          },
          '& .Mui-selected': {
            color: '#E94560',
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#E94560',
          },
        }}
      >
        <Tab label="Amazon" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
      <Box sx={{ flexGrow: 1, p: 0 }}>
        <TabPanel value={value} index={0}>
          Content for Tab 1 goes here.
        </TabPanel>
        <TabPanel value={value} index={1}>
          Content for Tab 2 goes here.
        </TabPanel>
        <TabPanel value={value} index={2}>
          Content for Tab 3 goes here.
        </TabPanel>
      </Box>
    </Box>
    </div>
  );
}