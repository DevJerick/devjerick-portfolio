import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../style/experience.css";
import { BiDesktop } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import wave from "../img/wave.svg";
import wave1 from "../img/wave1.svg";

const Experience = () => {
  return (
    <div className='experience'>
      <div className='wave'>
        <img src={wave} alt='wave' />
      </div>
      <h1 className='experience-title'>Experience</h1>
      <VerticalTimeline lineColor='#6c63ff'>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='April 2022 – November 2022'
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BiDesktop />}>
          <h3 className='vertical-timeline-element-title title'>
            Software Developer (Java)
          </h3>
          <h4 className='vertical-timeline-element-subtitle sub-title'>
            BMWARE SOFTWARE DEVELOPMENT INC.
          </h4>
          <p className='description'>
            Development tools that used is NetBeans, JDK, JRE and PostgreSQL.
            Creating a system based on the requirements or needs of the customer
            usually Point of Sale, Inventory Management etc. Work with support
            team/tester to ensure that the user interface and functionality
            delivered matched the customer requirements.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='August 2021 – March 2022'
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BiDesktop />}>
          <h3 className='vertical-timeline-element-title title'>IT STAFF</h3>
          <h4 className='vertical-timeline-element-subtitle sub-title'>
            LPGMA PARTY LIST
          </h4>
          <p className='description'>
            Installing and configuring computer hardware, software, system,
            networks, printers and scanners. Repairing and replacing equipment
            as necessary. Monitoring the views and followers of the
            Vloggers/Content Creator that they handled and encode to excel file
            for weekly and monthly report
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2017 - 2021'
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaGraduationCap />}>
          <h3 className='vertical-timeline-element-title title'>
            Tertiary Level
          </h3>
          <h4 className='vertical-timeline-element-subtitle sub-title'>
            Bachelor of Science in Information Technology
          </h4>
          <p className='description'>Bacolor, Pampanga</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2011-2016'
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaGraduationCap />}>
          <h3 className='vertical-timeline-element-title title'>
            Secondary Level
          </h3>
          <h4 className='vertical-timeline-element-subtitle sub-title'>
            Pampanga Central High School (San Simon) Inc. / Alternative Learning
            System (ALS)
          </h4>
          <p className='description'>San Agustin, San Simon, Pampanga</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2005 - 2011'
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaGraduationCap />}>
          <h3 className='vertical-timeline-element-title title'>
            Primary Level
          </h3>
          <h4 className='vertical-timeline-element-subtitle sub-title'>
            San Agustin Elementary School
          </h4>
          <p className='description'>San Agustin, San Simon, Pampanga</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div className='wave1'>
        <img src={wave1} alt='wave' />
      </div>
    </div>
  );
};

export default Experience;
