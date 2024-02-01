import React from 'react'
import { orgText } from '../data/main'

const Organization = () => {
  return (
    <div className='left-content-wrap' >
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