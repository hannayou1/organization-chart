import img_user from '../assets/img/img_user.png'
import state_online from '../assets/img/ico_state_online.png'
import state_red from '../assets/img/ico_state_red.png'
import state_yellow from '../assets/img/ico_state_yellow.png'
import img_chatting from '../assets/img/icon/message_grey.png' 
import img_schedule from '../assets/img/icon/appointment_grey.png' 
import img_team from '../assets/img/icon/team_grey.png' 
import img_channel from '../assets/img/icon/channel_grey.png' 
import img_colleague from '../assets/img/icon/teammember_grey.png' 


import Chatting from '../components/Chatting';
import Schedule from '../components/Schedule';
import Team from '../components/Team';
import Channel from '../components/Channel';
import Colleague from '../components/Colleague';
import Organization from '../components/Organization'
import Search from '../components/Search'



export const orgText = [
    {
        img : img_user,
        state : state_online,
        name : '신진철',
        depart : '솔루션개발팀',
        email : 'skfdjlskjfklsmjf@naver.com',
        mobile : '010-1234-1234',
        tel : '+8202-1231-1234' 
    },
    {
        img : img_user,
        state : state_red,
        name : '신진철신진철신진철신진철신진철신진철신진철신진철신진철',
        depart : '솔루션개발팀',
        email : 'skfdjlskjfklsmjf@naver.com',
        mobile : '010-1234-1234',
        tel : '+8202-1231-1234' 
    },
    {
        img : img_user,
        state : state_yellow,
        name : '신진철신진철신진철신진철신진철신진철신진철신진철신진철',
        depart : '솔루션개발팀',
        email : 'skfdjlskjfklsmjf@naver.com',
        mobile : '010-1234-1234',
        tel : '+8202-1231-1234' 
    },
    {
        img : img_user,
        state : state_yellow,
        name : '신진철신진철신진철신진철신진철신진철신진철신진철신진철',
        depart : '솔루션개발팀',
        email : 'skfdjlskjfklsmjf@naver.com',
        mobile : '010-1234-1234',
        tel : '+8202-1231-1234' 
    },
    {
        img : img_user,
        state : state_yellow,
        name : '신진철신진철신진철신진철신진철신진철신진철신진철신진철',
        depart : '솔루션개발팀',
        email : 'skfdjlskjfklsmjf@naver.com',
        mobile : '010-1234-1234',
        tel : '+8202-1231-1234' 
    },
    {
        img : img_user,
        state : state_yellow,
        name : '신진철신진철신진철신진철신진철신진철신진철신진철신진철',
        depart : '솔루션개발팀',
        email : 'skfdjlskjfklsmjf@naver.com',
        mobile : '010-1234-1234',
        tel : '+8202-1231-1234' 
    },
    {
        img : img_user,
        state : state_yellow,
        name : '신진철신진철신진철신진철신진철신진철신진철신진철신진철',
        depart : '솔루션개발팀',
        email : 'skfdjlskjfklsmjf@naver.com',
        mobile : '010-1234-1234',
        tel : '+8202-1231-1234' 
    }
]

 // 각 탭의 내용을 배열로 관리
 export const tabContents =  [
    { component: <Chatting title="채팅" />, title: "채팅", img:img_chatting },
    { component: <Schedule title="일정예약" />, title: "일정예약" , img:img_schedule},
    { component: <Team title="팀관리" />, title: "팀관리" , img:img_team },
    { component: <Channel title="채널관리" />, title: "채널관리"  , img:img_channel},
    { component: <Colleague title="팀원관리" />, title: "팀원관리", img:img_colleague },
 ];


  // 각 탭의 내용을 배열로 관리
  export const tabContents02 =  [
    { component: <Organization title="조직도" />, title: "조직도"},
    { component: <Search title="검색" />, title: "검색" },
 ];

