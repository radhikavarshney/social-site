import React from 'react'
import "./rightbar.css"
import {Users} from "../../dummyData";
import Online from '../online/Online';

function Rightbar() {
  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img src="assets/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText"><b>Joe</b> and <b>3 other friends </b> have their birthday today</span>
          </div>
          <img src="assets/ad.png" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle"> Online Friends</h4>
          <ul className="rightbarFriendList">
            {
              Users.map(u => (
                <Online user={u} key={u.id}/>
              ))
            }
          </ul>
        </div>
    </div>
  )
}

export default Rightbar