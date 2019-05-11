import React from 'react';
import { RadioGroup } from './radio.js';

const Tabs = (props) => {  

    const onTabSelected = () => {
        console.log('tab changed');
    };

    const TabPanels = (props) => {
        return (
            <React.Fragment>
            <div>Tab 1</div>
            <div>Tab 2</div>
            <div>Tab 3</div>
            </React.Fragment>
        )
    }

    return (
        <div>
            Tabs
            <RadioGroup
                onRadioChange={onTabSelected}
                selectedRadioValue="left"
                models={[
                { 
                    id: 'tabs-left',
                    name: 'tabs-element',
                    labeltext: 'Left',
                    value: 'left'
                },
                {   
                    id: 'tabs-center',
                    name: 'tabs-element',
                    labeltext: 'Center',
                    value: 'Center' 
                },
                {
                    id: 'tabs-right',
                    name: 'tabs-element',
                    labeltext: 'Right',
                    value: 'Right'
                }
              ]}></RadioGroup>
              <TabPanels></TabPanels>
        </div>
    )
}

export default Tabs;