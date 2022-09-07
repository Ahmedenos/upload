import React from 'react'
import "./style.css"
// import axios from 'axios'
export default function Profile() {
    // const [out,setProfile]=useState([])
    // useEffect(()=>{
    //     axios.get("data.json").then(res=>{
    //         setProfile(res.data.profile)
    //     })
    // },[])
    // const myProfile=out.map(item=>{
    //     return(
    //         <div className="bar" key={item.id}>
    //         <span className="title">{item.profileTitle}</span>
    //         <span className="perc">{item.profilePre}</span>
    //         <div className="parent">
    //             <span className={item.class}></span>
    //         </div>
    //     </div>
    //     )
    // })
    return (
  
        <div className="profile_skills" id="profilelink">
            <div className="container">
                <div className="profile">
                    <h2 className="profile-title"><span>My </span>Profile</h2>
                    <ul className="profile-list">
                        <li className="profile-item">
                            <span>Name</span>
                            Ahmed Khaled
                        </li>
                        <li className="profile-item">
                            <span>Birthday</span>
                            12/8/1998
                        </li>
                        <li className="profile-item">
                            <span>Address</span>
                            El Mahala El Koubra
                        </li>
                        <li className="profile-item">
                            <span>Phone</span>
                            010 6717 55 92
                        </li>
                        <li className="profile-item">
                            <span>Email</span>
                            ahmdkhaldnws105@gmail.com
                        </li>
                        <li className="profile-item">
                            <span>Website</span>
                            <span className="web">www.google.com</span>
                        </li>
                    </ul>
                </div>
                
                <div className="skills">
                    <h2 className="skills-title">Some <span>skills</span></h2>
                    <p className="skills-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </p>
                   {/* {myProfile} */}
                   <div className="bar" >
                        <span className="title">BootStrap</span>
                        <span className="perc">100%</span>
                        <div className="parent">
                            <span className="sp1"></span>
                        </div>
                    </div>
                   <div className="bar" >
                        <span className="title">Css3</span>
                        <span className="perc">90%</span>
                        <div className="parent">
                            <span className="sp2"></span>
                        </div>
                    </div>
                   <div className="bar" >
                        <span className="title">jQuery</span>
                        <span className="perc">80%</span>
                        <div className="parent">
                            <span className="sp3"></span>
                        </div>
                    </div>
                    
             
                </div>
                
            </div>
        </div>
    )
}
