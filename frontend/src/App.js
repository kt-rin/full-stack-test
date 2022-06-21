import logo from './img/logo.png';
import jetGirl from './img/jetGirl.png';
import createBy from './img/createBy.png';
import collection from './img/collection.png';
import avatar1 from './img/avatar1.png';
import avatar2 from './img/avatar2.png';
import avatar3 from './img/avatar3.png';
import avatar4 from './img/avatar4.png';
import './style/App.css';
import Timer from './component/Timer'

import { useEffect, useState } from "react";
import axios from 'axios';

function App() {

  const connectWallet = async () => {
    const query = {
      username: 'admin',
      password: '12345'
    }

    try {
      const { data: result } = await axios.post(
        `http://localhost:8080/api/v1/authen/connect_wallet`,
        { params: { ...query } }
      );

      alert("Connect Wallet Success!")
      console.log({ result });

    } catch (error) {
      alert("Connect Wallet Fail!")
      console.log(error.message);
    }
  };

  return (
    <>
      <main>
        <div className="big-wraper">
          <div className="main-container">

            <header>
              <div className="container">
                <div className="logo">
                  <img src={logo} alt="logo" />
                  <input
                    className="icon input"
                    type="text"
                    id="search"
                    name="search"
                    placeholder='search'
                  />
                </div>

                <div className="links">
                  <ul>
                    <li><a href="#">Marketplace</a></li>
                    <li><a href="#">Feed</a></li>
                    <li><a href="#">Stake</a></li>
                    <li><a href="#">DAO</a></li>
                    <li>
                      <a
                        href="#"
                        className='btn'
                        onClick={connectWallet}
                      >
                        Connect wallet
                      </a></li>
                  </ul>
                </div>

              </div>
            </header>

            <div className="showcase-area">
              <div className="container">

                <div className="left">
                  <img src={jetGirl} alt="Jet Girl" className='jet-girl' />
                </div>


                <div className="right">
                  <div className="big-title">
                    <p className='badged'>Live action</p>
                    <h1 className='title'>#2 - Jet Girl</h1>

                    <table className='tb' >
                      <tr>
                        <td className='small-text'>Created by</td>
                        <td className='small-text'>Collection</td>
                      </tr>
                      <tr>
                        <td>
                          <img src={createBy} alt="createBy" className='createBy' />
                          @tranmautritam
                        </td>
                        <td>
                          <img src={collection} alt="collection" className='collection' />
                          Sanctuary of Legends
                        </td>
                      </tr>

                      <tr className='pd'>
                        <td className='small-text'>Current bid</td>
                        <td className='small-text'>Action ends in</td>
                      </tr>
                      <tr>
                        <td className='current-bid'>1.00</td>
                        <td>
                          <Timer />
                        </td>
                      </tr>
                      <tr>
                        <td className='small-text'>$2,867.59</td>
                        <td className='time-small-text'>hours minutes seconds</td>
                      </tr>
                    </table>

                    <div className="cta">
                      <a href="#" className="btn">Place a bid</a>
                      <div className='avatar-group'>
                        <img src={avatar1} alt="avatar1" className='avatar' />
                        <img src={avatar2} alt="avatar2" className='avatar' />
                        <img src={avatar3} alt="avatar3" className='avatar' />
                        <img src={avatar4} alt="avatar4" className='avatar' />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default App;
