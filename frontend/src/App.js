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
  const [accessToken, setAccessToken] = useState('')
  const [searchItemName, setSearchItemName] = useState('')

  const apiUrl = 'http://localhost:8080/api/v1'

  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  const getAllData = async () => {

    try {
      const { data: result } = await axios.get(
        `${apiUrl}/content/allData`);

      alert("Get Show Data Success!")
      console.log({ result });

    } catch (error) {
      alert("Get Show Data Fail!")
      console.log(error.message);
    }
  };

  const search = async () => {
    const query = {
      item_name: searchItemName
    }

    try {
      const { data: result } = await axios.get(
        `${apiUrl}/content/search`, {
        params: { ...query }
      });

      alert("Search Data Success!")
      console.log({ result });

    } catch (error) {
      alert("Search Data Item Not Found!")
      console.log(error.message);
    }
  };

  const connectWallet = async () => {
    const body = {
      username: 'admin',
      password: '12345'
    }

    try {
      const { data: result } = await axios.post(
        `${apiUrl}/authen/connect_wallet`, {
        body
      });


      setAccessToken(result.token)

      alert("Connect Wallet Success!")
      console.log({ result });

    } catch (error) {
      alert("Connect Wallet Fail!")
      console.log(error.message);
    }
  };

  const placeABid = async () => {
    const item_id = '1'
    const body = {
      username: 'admin',
      price: '5000'
    }

    try {

      const { data: result } = await authAxios.put(`/content/place_bid/${item_id}`, body);

      alert("Place A Bid Success!")
      console.log({ result });

    } catch (error) {
      alert("Place A Bid Fail.. Please Connect Wallet First!")
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllData()

  }, [])


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
                    onKeyPress={e => {
                      if (e.key === 'Enter') {
                        search()
                      }
                    }}
                    onChange={(e) => {
                      setSearchItemName(e.target.value)
                    }}
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
                      <a
                        href="#"
                        className="btn"
                        onClick={placeABid}
                      >
                        Place a bid
                      </a>
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
