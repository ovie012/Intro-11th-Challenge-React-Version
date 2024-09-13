import { useState } from 'react'
import './App.css'

function App() {
  const [click, setClick] = useState({
    featuresClick : false,
    companyClick : false,
    toggleMobile : false
  });

  const featuresClicked = () => {
    setClick({...click, featuresClick : !click.featuresClick});
  };

  const companyClicked = () => {
    setClick({...click, companyClick : !click.companyClick})
  }

  const toggleMobile = () => {
    setClick({...click, toggleMobile : !click.toggleMobile})
  }

  return (
    <>
      <div className='main-div'>
        <header>
          <div className="snap">
              <img src="/logo.svg" alt="logo" />
          </div>
          <nav className="dropdown">
              <ul>
                  <li onClick={featuresClicked}>Features {click.featuresClick ? ( <img className="up1" src="/icon-arrow-up.svg" /> ) : ( <img className="down1" src="/icon-arrow-down.svg" />)}</li>
                  <li onClick={companyClicked}>Company {click.companyClick ? (<img className="up2" src="/icon-arrow-up.svg" />) : (<img className="down2 active" src="/icon-arrow-down.svg" />)}</li>
                  <li>Careers</li>
                  <li>About</li>
              </ul>
          </nav>
          <nav className="account">
              <ul>
                  <li>Login</li>
                  <li><span>Register</span></li>
              </ul>
          </nav>
          <span onClick={toggleMobile} className="click"><img src="/icon-menu.svg" /></span>
          {click.toggleMobile && (
            <>
              <div className="cover"></div>
              <div className="mobile-nav">
                  <nav className="mobile-dropdown">
                  <span onClick={toggleMobile} className="close"><img src="/icon-close-menu.svg" /></span>
                      <ul>
                          <li onClick={featuresClicked} className="feature-click">Features {click.featuresClick ? (<img className="upone" src="/icon-arrow-up.svg" />) : (<img className="downone" src="/icon-arrow-down.svg" />)}</li>        
                              {click.featuresClick && (
                                <nav className="mobile-features">
                                  <ul>
                                      <li><img src="/icon-todo.svg" /> Todo List</li>
                                      <li><img src="/icon-calendar.svg" /> Calender</li>
                                      <li><img src="/icon-reminders.svg" /> Reminders</li>
                                      <li><img src="/icon-planning.svg" /> Planning</li>
                                  </ul>
                                </nav>
                              )}
                          <li onClick={companyClicked} className="company-click">Company 
                            {click.companyClick ? (<img className="uptwo" src="/icon-arrow-up.svg" />) : (<img className="downtwo" src="/icon-arrow-down.svg" />)}</li>
                              {click.companyClick && (
                                <nav className="moblie-company">
                                  <ul>
                                      <li>History</li>
                                      <li>Our Team</li>
                                      <li>Blog</li>
                                  </ul>
                                </nav>
                              )}
                          <li>Careers</li>
                          <li>About</li>
                      </ul>
                  </nav>
                  <nav className="mobile-account">
                      <ul>
                          <li>Login</li>
                          <li><span>Register</span></li>
                      </ul>
                  </nav>
                {/* </div> */}
              </div>
            </>
          )}
        </header>
        {click.featuresClick && (
          <nav className="features">
            <ul>
                <li><img src="/icon-todo.svg" /> Todo List</li>
                <li><img src="/icon-calendar.svg" /> Calender</li>
                <li><img src="/icon-reminders.svg" /> Reminders</li>
                <li><img src="/icon-planning.svg" /> Planning</li>
            </ul>
          </nav>
        )}
        {click.companyClick && (
          <nav className="company">
            <ul>
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
            </ul>
          </nav>
        )}
        <main>
            <div className="main">
                <div className="mobile-banner">
                    <img src="/image-hero-mobile.png" alt="image banner" />
                </div>
                <div className="text">
                    <h1>Make <br />remote work</h1>
                    <p>Get your team in sync, no matter your location. <br />Streamline processes, 
                        create team rituals, and <br />watch productivity soar.</p>
                    <button>Learn more</button>
                    <section className="logos">
                        <img className="logo databiz" src="/client-databiz.svg" alt="data biz" />
                        <img className="logo audiophile" src="/client-audiophile.svg" alt="audio phile" />
                        <img className="logo meet" src="/client-meet.svg" alt="meet" />
                        <img className="logo maker" src="/client-maker.svg" alt="maker" />
                    </section>
                </div>
                <div className="banner">
                    <img src="/image-hero-desktop.png" alt="image banner" />
                </div>
            </div>
        </main>
      </div>
    </>
  )
}

export default App

// LEGEND.DEV coded this
































//below is a more concise and professional way of coding the above



// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [click, setClick] = useState({
//     featuresClick: false,
//     companyClick: false,
//     toggleMobile: false,
//   });

//   const handleClick = (key) => {
//     setClick((prevState) => ({ ...prevState, [key]: !prevState[key] }));
//   };

//   const renderDropdown = (isOpen, iconClass, options) => (
//     isOpen && (
//       <nav className={iconClass}>
//         <ul>
//           {options.map((option, index) => (
//             <li key={index}>
//               <img src={option.icon} alt={option.label} /> {option.label}
//             </li>
//           ))}
//         </ul>
//       </nav>
//     )
//   );

//   const featuresOptions = [
//     { icon: '/icon-todo.svg', label: 'Todo List' },
//     { icon: '/icon-calendar.svg', label: 'Calendar' },
//     { icon: '/icon-reminders.svg', label: 'Reminders' },
//     { icon: '/icon-planning.svg', label: 'Planning' },
//   ];

//   const companyOptions = [
//     { label: 'History' },
//     { label: 'Our Team' },
//     { label: 'Blog' },
//   ];

//   return (
//     <div className="main-div">
//       <header>
//         <div className="snap">
//           <img src="/logo.svg" alt="logo" />
//         </div>
//         <nav className="dropdown">
//           <ul>
//             <li onClick={() => handleClick('featuresClick')}>
//               Features{' '}
//               <img
//                 className={click.featuresClick ? 'up1' : 'down1'}
//                 src={`/icon-arrow-${click.featuresClick ? 'up' : 'down'}.svg`}
//                 alt="arrow"
//               />
//             </li>
//             <li onClick={() => handleClick('companyClick')}>
//               Company{' '}
//               <img
//                 className={click.companyClick ? 'up2' : 'down2'}
//                 src={`/icon-arrow-${click.companyClick ? 'up' : 'down'}.svg`}
//                 alt="arrow"
//               />
//             </li>
//             <li>Careers</li>
//             <li>About</li>
//           </ul>
//         </nav>
//         <nav className="account">
//           <ul>
//             <li>Login</li>
//             <li>
//               <span>Register</span>
//             </li>
//           </ul>
//         </nav>
//         <span onClick={() => handleClick('toggleMobile')} className="click">
//           <img src="/icon-menu.svg" alt="menu" />
//         </span>
//         {click.toggleMobile && (
//           <>
//             <div className="cover"></div>
//             <div className="mobile-nav">
//               <nav className="mobile-dropdown">
//                 <span onClick={() => handleClick('toggleMobile')} className="close">
//                   <img src="/icon-close-menu.svg" alt="close" />
//                 </span>
//                 <ul>
//                   <li onClick={() => handleClick('featuresClick')} className="feature-click">
//                     Features{' '}
//                     <img
//                       className={click.featuresClick ? 'upone' : 'downone'}
//                       src={`/icon-arrow-${click.featuresClick ? 'up' : 'down'}.svg`}
//                       alt="arrow"
//                     />
//                   </li>
//                   {renderDropdown(click.featuresClick, 'mobile-features', featuresOptions)}
//                   <li onClick={() => handleClick('companyClick')} className="company-click">
//                     Company{' '}
//                     <img
//                       className={click.companyClick ? 'uptwo' : 'downtwo'}
//                       src={`/icon-arrow-${click.companyClick ? 'up' : 'down'}.svg`}
//                       alt="arrow"
//                     />
//                   </li>
//                   {renderDropdown(click.companyClick, 'mobile-company', companyOptions)}
//                   <li>Careers</li>
//                   <li>About</li>
//                 </ul>
//               </nav>
//               <nav className="mobile-account">
//                 <ul>
//                   <li>Login</li>
//                   <li>
//                     <span>Register</span>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </>
//         )}
//       </header>
//       {renderDropdown(click.featuresClick, 'features', featuresOptions)}
//       {renderDropdown(click.companyClick, 'company', companyOptions)}
//       <main>
//         <div className="main">
//           <div className="mobile-banner">
//             <img src="/image-hero-mobile.png" alt="image banner" />
//           </div>
//           <div className="text">
//             <h1>Make <br />remote work</h1>
//             <p>
//               Get your team in sync, no matter your location. <br />
//               Streamline processes, create team rituals, and <br />
//               watch productivity soar.
//             </p>
//             <button>Learn more</button>
//             <section className="logos">
//               <img className="logo databiz" src="/client-databiz.svg" alt="data biz" />
//               <img className="logo audiophile" src="/client-audiophile.svg" alt="audio phile" />
//               <img className="logo meet" src="/client-meet.svg" alt="meet" />
//               <img className="logo maker" src="/client-maker.svg" alt="maker" />
//             </section>
//           </div>
//           <div className="banner">
//             <img src="/image-hero-desktop.png" alt="image banner" />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;
