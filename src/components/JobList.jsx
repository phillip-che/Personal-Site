import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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

const JobList  = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const jobList = {
        // "Amazon": {
        //     position: "",
        //     dates: "",
        //     points: ["", ""],
        // },
        "Solace Notify": {
            position: "",
            dates: "",
            points: ["", ""],
        },
        "Cal Poly Pomona": [
            {
                position: "",
                dates: "",
                points: ["", ""]
            },
            {
                position: "",
                dates: "",
                points: ["", ""]
            }
        ]
    }

    const tech_stack = [
        "Java",
        "JavaScript",
        "Python",
        "React.js",
        "Node.js",
        "HTML/CSS",
        "MySQL",
        "Supabase"
    ];

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
            },
            '& .Mui-selected': {
                color: '#E94560 !important',
                fontWeight: `bold`
            },
            '& .MuiTabs-indicator': {
                backgroundColor: '#E94560',
            },
            }}
            >
                {Object.keys(jobList).map((key) => (
                    <Tab label={key} />
                ))}
        </Tabs>
            {/* {Object.keys(jobList).map((key, index) => (
                <TabPanel value={value} index={index}>
                    {Object.key(jobList[key]).map((key, index) => (
                        <div>sdf</div>
                    ))}
                </TabPanel>
            ))} */}
        </Box>
    </div>
  );
}

export default JobList;