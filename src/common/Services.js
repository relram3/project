import React, { Component } from "react";
import "../styles/services.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <h1 className="profile-title">ATTORNEY PROFILE</h1>
        <Tabs forceRenderTabPanel defaultIndex={0}>
          <TabList className="tablist">
            <Tab>Family Based Green Card</Tab>
            <Tab>Employee Based Green Card</Tab>
            <Tab>US Citizenship</Tab>
            <Tab>Non-Immigrant or Temporary Visas</Tab>
            <Tab>Deportation Defense</Tab>
          </TabList>
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList className="tablist">
                <Tab>Immediate Relatives</Tab>
                <Tab>Immediate Relatives</Tab>
                <Tab>Immediate Relatives</Tab>
                <Tab>Immediate Relatives</Tab>
                <Tab>Immediate Relatives</Tab>
                <Tab>Immediate Relatives</Tab>
              </TabList>
              <TabPanel className="tablist">
                <p>Hello0</p>
              </TabPanel>
              <TabPanel>
                <p>Hi</p>
              </TabPanel>
              <TabPanel>
                <p>Hi</p>
              </TabPanel>
              <TabPanel>
                <p>Hi</p>
              </TabPanel>
              <TabPanel>
                <p>Hi</p>
              </TabPanel>
              <TabPanel>
                <p>Hi</p>
              </TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Profile;
