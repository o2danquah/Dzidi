import {React, useState} from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';




function Menu() {
  const [value, setValue] = useState("1");
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const FoodItems = [{id:1, Food:"Rice and Soup", Price:"$20"}, {id:2, Food:"Rice and Beef Sauce", Price:"$20"}, {id:3, Food:"Spagetti Bolanga", Price:"$20"}, {id:4, Food:"Rice Curry", Price:"$23"}]
  return (
    <>
    <Navbar/>
    <Hero heroTitle="Our Menu" />
    
    <Box  sx={{ width: '100%', typography: 'body4'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', alignContent: "center", paddingLeft: "50px", textEmphasisColor: "secondary"}}>
          <TabList onChange={(handleChange)} variant="scrollable" scrollButtons="auto" indicatorColor='dark' textColor='secondary'>
            <Tab label="Starters" value="1" />
            <Tab label="Drinks" value="2"/>
            <Tab label="Dessert" value="3" />
            <Tab label="Salad" value="4" />
            <Tab label="Crunchy Salad" value="5" />
            <Tab label="Soup" value="6" />
            <Tab label="Local Dishes" value="7" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <h2 className='Panel-Header text-center'>Menu</h2>
          <div className='container2'>
            
            <div className='row justify-content-center width-100'>
              {
                FoodItems.map((items) => (
                <div className='col-lg-6 sm-4 d-flex text-left justify-content-center flex-row'>
                <h6 className='pe-5'>{items.Food}</h6>
                <p>{items.Price}</p>
                <span className='span-bottom'></span>
              </div>
                ))
              }
              
            
             
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>

    </>
  )
}

export default Menu