import React from 'react'

const Search = () => {
  return (
    <div class="left-content-wrap">
        <div class="tab-content tab_org_content" style={{height:"100%"}}>
            <div id="menu1" class="tab-pane fade active in">
                <div class="box_btn_group box_btn_group_search">
                        <div class="pull-left font-middle view_search_title" >검색 결과&nbsp;&nbsp;&nbsp;<span id="orgUserCount-search" class="span-count">0</span></div>
                        <div class="pull-right btn_box_search btn_box_search0">
                            <input type="checkbox" style={{display:"none"}} id="userChk" />
                            <button class="btn_blue2 mr_5 btn_check_all" onclick="checkedAll('userChk', 'tbodyList-search')">전체선택</button>
                            <button class="btn_blue2 mr_5 btn_check_add" onclick="onAddCheckAddList('search');">사용자추가</button>
                            <button style={{display:"none"}} class="btn_line2 viewList">사용자 보기</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Search