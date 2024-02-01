import React, { useState, useRef, useEffect } from 'react'
import { orgText, tabContents } from '../data/main';

const WrapView = () => {

    const [isWrapViewVisible, setWrapViewVisible] = useState(false);
   
    const handleButtonClick = () => {
        setWrapViewVisible(!isWrapViewVisible);
        
      };


 // 현재 선택된 탭의 인덱스를 관리하는 state
 const [selectedTab, setSelectedTab] = useState(0);

 // 탭을 클릭할 때 호출되는 함수
 const handleTabClick = (index) => {
   setSelectedTab(index);
 };


const [isViewVisible, setViewVisible] = useState(true);

// const toggleView = () => {
//     // 상태를 토글
//     //   setViewVisible(!isViewVisible);
//         // alert 창 띄우기
//     alert('View Toggled!');
// };

  return (
    <>
        <div className={`wrap_view ${isWrapViewVisible ? 'visible' : 'hidden'}`}>
        <div id='divAdd'>
            <div className="box_btn_group p10">
                <div className="pull-left font-middle view_addr_title">사용자 보기 &nbsp;&nbsp;&nbsp;<span id="orgUserCount-addr" className="span-count">5</span></div>
                <div className="pull-right">
                    <input type="checkbox" id="addrChk" style={{display : 'none'}} />
                    <button className="btn_blue2 mr_5 btn_check_all" >전체선택</button>
                    <button className="btn_blue2 mr_5 btn_check_add" >사용자추가</button>
                </div>
            </div>
            <div class="box_view_user box_view_user_top">
                    <div class="bottom_table">
                        <table class="table_design">
                            <tbody id="tbodyList-addList">
                                {orgText.map((org, key) => (
                                <tr>
                                    <th><input type="checkbox" id="chk_userList0" value="d9fa2836ca10" />
										<label for="chk_userList0"></label>
									</th>
                                    <td className="td_info" key={key}> 
                                    <span className="ico_user" onclick="showContactModal('d9fa2836ca10', 'userList')">
                                        <img alt="user image" className="image_user" src={org.img} />
                                        <img alt="presence image" className="image_presence" src={org.state} /></span>
                                        <span className="user_name">
                                            <a href="javascript:void(0);" className="user_text " onclick="showContactModal('d9fa2836ca10', 'userList')">
                                                {org.name}</a></span>
                                        <ul className="td_info_detail">
                                            <li className="email ">{org.email}</li>
                                        </ul>
                                    </td>
                                    <td >
                                        <a href="javascript:void(0);" class="txt_btn" onclick="removeUserLIst(this);"><span class="span_img_minus"></span></a></td>
                                </tr>
                                	))}
                            </tbody>
                        </table>
                    </div>
            </div>
            <div className="box_tab_select" id="tabBox">
                <div className="tab_view">
                    <ul className="nav nav-tabs">
                    
                    {tabContents.map((tab, index) => (
                        <li className={index === selectedTab ? 'active' : ''}  key={index}>
                            <a 
                                className="menu_message" 
                                onClick={() => handleTabClick(index)}    
                            >
                                {/* <span className="span_menu_img span_img_msg"></span> */}
                                <img className="icon_img" src={tab.img} />
                                <span className="span_menu">{tab.title}</span>
                            </a>
                        </li>
                    ))}
                    </ul>
                </div>
                {/* <!-- only mobile --> */}
                <div className="tab_view_mobile">
                    <select className="input_wide options">
                        <option className="menu_message" value="0">채팅</option>
                        <option className="menu_schedule" value="1">일정예약</option>
                        <option className="menu_manage_team" value="2">팀관리</option>
                        <option className="menu_manage_channel" value="3">채널관리</option>
                        <option className="menu_manage_member" value="4">팀원관리</option>
                    </select>
                </div>
                {/* <!-- //only mobile --> */}

                <div className="tab-content tab_view_content">
                    {/* 선택된 탭의 내용 */}
                    <div style={{ marginTop: '10px' }}>
                    {tabContents[selectedTab].component}
                    </div>
                <div>
    </div>



    
                </div>
            </div>
        </div>
    </div>
    <button className="toggle_view"  onClick={handleButtonClick}>

        <span className="ico ico_arrow"></span>
   
    </button>
 
</>
  )
}

export default WrapView