import React from 'react';
import {
    HelpWrapper,
    HospitalIntroImg,
    HelpInfo
} from './style';

import {FormattedMessage} from "react-intl";
import { Collapse, Icon } from "antd";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function Help() {
    return (
        <HelpWrapper>
            <HospitalIntroImg/>
            <HelpInfo>
                <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({isActive}) => <Icon type="caret-right" rotate={isActive ? 90 : 0}/>}
                    className="site-collapse-custom-collapse"
                >
                    <Panel header="我们的治疗流程是怎样的？" key="1" className="site-collapse-custom-panel">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="在治疗前，病人应该注意些什么？" key="2" className="site-collapse-custom-panel">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="在治疗后，病人应该注意些什么呢？" key="3" className="site-collapse-custom-panel">
                        <p>{text}</p>
                    </Panel>
                </Collapse>
            </HelpInfo>
        </HelpWrapper>
    );
}

export default Help;