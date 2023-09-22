import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Fade } from 'react-awesome-reveal';

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
        <Box sx={{ pl: 3 }}>
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
        "Amazon": {
            position: "Software Development Engineer Intern",
            dates: "May 2023 – Aug 2023",
            points: [
                "Placed 1st in organizational hackathon by collaborating with team to implement optional frontend components on branded lists in TypeScript to boost internal testing configurability by 20%.",
                "Refactored code to optimize bulk add-to-cart confirmation pop-up content update logic and loading latency by 60%",
                "Engineered a scalable feature on Amazon Fresh widget using Java, TypeScript, and internal frontend frameworks to enable shoppers to replace product suggestions on branded lists with up to 3 backup items."
            ],
        },
        "Solace Notify": {
            position: "Owner and Chief Technical Officer",
            dates: "Apr 2019 – Present",
            points: [
                "Founded and managed all aspects of an online premium membership Discord-based reselling community.",
                "Outlined the end-to-end development of in-house projects from design to delivery including iOS applications, Google Chrome Extensions, and websites",
                "Integrated the Stripe API on to the dashboard to process ~5,000 customer payments and 2,000+ subscriptions.",
                "Implemented site inventory monitors using Node.js and Discord API to monitor thousands of items on 100+ retailers and send alerts as soon as a specific item is restocked.",
                "Recruited and delegated workflow of 20 staff members to streamline completion of daily tasks by 75%."
            ],
        },
        "Cal Poly Pomona": [
            {
                position: "Computer Science Tutor",
                dates: "Feb 2023 – Present",
                points: [
                    "Provide personalized, one-on-one tutoring to students in programming, advanced algorithms, and data structures.",
                    "Evaluate assignments and code providing actionable feedback to promote understanding and improvement.",
                ],
            },
            {
                position: "Undergraduate Research Assistant",
                dates: "Jul 2022 – Nov 2022",
                points: [
                    "Leveraged GPU acceleration with CUDA using NASA supercomputer and OpenCV in C++ to stitch images in real-time captured by drones to form a panorama.",
                    "Incorporated parallel processing in image stitching algorithm to optimize speed from O(N) to O(logN) time with MPI to bolster efficiency by ~25%.",
                    "Performed 100+ benchmarks to analyze serial and parallel runtime speeds between CPU and GPU cores.",
                ],
            }
        ]
    }

  return (
        <Fade triggerOnce delay={300}>
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <div className="joblist-container">
                <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                sx={{
                borderRight: 1,
                borderColor: 'divider',
                '& .MuiTab-root': {
                    color: '#9BA4B5',
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
                        <Tab label={key} key={key} />
                    ))}
                </Tabs>
                {Object.keys(jobList).map((key, i) => (
                    <TabPanel value={value} index={i}>
                        <span className="job-position">
                            {jobList[key]["position"]}
                        </span>
                        <div className="job-dates">
                            {jobList[key]["dates"]}
                        </div>
                        
                            {!Array.isArray(jobList[key]) ? (
                                <div className="job-container">
                                    {jobList[key]["points"]?.map((point, i) => (
                                        <ul className="job-description" key={i}>
                                            <Fade 
                                            triggerOnce
                                            direction='right' 
                                            delay={`${i*5}`} 
                                            >
                                            <li className="point" key={i}>{point}</li>
                                            </Fade>
                                        </ul>
                                    ))}
                                </div>
                            ) : (
                                <div>
                                    {jobList[key].map((job) => (
                                        <div className="job-container">
                                            <span className="job-position">
                                                {job.position}
                                            </span>
                                            <div className="job-dates">
                                                {job.dates}
                                            </div>
                                            {job.points.map((point, i) => (
                                                <ul className="job-description" key={i}>
                                                <Fade 
                                                triggerOnce
                                                direction='right' 
                                                delay={`${i*5}`} 
                                                >
                                                <li className="point" key={i}>{point}</li>
                                                </Fade>
                                                </ul>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                    </TabPanel>
                ))}
                </div>
            </Box>
        </Fade>
  );
}

export default JobList;