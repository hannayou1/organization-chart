import React, { useEffect, useState } from 'react'
import { orgText } from '../data/main'
import add_group from '../assets/img/icon/add_group.png'

const Organization = () => {

  return (
    <div className='left-content-wrap org_layout' >
			<div className='tab-content tab_org_content'>
				<div className='tab-pane fade in active'>
					<div className="tree_scroll_div" id='treeScrollDIv'>
					<div className="input-group input_search wide-search input_search1">
						<input id="tbOrgSearchValue" type="text" className="form-control" name="msg" placeholder="검색어를 입력하세요." />
						<button className="input-group-addon btn_search btn_search1">
							<span className="ico_search2"></span>
							{/* <span class="ico_x" style="display:none"></span> */}
						</button>
                    </div>
                    <div>
					{/* 여기에 조직도
					<h2>React Simple JSTree Example</h2> */}
					<div id="divTree" class="jstree jstree-1 jstree-default" role="tree" aria-multiselectable="true" tabindex="0" aria-activedescendant="a84a2a988cce437d" aria-busy="false"><ul class="jstree-container-ul jstree-children jstree-wholerow-ul jstree-no-dots" role="group"><li role="treeitem" aria-selected="false" aria-level="1" aria-labelledby="1_anchor" aria-expanded="true" id="1" class="jstree-node jstree-last jstree-open" aria-busy="false"><div unselectable="on" role="presentation" class="jstree-wholerow">&nbsp;</div>
					<i class="jstree-icon jstree-ocl" role="presentation"></i>
					<a class="jstree-anchor" href="#" tabindex="-1" id="1_anchor">
						<i className="jstree-icon jstree-themeicon jstree-themeicon-custom" 
							role="presentation" 
							></i>
						<span class="node-text">주식회사 자이소프트</span>&nbsp;&nbsp;  
						<img src={add_group} className="img-group-add" />  
						 </a>
						 <ul role="group" class="jstree-children">
							<li role="treeitem" aria-selected="false" aria-level="2" a class="jstree-node jstree-closed" aria-busy="false">
								<div unselectable="on" role="presentation" class="jstree-wholerow">&nbsp;</div>
								<i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="#" tabindex="-1" id="520b1814f4594389_anchor">
								<i className="jstree-icon jstree-themeicon jstree-themeicon-custom" 
								role="presentation" 
								></i>
									<span class="node-text">대표이사</span>&nbsp;&nbsp; 
									<img src={add_group} className="img-group-add" /> 
								</a>

								<ul role="group" class="jstree-children" >
									<li role="treeitem" aria-selected="true" aria-level="3" aria-labelledby="de4404028e1345a0_anchor" id="de4404028e1345a0" class="jstree-node  jstree-leaf"><div unselectable="on" role="presentation" class="jstree-wholerow jstree-wholerow-clicked">&nbsp;</div><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor jstree-clicked" href="#" tabindex="-1" id="de4404028e1345a0_anchor">
									
									
									<i class="jstree-icon jstree-themeicon jstree-themeicon-custom" role="presentation" ></i>
									<span class="node-text">미래 기술 연구소</span>&nbsp;&nbsp;
								
								
								<img src={add_group} className="img-group-add" /> 
								  
								  
								    </a></li></ul>


							</li>
							
						
						</ul>
						</li>
						</ul>
					</div>
					</div>
					</div>
				</div>
			</div>
			<div className='box_search addr_box_search'>
				<div className="box_btn_group">
                        <div className="pull-left font-middle view_addr_title">조직도 구성원&nbsp;&nbsp;&nbsp;<span id="orgUserCount-addr" className="span-count">0</span></div>
                        <div className="pull-right">
                            <input type="checkbox" id="addrChk" style={{display:'none'}}/>
                            <button className="btn_blue2 mr_5 btn_check_all" >전체선택</button>
                            <button className="btn_blue2 mr_5 btn_check_add" >사용자추가</button>
                        </div>
                </div>
              
				<div className="box_table_srcoll">
                        <table className="table_design">
                            <colgroup>
                                <col />
                                <col/>
                                <col />
                            </colgroup>
                            <tbody id="tbodyList-userList">
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
												<li className="depart"><a href="javascript:void(0);" className="" onclick="showContactModal('d9fa2836ca10', 'userList')">{org.depart}</a>
												</li>
												<li className="email ">{org.email}</li>
												<li className="mobile ">{org.mobile}</li>
												<li className="time ">{org.tel}</li>
											</ul>
										</td>
                                    <td>
										<a  className="txt_btn">
										<span className="span_img_plus"></span>
										</a>
									</td>
                                </tr>
                                	))}
                                
                                
                                
                                
                                
                                
                            </tbody>
                        </table>
                    </div>
			</div>
		</div>
  )
}

export default Organization