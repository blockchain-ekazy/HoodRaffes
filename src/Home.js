import Counter from "./Counter";
import Mintbtn from "./mintbtn.js";
import gifimg from './images/gifimg.webp'; 
import img1 from './images/img1.webp';
import img2 from './images/img2.webp';
import img3 from './images/img3.webp';
import sptlogo from './images/sptlogo.png';
import storybg from './images/storybg.png'
import oslogo from './images/oslogo.webp';
import welcome from './images/welcome.png';
import Navbar from "./navbar";
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "//protonmail.us20.list-manage.com/subscribe/post?u=07efc7b64fac2bd456eb88051&amp;id=ab1ffb2a37";
const SimpleForm = () => <MailchimpSubscribe url={url}/>
const CustomForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div className="mailchimpform my-2">
        <p className="text-white registerFont text-acenter text-md-left">Interested in our NFT launch? Enter your email address to be kept up to date with details about when we are going to drop our collection</p>
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "#fcdc1f" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "#fcdc1f" }}>Subscribed !</div>}
      </div>
    )}
  />
)
 
function Home(){
  const launchDate = new Date("Fabruary 1, 2022 00:00:00");  
  const now = new Date();
  now.setMinutes(now.getMinutes() + now.getTimezoneOffset());
  let launch = now >= launchDate ? true : false;
 
  return(
    <div>
      <div className="hero" id="home">
        <div className="pt-3 container">
          <Navbar />
          <div className="row align-items-center">
            <div className="col-md-12">
              {/* <span className="py-5">{launch ? <h1 className="titletext text-center">Minting is live now</h1> : <img src={welcome} /> }</span> */}
              <span className="py-5">{launch ? <h1 className="titletext text-center">Minting is live now</h1> : <h1 className="titletext text-center py-5">WHITELIST LAUNCH MARCH 15TH</h1> }</span>
              <Counter />
            </div>
          </div>
        </div>
      </div>
      <div className="welcome pt-5 container" id="welcome">
        <div className="row pb-5 align-items-center">
        <div className="col-md-1"></div>
          <div className="col-md-7 text-acenter text-md-left">
            <h1 className="titletext pb-3">Welcome to the Hood Raffes</h1>
              <p className="text-white text-lg">
                The Hood Raffes are a collection of 10,000 unique gangster G-Raffes living it up on the Ethereum Blockchain.
              </p>
              <p className="text-white text-lg">
                To apply for membership to the Hood Raffes all you have to do is click on the ‘Mint’ button at launch and pay 0.1 ETH + gas as an initiation fee. For this fee you will be inducted into the gang and you will receive a randomly selected G-Raffe NFT. Your G-Raffe will double as your key to the door as more utility becomes available, as well as your ticket for various giveaways and other cool features!
              </p>
          </div>
          <div className="col-md-3">
            <img src={gifimg} className="gifimg"/>
            {launch ? <Mintbtn /> : <CustomForm />
            }
          </div>
          <div className="col-md-1"></div>
          <div className="col-12">
            <p className="text-center text-white">Our whitelist pre-sale will go live on March 15th! Join our discord<a href="https://discord.com/invite/hoodraffesnft" target="_blank"><i class="fab fa-discord mx-2 py-3"></i></a> to find out how to get listed. </p>
          </div>
        </div>
      </div>
      <div className="icons container">
        <div className="row icons3">
          <div className="col-md-4">
            <img src={img1} />
            <p class="text-center text-white">10,000 pieces of digital art randomly generated from <b>160</b> individual layers consisting of a variety of expressions, hairstyles, clothing and accessories.</p>
          </div>
          <div className="col-md-4">
            <img src={img2} />
            <p class="text-center text-white">All NFTs cost 0.1 ETH + gas. Entry into the gang costs the same for everyone!</p>
          </div>
          <div className="col-md-4">
            <img src={img3} />
            <p class="text-center text-white">By owning a Hood Raffe NFT you will be part of the gang and gain access to the members only area (The Hood) which is currently under construction. Additional benefits will be added as we move forward as a community.</p>
          </div>
          <p className="text-center text-white">100 of the NFTs will be held back with 50  going to the development team and 50 being for future giveaways and rewards</p>
        </div>
      </div>
      <div className="story pt-5 px-5 container align-items-center" id="story">
        <div className="row align-items-center">
          <div className="col-md-12 text-acenter text-md-left">
            <h1 className="titletext pb-3">THE STORY... </h1>
            <p className="text-white text-lg">
            After some time out of the game OG-Raffe returns to his old stomping ground to find what was once a well-respected tower of 10,000 giraffes running the city, is now little more than derelict buildings that have long been deserted. With rival gangs and threats everywhere, it is no longer safe to display the Hood Raffe name.
            <br /><br />
            The OG vowed to get the gang back to their prime and immediately started looking out for new recruits. Once the Hood Raffes reach 10,000 members they can begin their work on rebuilding the hood and taking the gang back to its heyday.
            <br /><br /> 
            </p>
            {/* <video className="myvid" width="100%" controls   src={mov}></video> */}
          </div>
        </div>
      </div>
      <img src={storybg} className="storybg"/>
      <div className="team pt-5 container" id="team">
        <div className="row">
          <div className="col-md-12">
            <h1 className="titletext text-center pb-3">Team</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 col-md-3">
            <img src={gifimg} className="d-block mx-auto" />
            <h5 className="teamname pt-4">Sputty</h5>
          </div>
          <div className="col-6 col-md-3">
            <img src={gifimg} className="d-block mx-auto" />
            <h5 className="teamname pt-4">Lil' Poss</h5>
          </div>
          <div className="col-6 col-md-3">
            <img src={gifimg} className="d-block mx-auto" />
            <h5 className="teamname pt-4">Ridfamcreative</h5>
          </div>
          <div className="col-6 col-md-3">
            <img src={gifimg} className="d-block mx-auto" />
            <h5 className="teamname pt-4">HomyHolmes</h5>
          </div>
          <div className="col-6 col-md-3">
            <img src={gifimg} className="d-block mx-auto" />
            <h5 className="teamname pt-4">JD</h5>
          </div>
          <div className="col-6 col-md-3">
            <a href="https://www.fiverr.com/share/vzY2RA"><img src={gifimg} className="d-block mx-auto" />
              <h5 className="teamname pt-4">Sabirpro</h5>
            </a>
          </div>
          <p className="text-center text-white"><br />We have come together to bring you the Hood Raffes NFT collection!<br />
            Our team contains members from different races, backgrounds, nationalities and genders and we believe in equality for all!</p>
        </div>
      </div>
      <div className="roadmap pt-5 px-5 container" id="roadmap">
        <div className="row align-items-center text-acenter text-md-left">
          <div className="col-md-12">
            <h1 className="titletext pb-3">ROADMAP </h1>
            <p className="text-white text-lg">These are some of the things you can expect from the team and OG Raffe:</p>
            <h4 class="titletext">Short Term</h4>
            <p className="text-white text-lg">Some of our shorter-term plans and goals are:
              <ul>
                <li>Build a thriving community of members that are as enthusiastic about our artwork as we are</li>
                <li>Giveaways at key milestones (25%, 50%, 75% and 100%). $25,000 giveaway at each milestone. You’re G-Raffe NFT will be your ticket to each draw!</li>
                <li>Begin work on 3D avatars to allow our holders explore the metaverse as a G-Raffe;</li>
                <li>Establish a community wallet that will receive 15% of the second-hand sale royalties to fund future innovations and promote longevity.</li>
                <li>Charity initiative – partnering with a local repatriation charity that is close to our hearts! More to follow…</li>
                <li>Build a thriving community of members that are as enthusiastic about our artwork as we are</li>
              </ul>
            </p>
            <h4 class="titletext">Longer Term</h4>
            <p className="text-white text-lg">Things we would love to do in the future (you've got to dream big right?):
              <ul>
                  <li>Recreate ‘The Hood’ in 3D within the metaverse for holders to visit as their 3D avatars.</li> 
                  <li>Implement a rewards system to ensure active members of the community are rewarded for their contributions.</li>
                </ul>
                We want to do more than just be the next NFT art project. These are just some of the current plans but the journey will be a collaborative one to get the Hood Raffes to the top! We would like the community to have a say in how we progress and implement different utility as well as interactivity, rewards and more!
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
          <h3 class="titletext pt-5 pb-2 text-center">Check us out on</h3>
          <img src={oslogo} className="d-block mx-auto oslogo" />
          </div>
        </div>
      </div>
      <hr className="mt-4 mb-2" />
      <div className="text-center text-white footer">
        <a href="#" target="_blank"><img className="sptlogo" src={sptlogo} /></a><br />
        <a href="https://twitter.com/HoodRaffesNFT" target="_blank"><i className="fab fa-twitter mx-2 py-3"></i></a>
        <a href="https://discord.com/invite/hoodraffesnft" target="_blank"><i className="fab fa-discord mx-2 py-3"></i></a>
        <a href="https://www.facebook.com/Hood-Raffes-108804948289189" target="_blank"><i className="fab fa-facebook mx-2 py-3"></i></a>
        <a href="https://www.instagram.com/hoodraffesnft/" target="_blank"><i className="fab fa-instagram mx-2 py-3"></i></a>
        <small className="d-block pb-2">© 2022 Hood Raffes</small>
      </div>
  </div>
  );
}

export default Home;