import React, { useState } from 'react'
import img_user from '../assets/img/img_user.png'
import state_online from '../assets/img/ico_state_online.png'

import { orgText , tabContents02 } from '../data/main';


const WrapOrg = () => {

	
 // 현재 선택된 탭의 인덱스를 관리하는 state
 const [selectedTab, setSelectedTab] = useState(0);

 // 탭을 클릭할 때 호출되는 함수
 const handleTabClick = (index) => {
   setSelectedTab(index);
 };



  return (
    <>
	 <div className='wrap_org'>
		<div className="wrap_org_common">
			<ul className="nav nav-tabs tab_org">
					{tabContents02.map((tab, index) => (
							<li className={index === selectedTab ? 'active' : ''}  key={index}>
								<a 
									className="a_org" 
									onClick={() => handleTabClick(index)}    
								>									
									<span className="span_menu">{tab.title}</span>
								</a>
							</li>
						))}

			</ul>
			<div className="search-set">
		
				<div className="input-group input_search wide-search input_search1">
					<input id="tbOrgSearchValue" type="text" className="form-control" name="msg" placeholder="검색어를 입력하세요." />
					<button className="input-group-addon btn_search btn_search1">
						<span className="ico_search2"></span>
						<span className="ico_x" style={{display:"none"}}></span>
					</button>
				</div>
				<div class="input-group input_search small-search input_search1">
                        <button class="input-group-addon small_btn_search">
                            <span class="ico_search2"></span>
                            <span class="ico ico_ddl"></span>
                        </button>
                    </div>
			</div>
		</div>

		{/* 선택된 탭의 내용 */}
		<div style={{ marginTop: '10px' }}>
			{tabContents02[selectedTab].component}
		</div>

		
	</div>

    </>
    
  )
}

export default WrapOrg